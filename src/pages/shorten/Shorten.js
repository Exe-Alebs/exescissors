import React, { useState } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';

function Shorten() {
  const [longUrl, setLongUrl] = useState('');
  const [customSlug, setCustomSlug] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  // Set to true for testing

  const handleShortenUrl = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/shorten-url', {
        longUrl,
        customSlug,
      });

      const { url, qrCodeData } = response.data;

      setShortUrl(url.shortUrl);
      setQRCodeData(qrCodeData);
    } catch (error) {
      console.error(error);
      setShortUrl('');
      setQRCodeData('');
    }
  };

  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    return navigate('/login');
  }

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleShortenUrl}>
        <input
          type="text"
          placeholder="Enter a long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Custom slug (optional)"
          value={customSlug}
          onChange={(e) => setCustomSlug(e.target.value)}
        />
        <button type="submit">Shorten URL</button>
      </form>
      {shortUrl && (
        <div>
          <p>Shortened URL: {shortUrl}</p>
          <QRCode value={shortUrl} />
        </div>
      )}
    </div>
  );
}

export default Shorten;
