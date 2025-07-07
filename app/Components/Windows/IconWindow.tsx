import { useContextApp } from "@/app/ContexApp";
import { AllIcons } from "@/app/Data/AllIcons";

import { Apps, Close } from "@mui/icons-material";

export const IconWindow = () => {
  return (
    <div className="absolute p-3 h-[530px] w-[50%] max-sm:w-[90%] bg-white left-1/2 top-28 -translate-x-1/2 z-[90] shadow-md rounded-lg">
      <Header />

      <span className="text-slate-400 mt-12 text-[13px] mx-8">
        {`Please select the icons you'd like to use from the collection below:`}
      </span>

      <IconsArea />
    </div>
  );
};

const Header = () => {
  const {
    openIconWindowObject: { setOpenIconWindow },
  } = useContextApp();
  return (
    <div className="flex items-center justify-between pt-7 px-7 mb-8">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-orange-200 rounded-lg flex items-center justify-center">
          <Apps
            sx={{ fontSize: "21px" }}
            className="text-orange-400"
            onClick={() => {
              setOpenIconWindow(true);
            }}
          />
        </div>

        <span className="font-semibold text-lg">All Icons</span>
      </div>

      <Close
        className="text-slate-400 text-[18px] cursor-pointer"
        onClick={() => {
          setOpenIconWindow(false);
        }}
      />
    </div>
  );
};

const IconsArea = () => {
  return (
    <div className="w-full flex flex-col mt-3 items-center">
      <div className="border border-slate-100 w-[92%] h-[330px] overflow-auto rounded-md">
        <AllIcons />
      </div>
    </div>
  );
};
