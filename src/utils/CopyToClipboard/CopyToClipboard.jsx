import React from 'react'
import { PrimaryButton } from '..'

function CopyToClipboad({text}) {

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <PrimaryButton 
    onClick={handleCopy}
    children='Copy' />
  )
}

export default CopyToClipboad