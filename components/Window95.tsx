import React from 'react';

interface Window95Props {
  title: string;
  children: React.ReactNode;
}

const Window95: React.FC<Window95Props> = ({ title, children }) => {
  return (
    <div className="window">
      <div className="window-header">
        <div className="window-title">{title}</div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};

export default Window95;