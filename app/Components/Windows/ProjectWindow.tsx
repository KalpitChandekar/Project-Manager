import { useContextApp } from "@/app/ContexApp";
import { BorderAll, CloseOutlined, LibraryBooks } from "@mui/icons-material";

export const ProjectWindow = () => {
  const {
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
  } = useContextApp();

  return (
    <div
      className={`${
        openProjectWindow ? "block" : "hidden"
      } w-[48%] max-sm:w-[82%] max-[600px]:w-[93%] z-[80] p-3 left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 absolute flex flex-col gap-3 border-2 border-slate-50 bg-white rounded-lg shadow-md`}
    >
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col gap-2 pt-8 px-7 mt-3">
          <ProjectInput />

          <Footer />
        </div>
      </form>
    </div>
  );
};

const Header = () => {
  const {
    openProjectWindowObject: { setOpenProjectWindow },
  } = useContextApp();
  return (
    <div className="flex items-center justify-between pt-7 px-7">
      <div className="flex items-center gap-2">
        <div className="p-[7px] bg-orange-200 rounded-lg flex items-center justify-between">
          <BorderAll
            sx={{ fontSize: "21px" }}
            className="text-orange-600"
            onClick={() => setOpenProjectWindow(false)}
          />
        </div>
        <span className="text-lg font-semibold">Project Name</span>
      </div>

      <CloseOutlined
        sx={{ fontSize: "18px" }}
        className="text-slate-300 cursor-pointer"
        onClick={() => setOpenProjectWindow(false)}
      />
    </div>
  );
};

const ProjectInput = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px] font-medium text-slate-600">
        Project Name
      </span>
      <div className="flex justify-between gap-3">
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter Project Name..."
            className="w-full border-2 outline-none rounded-md p-[10px] text-[13px]"
          />

          <p className="text-[11px] mt-2 text-red-500">
            Project name must be unique
          </p>
        </div>

        <div className="w-12 h-10 text-white flex items-center justify-between bg-gray-600 rounded-lg cursor-pointer">
          <LibraryBooks />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const {
    openProjectWindowObject: { setOpenProjectWindow },
  } = useContextApp();
  return (
    <div className="w-[102%] p-[12px] mt-8 mb-4 flex gap-3 items-center justify-end">
      <button
        onClick={() => {
          setOpenProjectWindow(false);
        }}
        className="border border-slate-200 text-slate-400 text-[13px] p-2 px-6 rounded-md hover:border-slate-300 transition-all"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="bg-orange-600 text-white text-[13px] p-2 px-4 rounded-md hover:bg-orange-700 transition-all"
      >
        Create
      </button>
    </div>
  );
};
