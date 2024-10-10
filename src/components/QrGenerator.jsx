import React, { useState } from 'react';

const QrGenerator = () => {

  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrdata] = useState("karan");
  const [size, setSize] = useState('150');

  async function generateQr() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR code:", error);
    } finally {
      setLoading(false);
    }
  }

  function downloadQr() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = "qrCode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  return (
    <div className="app-container">
      <h1 className='heading'>QR CODE GENERATOR</h1>
      {loading && <p>Please Wait.....</p>}
      {img && <img src={img} alt="QR Code" />}
      <div>
        <label htmlFor='input-data'>Data for QR</label>
        <input
          type="text"
          value={qrData}
          id="input-data"
          placeholder='Enter the data'
          onChange={(e) => setQrdata(e.target.value)}
        />
        <label htmlFor='input-size'>Image Size (eg.150)</label>
        <input
          type="text"
          value={size}
          id="input-size"
          placeholder='Enter the size of the image'
          onChange={(e) => setSize(e.target.value)}
        />
        <button
          className='generate'
          onClick={generateQr}
          disabled={loading}
        >
          Generate QR
        </button>
        <button
          className='download'
          onClick={downloadQr}
          disabled={!img || loading}
        >
          Download QR image
        </button>
      </div>
    </div>
  );
};

export default QrGenerator;
