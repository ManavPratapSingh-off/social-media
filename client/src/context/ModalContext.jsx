import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [uploadModalisOpen, setuploadModalisOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ uploadModalisOpen, setuploadModalisOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
