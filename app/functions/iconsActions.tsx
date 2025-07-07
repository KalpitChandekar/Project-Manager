import React from "react";
import {
  AccountBalance,
  AccountBox,
  AddShoppingCart,
  Agriculture,
  Apartment,
  Assessment,
  AttachMoney,
  Audiotrack,
  Backup,
  BeachAccess,
  Book,
  Brush,
  Build,
  Business,
  Campaign,
  Camera,
  CardGiftcard,
  Chat,
  Checkroom,
  Code,
  Computer,
  Construction,
  ContactPhone,
  CreditCard,
  Dashboard,
  DataUsage,
  DesignServices,
  DeveloperMode,
  DirectionsBike,
  DirectionsBus,
  DirectionsCar,
  DirectionsRun,
  DirectionsSubway,
  EmojiEmotions,
  Edit,
  Email,
  Engineering,
  Event,
  Explore,
  Extension,
  Face,
  Fastfood,
  Favorite,
  Feedback,
  FitnessCenter,
  Flight,
  Folder,
  Games,
  Gavel,
  Group,
  Handyman,
  Headset,
  HealthAndSafety,
  Home,
  Hotel,
  ImportContacts,
  Language,
  LaptopMac,
  Lightbulb,
  Link,
  List,
  LocalActivity,
  LocalBar,
  LocalCafe,
  LocalCarWash,
  LocalDining,
  LocalDrink,
  LocalFlorist,
  LocalGasStation,
  LocalGroceryStore,
  LocalHospital,
  LocalLaundryService,
  LocalLibrary,
  LocalMall,
  LocalMovies,
  LocalParking,
  LocalPharmacy,
  LocalPhone,
  LocalPizza,
  LocalPlay,
  LocalPolice,
  LocalPostOffice,
  LocalPrintshop,
  LocalSee,
  Lock,
  Mail,
  Map,
  MilitaryTech,
  MonetizationOn,
  Movie,
  MusicNote,
  Nature,
  Notifications,
  Park,
  Pets,
  PhotoCamera,
  Psychology,
  Restaurant,
  RocketLaunch,
  Savings,
  School,
  Science,
  SelfImprovement,
  ShoppingBag,
  ShoppingCart,
  Spa,
  Star,
  Store,
  SupportAgent,
  TheaterComedy,
  ThumbUp,
  Timer,
  TrendingUp,
  Watch,
  Wifi,
  Work,
  Yard,
} from "@mui/icons-material";

