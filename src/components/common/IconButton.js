import React from 'react';

const IconButton = ({ children }) => (
  <div className="m-2 flex w-16 cursor-pointer items-center justify-center rounded-3xl p-[1.1rem] shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] transition-transform hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.2)]">
    {children}
  </div>
);

export default IconButton;
