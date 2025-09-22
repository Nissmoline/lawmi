import React from 'react';

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #0A2B4C',
          borderRadius: '50%',
          animation: 'loadingSpin 1s linear infinite'
        }}
      ></div>
      <p style={{ color: '#666', fontSize: '14px' }}>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
