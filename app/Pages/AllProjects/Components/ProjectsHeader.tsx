import { useContextApp } from "@/app/ContexApp";
import { Add, Menu, Search } from "@mui/icons-material";

const ProjectsHeader = () => {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddProjectButton />
    </div>
  );

  function SearchBar() {
    return (
      <div className="flex items-center">
        <div className="border-b-2 border-orange-600 h-[39px] w-11 justify-center flex items-center">
          <Search
            className="text-slate-400 outline-none"
            sx={{ fontSize: "26px" }}
          />
        </div>

        <div className="border-b-2 border-slate-200">
          <input
            placeholder="Search a project..."
            className="p-2 bg-transparent text-[14px] outline-none"
          />
        </div>
      </div>
    );
  }

  function AddProjectButton() {
    const {
      openSideBarObject: { setOpenSideBar, openSideBar },
      openProjectWindowObject: { setOpenProjectWindow },
    } = useContextApp();

    return (
      <div className="flex gap-3 items-center">
        <button
          onClick={() => setOpenProjectWindow(true)}
          className="bg-orange-600 text-white text-[14px] rounded-md flex gap-1 items-center p-2 pr-3 max-sm:pr-2 cursor-pointer"
        >
          <Add className="min-sm:mt-[2px]" sx={{ fontSize: "22px" }} />
          <span className="max-sm:hidden ">New Project</span>
        </button>
        <button
          onClick={() => setOpenSideBar(!openSideBar)}
          className="text-slate-400 h-9 cursor-pointer hidden max-[940px]:block"
        >
          <Menu />
        </button>
      </div>
    );
  }
};
export default ProjectsHeader;
