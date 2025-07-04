"use client";

import { createContext, useState, useContext, useEffect } from "react";

type AppType = {
  openSideBarObject: {
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
  isMobileViewObject: {
    isMobileView: boolean;
    setIsMobileView: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const defaultState: AppType = {
  openSideBarObject: {
    openSideBar: false,
    setOpenSideBar: () => {},
  },
  isMobileViewObject: {
    isMobileView: false,
    setIsMobileView: () => {},
  },
};

const ContextApp = createContext<AppType>(defaultState);

export default function ContextAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 940);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileView) {
      setOpenSideBar(false);
    }
  }, [isMobileView]);

  return (
    <ContextApp.Provider
      value={{
        openSideBarObject: { openSideBar, setOpenSideBar },
        isMobileViewObject: { isMobileView, setIsMobileView },
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export function useContextApp() {
  return useContext(ContextApp);
}
