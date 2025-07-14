import { KeyboardArrowDown } from "@mui/icons-material";

const ProjectSubHeader = () => {
  return (
    <div className="mt-20 max-sm:mt-10 max-md:mt-15 flex justify-between font-bold items-center">
      <MyProjectsText />
      <SortByButton />
    </div>
  );

  function MyProjectsText() {
    return (
      <p className="text-[26px] max-sm:text-[23px] font-bold">My Projects</p>
    );
  }

  function SortByButton() {
    return (
      <div className="flex text-[15px] max-sm:text-[14px] font-semibold gap-3 max-sm:gap-1">
        <span className="text-slate-300">Sort By</span>
        <div className="flex gap-1 items-center cursor-pointer">
          <span className="text-slate-800">Recent Projects</span>
          <KeyboardArrowDown sx={{ fontSize: "19px" }} />
        </div>
      </div>
    );
  }
};
export default ProjectSubHeader;
