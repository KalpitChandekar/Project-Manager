import { BorderAll, Logout, Splitscreen, TaskAlt } from "@mui/icons-material";

function SideBar() {
  return (
    <div className="w-[97px] h-screen py-8 bg-white flex flex-col items-center justify-between max-[940px]:hidden">
      <Logo />
      <Menu />
      <Profile />
    </div>
  );
}

function Profile() {
  return <div className="h-7 w-7 bg-orange-600 rounded-md"></div>;
}

function Menu() {
  return (
    <div className="flex flex-col items-center gap-6">
      <BorderAll
        className="text-slate-300 cursor-pointer"
        sx={{
          fontSize: "27px",
        }}
      />
      <Splitscreen
        className="text-orange-600 cursor-pointer"
        sx={{
          fontSize: "25px",
        }}
      />
      <Logout
        className="text-slate-300 cursor-pointer"
        sx={{
          fontSize: "25px",
        }}
      />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center justify-center">
      <TaskAlt
        className="text-orange-600 font-bold"
        sx={{
          fontSize: "41px",
        }}
      />
    </div>
  );
}

export default SideBar;
