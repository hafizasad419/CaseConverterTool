import React from 'react'
import { PrimaryButton } from '../'

function DownloadText({ text }) {

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'text.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <PrimaryButton
      onClick={handleDownload}
      children='Download Text'
    />
  )
}

export default DownloadText