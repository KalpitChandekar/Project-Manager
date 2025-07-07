export type SideBarMenuItem = {
  id: number;
  name: string;
  isSelected: boolean;
};

export type IconData = {
  id: number;
  name: string;
  icon: React.ReactNode;
  isSelected: boolean;
  label?: string;
};

export type AppType = {
  openSideBarObject: {
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };

  sideBarMenuObject: {
    sideBarMenu: SideBarMenuItem[];
    setSiteBarMenu: React.Dispatch<React.SetStateAction<SideBarMenuItem[]>>;
  };

  openProjectWindowObject: {
    openProjectWindow: boolean;
    setOpenProjectWindow: React.Dispatch<React.SetStateAction<boolean>>;
  };

  allIconDataObject: {
    allIconData: IconData[];
    setAllIconData: React.Dispatch<React.SetStateAction<IconData[]>>;
  };

  selectedIconObject: {
    selectedIcon: IconData | null;
    setSelectedIcon: React.Dispatch<React.SetStateAction<IconData | null>>;
  };

  openIconWindowObject: {
    openIconWindow: boolean;
    setOpenIconWindow: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
