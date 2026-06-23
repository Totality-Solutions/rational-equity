// src/components/sections/product/PdfGrid.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { FileText, Download, Loader2 } from "lucide-react";
import Toast from "@/components/common/Toast";

export type PdfItem = {
  title: string;
  description?: string;
  size?: string;
  type?: string;
  fileUrl: string;
};

type Props = {
  data: PdfItem[];
};

const cardVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PdfGrid({ data }: Props) {
  const [pdfData, setPdfData] = useState<PdfItem[]>(data);
  
  // Download State
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [activeTitle, setActiveTitle] = useState("");

  // 🔹 Auto-calculate sizes on mount
  useEffect(() => {
    const fetchSizes = async () => {
      const updatedData = await Promise.all(
        data.map(async (doc) => {
          try {
            const response = await fetch(doc.fileUrl, { method: "HEAD" });
            const size = response.headers.get("content-length");
            if (size) {
              const mb = (parseInt(size) / (1024 * 1024)).toFixed(1);
              return { ...doc, size: `${mb} MB` };
            }
          } catch (err) { console.error("Size fetch failed", err); }
          return { ...doc, size: "..." };
        })
      );
      setPdfData(updatedData);
    };
    fetchSizes();
  }, [data]);

  const handlePdfDownload = async (url: string, title: string) => {
    try {
      setActiveTitle(title);
      setIsDownloading(true);
      setIsComplete(false);
      setDownloadProgress(0);

      const response = await fetch(url);
      if (!response.body) return;

      const reader = response.body.getReader();
      const contentLength = +(response.headers.get("Content-Length") ?? 0);
      
      let receivedLength = 0;
      let chunks = []; 

      // 🔹 Read the stream to track progress
      while(true) {
        const {done, value} = await reader.read();
        if (done) break;

        chunks.push(value);
        receivedLength += value.length;
        
        if (contentLength > 0) {
          setDownloadProgress((receivedLength / contentLength) * 100);
        }
      }

      // 🔹 Merge chunks and trigger download
      const blob = new Blob(chunks);
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${title}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(blobUrl);

      // 🔹 Success State
      setIsComplete(true);
      setDownloadProgress(100);

      // Auto-close toast after success animation
      setTimeout(() => {
        setIsDownloading(false);
      }, 3000);

    } catch (error) {
      console.error("Download failed", error);
      setIsDownloading(false);
    }
  };

  return (
    <>
      <Toast 
        isVisible={isDownloading} 
        message={activeTitle} 
        progress={downloadProgress}
        isComplete={isComplete}
      />

      <div className={`${pdfData.length >= 3 ? "grid grid-cols-3" : "flex justify-center"} gap-6`}>
        {pdfData.map((doc, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ scale: 1.01 }}
            onClick={() => handlePdfDownload(doc.fileUrl, doc.title)}
            className="group flex items-center justify-between p-6 bg-white border-2 border-gray-100 rounded-2xl cursor-pointer"
            style={pdfData.length < 3 ? { width: 'calc(33.333% - 1rem)', flex: '0 0 auto' } : undefined}
          >
            <div className="flex items-center gap-5">
              <div className="bg-brand-maroon/5 p-4 rounded-xl text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors duration-300">
                <FileText size={24} />
              </div>

              <div className="space-y-1">
                <h3 className="text-body-md font-bold leading-tight">
                  {doc.title}
                </h3>
                {doc.description && <p className="text-gray-500 text-body-sm-mobile">{doc.description}</p>}
                <p className="text-gray-400 text-[12px] flex items-center gap-1">
                  {doc.type || "PDF"} • {doc.size === "..." ? <Loader2 size={10} className="animate-spin" /> : doc.size}
                </p>
              </div>
            </div>
            <div className="text-gray-300 group-hover:text-brand-maroon transition-colors">
              <Download size={20} />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}