export const getIconComponent = (
  iconName: string,
  text?: string,
  fontSize?: string
): React.ReactElement | null => {
  const iconProps = fontSize ? { style: { fontSize } } : {};
  let IconComponent: React.ReactElement | null = null;

  switch (iconName) {
    case "AccountBalance":
      IconComponent = <AccountBalance {...iconProps} />;
      break;
    case "AccountBox":
      IconComponent = <AccountBox {...iconProps} />;
      break;
    case "AddShoppingCart":
      IconComponent = <AddShoppingCart {...iconProps} />;
      break;
    case "Agriculture":
      IconComponent = <Agriculture {...iconProps} />;
      break;
    case "Apartment":
      IconComponent = <Apartment {...iconProps} />;
      break;
    case "Assessment":
      IconComponent = <Assessment {...iconProps} />;
      break;
    case "AttachMoney":
      IconComponent = <AttachMoney {...iconProps} />;
      break;
    case "Audiotrack":
      IconComponent = <Audiotrack {...iconProps} />;
      break;
    case "Backup":
      IconComponent = <Backup {...iconProps} />;
      break;
    case "BeachAccess":
      IconComponent = <BeachAccess {...iconProps} />;
      break;
    case "Book":
      IconComponent = <Book {...iconProps} />;
      break;
    case "Brush":
      IconComponent = <Brush {...iconProps} />;
      break;
    case "Build":
      IconComponent = <Build {...iconProps} />;
      break;
    case "Business":
      IconComponent = <Business {...iconProps} />;
      break;
    case "Campaign":
      IconComponent = <Campaign {...iconProps} />;
      break;
    case "Camera":
      IconComponent = <Camera {...iconProps} />;
      break;
    case "CardGiftcard":
      IconComponent = <CardGiftcard {...iconProps} />;
      break;
    case "Chat":
      IconComponent = <Chat {...iconProps} />;
      break;
    case "Checkroom":
      IconComponent = <Checkroom {...iconProps} />;
      break;
    case "Code":
      IconComponent = <Code {...iconProps} />;
      break;
    case "Computer":
      IconComponent = <Computer {...iconProps} />;
      break;
    case "Construction":
      IconComponent = <Construction {...iconProps} />;
      break;
    case "ContactPhone":
      IconComponent = <ContactPhone {...iconProps} />;
      break;
    case "CreditCard":
      IconComponent = <CreditCard {...iconProps} />;
      break;
    case "Dashboard":
      IconComponent = <Dashboard {...iconProps} />;
      break;
    case "DataUsage":
      IconComponent = <DataUsage {...iconProps} />;
      break;
    case "DesignServices":
      IconComponent = <DesignServices {...iconProps} />;
      break;
    case "DeveloperMode":
      IconComponent = <DeveloperMode {...iconProps} />;
      break;
    case "DirectionsBike":
      IconComponent = <DirectionsBike {...iconProps} />;
      break;
    case "DirectionsBus":
      IconComponent = <DirectionsBus {...iconProps} />;
      break;
    case "DirectionsCar":
      IconComponent = <DirectionsCar {...iconProps} />;
      break;
    case "DirectionsRun":
      IconComponent = <DirectionsRun {...iconProps} />;
      break;
    case "DirectionsSubway":
      IconComponent = <DirectionsSubway {...iconProps} />;
      break;
    case "EmojiEmotions":
      IconComponent = <EmojiEmotions {...iconProps} />;
      break;
    case "Edit":
      IconComponent = <Edit {...iconProps} />;
      break;
    case "Email":
      IconComponent = <Email {...iconProps} />;
      break;
    case "Engineering":
      IconComponent = <Engineering {...iconProps} />;
      break;
    case "Event":
      IconComponent = <Event {...iconProps} />;
      break;
    case "Explore":
      IconComponent = <Explore {...iconProps} />;
      break;
    case "Extension":
      IconComponent = <Extension {...iconProps} />;
      break;
    case "Face":
      IconComponent = <Face {...iconProps} />;
      break;
    case "Fastfood":
      IconComponent = <Fastfood {...iconProps} />;
      break;
    case "Favorite":
      IconComponent = <Favorite {...iconProps} />;
      break;
    case "Feedback":
      IconComponent = <Feedback {...iconProps} />;
      break;
    case "FitnessCenter":
      IconComponent = <FitnessCenter {...iconProps} />;
      break;
    case "Flight":
      IconComponent = <Flight {...iconProps} />;
      break;
    case "Folder":
      IconComponent = <Folder {...iconProps} />;
      break;
    case "Games":
      IconComponent = <Games {...iconProps} />;
      break;
    case "Gavel":
      IconComponent = <Gavel {...iconProps} />;
      break;
    case "Group":
      IconComponent = <Group {...iconProps} />;
      break;
    case "Handyman":
      IconComponent = <Handyman {...iconProps} />;
      break;
    case "Headset":
      IconComponent = <Headset {...iconProps} />;
      break;
    case "HealthAndSafety":
      IconComponent = <HealthAndSafety {...iconProps} />;
      break;
    case "Home":
      IconComponent = <Home {...iconProps} />;
      break;
    case "Hotel":
      IconComponent = <Hotel {...iconProps} />;
      break;
    case "ImportContacts":
      IconComponent = <ImportContacts {...iconProps} />;
      break;
    case "Language":
      IconComponent = <Language {...iconProps} />;
      break;
    case "LaptopMac":
      IconComponent = <LaptopMac {...iconProps} />;
      break;
    case "Lightbulb":
      IconComponent = <Lightbulb {...iconProps} />;
      break;
    case "Link":
      IconComponent = <Link {...iconProps} />;
      break;
    case "List":
      IconComponent = <List {...iconProps} />;
      break;
    case "LocalActivity":
      IconComponent = <LocalActivity {...iconProps} />;
      break;
    case "LocalBar":
      IconComponent = <LocalBar {...iconProps} />;
      break;
    case "LocalCafe":
      IconComponent = <LocalCafe {...iconProps} />;
      break;
    case "LocalCarWash":
      IconComponent = <LocalCarWash {...iconProps} />;
      break;
    case "LocalDining":
      IconComponent = <LocalDining {...iconProps} />;
      break;
    case "LocalDrink":
      IconComponent = <LocalDrink {...iconProps} />;
      break;
    case "LocalFlorist":
      IconComponent = <LocalFlorist {...iconProps} />;
      break;
    case "LocalGasStation":
      IconComponent = <LocalGasStation {...iconProps} />;
      break;
    case "LocalGroceryStore":
      IconComponent = <LocalGroceryStore {...iconProps} />;
      break;
    case "LocalHospital":
      IconComponent = <LocalHospital {...iconProps} />;
      break;
    case "LocalLaundryService":
      IconComponent = <LocalLaundryService {...iconProps} />;
      break;
    case "LocalLibrary":
      IconComponent = <LocalLibrary {...iconProps} />;
      break;
    case "LocalMall":
      IconComponent = <LocalMall {...iconProps} />;
      break;
    case "LocalMovies":
      IconComponent = <LocalMovies {...iconProps} />;
      break;
    case "LocalParking":
      IconComponent = <LocalParking {...iconProps} />;
      break;
    case "LocalPharmacy":
      IconComponent = <LocalPharmacy {...iconProps} />;
      break;
    case "LocalPhone":
      IconComponent = <LocalPhone {...iconProps} />;
      break;
    case "LocalPizza":
      IconComponent = <LocalPizza {...iconProps} />;
      break;
    case "LocalPlay":
      IconComponent = <LocalPlay {...iconProps} />;
      break;
    case "LocalPolice":
      IconComponent = <LocalPolice {...iconProps} />;
      break;
    case "LocalPostOffice":
      IconComponent = <LocalPostOffice {...iconProps} />;
      break;
    case "LocalPrintshop":
      IconComponent = <LocalPrintshop {...iconProps} />;
      break;
    case "LocalSee":
      IconComponent = <LocalSee {...iconProps} />;
      break;
    case "Lock":
      IconComponent = <Lock {...iconProps} />;
      break;
    case "Mail":
      IconComponent = <Mail {...iconProps} />;
      break;
    case "Map":
      IconComponent = <Map {...iconProps} />;
      break;
    case "MilitaryTech":
      IconComponent = <MilitaryTech {...iconProps} />;
      break;
    case "MonetizationOn":
      IconComponent = <MonetizationOn {...iconProps} />;
      break;
    case "Movie":
      IconComponent = <Movie {...iconProps} />;
      break;
    case "MusicNote":
      IconComponent = <MusicNote {...iconProps} />;
      break;
    case "Nature":
      IconComponent = <Nature {...iconProps} />;
      break;
    case "Notifications":
      IconComponent = <Notifications {...iconProps} />;
      break;
    case "Park":
      IconComponent = <Park {...iconProps} />;
      break;
    case "Pets":
      IconComponent = <Pets {...iconProps} />;
      break;
    case "PhotoCamera":
      IconComponent = <PhotoCamera {...iconProps} />;
      break;
    case "Psychology":
      IconComponent = <Psychology {...iconProps} />;
      break;
    case "Restaurant":
      IconComponent = <Restaurant {...iconProps} />;
      break;
    case "RocketLaunch":
      IconComponent = <RocketLaunch {...iconProps} />;
      break;
    case "Savings":
      IconComponent = <Savings {...iconProps} />;
      break;
    case "School":
      IconComponent = <School {...iconProps} />;
      break;
    case "Science":
      IconComponent = <Science {...iconProps} />;
      break;
    case "SelfImprovement":
      IconComponent = <SelfImprovement {...iconProps} />;
      break;
    case "ShoppingBag":
      IconComponent = <ShoppingBag {...iconProps} />;
      break;
    case "ShoppingCart":
      IconComponent = <ShoppingCart {...iconProps} />;
      break;
    case "Spa":
      IconComponent = <Spa {...iconProps} />;
      break;
    case "Star":
      IconComponent = <Star {...iconProps} />;
      break;
    case "Store":
      IconComponent = <Store {...iconProps} />;
      break;
    case "SupportAgent":
      IconComponent = <SupportAgent {...iconProps} />;
      break;
    case "TheaterComedy":
      IconComponent = <TheaterComedy {...iconProps} />;
      break;
    case "ThumbUp":
      IconComponent = <ThumbUp {...iconProps} />;
      break;
    case "Timer":
      IconComponent = <Timer {...iconProps} />;
      break;
    case "TrendingUp":
      IconComponent = <TrendingUp {...iconProps} />;
      break;
    case "Watch":
      IconComponent = <Watch {...iconProps} />;
      break;
    case "Wifi":
      IconComponent = <Wifi {...iconProps} />;
      break;
    case "Work":
      IconComponent = <Work {...iconProps} />;
      break;
    case "Yard":
      IconComponent = <Yard {...iconProps} />;
      break;
    default:
      IconComponent = null;
  }
  if (!IconComponent) return null;
  if (text) {
    return (
      <span
        style={{ display: "inline-flex", alignItems: "center", gap: "0.5em" }}
      >
        {IconComponent}
        <span>{text}</span>
      </span>
    );
  }
  return IconComponent;
};
