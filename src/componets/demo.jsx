import React from 'react';

const PhotoDownload = () => {
  const handleDownload = () => {
    const photoUrl =
      "https://drive.google.com/uc?export=download&id=1vWW1Yo0P2HxZ97mYv-ypJLO_IUMBts4g";
    const link = document.createElement('a');
    link.href = photoUrl;
    link.setAttribute('download', 'photo.jpg'); // Customize the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the link after download
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Photo</button>
    </div>
  );
};

export default PhotoDownload;
