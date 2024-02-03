import React, { useState } from 'react'
import QRCode from 'react-qr-code';

function QRcode() {

  const [input, setInput] = useState('');
  const [qrValue, setQRValue] = useState(null);

  const changeQR = () => {
    setQRValue(input);
  }

  return (
    <div className='h-[100vh] w-[100vw] bg-gray-600 text-white flex flex-col items-center justify-center gap-6'>
      <div className='flex gap-5'>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='input' 
          className='p-1 text-blue-700'/>
        <button 
          onClick={changeQR}
          className='p-1 border-white border-2'> Generate QR </button>
      </div>
      {
        qrValue && qrValue.length ? <QRCode value={qrValue} /> : null
      }
      
    </div>
  )
}

export default QRcode