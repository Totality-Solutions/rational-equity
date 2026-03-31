'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import PageLoader from '@/components/common/PageLoader';

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <PageLoader /> : null;
} 