// ScrollContext.js
import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const useScroll = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const [scrollToFooter, setScrollToFooter] = useState(false);

  return (
    <ScrollContext.Provider value={{ scrollToFooter, setScrollToFooter }}>
      {children}
    </ScrollContext.Provider>
  );
};
