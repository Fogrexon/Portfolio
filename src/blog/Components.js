import React from 'react';

const outStyle = {
  width: '100%',
  height: '1000px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const inStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

export default () => (
  <div className="flex-center" style={outStyle}>
    <div style={{ width: '200px' }}>
      <div style={inStyle}>
        <i className="fas fa-wrench" style={{ fontSize: '100px' }} />
      </div>

      <div>ただいま準備中につきコンテンツはありません</div>
    </div>

  </div>
);
