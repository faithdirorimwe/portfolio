import React, { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading">
      {!showContent ? (
        <div className="spinner-container">
          <FadeLoader color="#00ffff" />
        </div>
      ) : (
        <div className={`content-container ${showContent ? 'show' : ''}`}>
        <div className="content">Your website content here</div>
      </div>
      )}
    </div>
  );
};

export default Loading;