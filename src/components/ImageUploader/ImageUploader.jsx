// components/ImageUploader.js
import { useState } from 'react';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [url, setUrl] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (url) {
      setImage(url);
      setUrl('');
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: '2px dashed #ccc',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: dragging ? '#f0f0f0' : '#fff',
        position: 'relative',
      }}
    >
      {image ? (
        <img src={image} alt="Dropped" style={{ maxWidth: '100%' }} />
      ) : (
        <div>
          <p>Drag and drop an image here or</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="fileInput"
          />
          <label htmlFor="fileInput" style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
            browse
          </label>
          <p>or</p>
          <form onSubmit={handleUrlSubmit}>
            <input
              type="text"
              value={url}
              onChange={handleUrlChange}
              placeholder="Enter image URL"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <button type="submit" style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;