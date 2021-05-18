import React, { ReactNode, useEffect, useState } from "react";

const SidebarContext = React.createContext({
    isSidebarOpen: false,
    setisSidebarOpen: (arg) => {}
});

interface Props {
  children: ReactNode;
}

const SidebarContextProvider = ({ children }: Props) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false)

  return (
    <SidebarContext.Provider
    value={{
        isSidebarOpen,
        setisSidebarOpen
    }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;

export { SidebarContextProvider };