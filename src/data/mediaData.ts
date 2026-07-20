export interface MediaItem {
  publisher: string;
  format: string;
  title: string;
  url: string;
  description: string;
  date: string;
  category: string;
}

export const mediaItems: MediaItem[] = [
  {
    publisher: "Thefynprint",
    format: "Interview",
    title: "Vivek Iyer discusses Gold with Neil Borate",
    url: "https://www.youtube.com/watch?v=EoyBhFVTPmk",
    description:
      "Rational's India Long-Only Fund ranked top-performing AIF in India for FY24, beating large peers on a post-tax basis.",
    date: "October 2025",
    category: "INTERVIEW",
  },
  {
    publisher: "ET Now",
    format: "Digital",
    title: "Vivek Iyer shares his perspective on the market with ET Now",
    url: "https://www.youtube.com/watch?v=sRMsbAe1n0w",
    description:
      "An interview on the gold thesis, the GIFT City fund structure, and why junior miners offer asymmetric upside over gold itself.",
    date: "May 2024",
    category: "DIGITAL",
  },
];

// Derives the public, key-free YouTube video thumbnail for a watch/shorts/youtu.be URL
export function getYouTubeVideoId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{11})/
  );
  return match ? match[1] : null;
}

export function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeVideoId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}
