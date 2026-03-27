'use client';

import { ThemeProvider } from '@emotion/react';
import Button from '@mui/material/Button';
import { MdDeleteForever } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <button class="bg-red-500">버튼</button>
      {/* <ThemeProvider theme={theme}> */}
      <Button
        variant="contained"
        onClick={() => {
          if (confirm('삭제할거임?')) {
            // 삭제 로직
          } else {
            // 삭제 안할 때 로직
          }
        }}>
        삭제
        <MdDeleteForever />
      </Button>
      {/* </ThemeProvider> */}
    </>
  );
}
