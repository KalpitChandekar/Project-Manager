export type SideBarMenuItem = {
  id: number;
  name: string;
  isSelected: boolean;
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
};
