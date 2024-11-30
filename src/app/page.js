'use client'
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/course-management');
  }, [router]);

  return <Box />;
}