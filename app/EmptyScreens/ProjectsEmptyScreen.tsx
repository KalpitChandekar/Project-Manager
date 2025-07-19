import { ListAlt } from "@mui/icons-material";

const ProjectsEmptyScreen = () => {
  return (
    <div className="p-1 gap-5 flex flex-col justify-center pt-[150px] pb-8 items-center">
      <ListAlt
        sx={{ fontSize: "130px" }}
        className="text-slate-400 opacity-25"
      />
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-[16px] font-semibold opacity-80 text-slate-600 mb-1 items-center">
          No Projects Created Yet...
        </h3>
        <p className="text-[13px] opacity-80 text-slate-400 w-[340px] text-center">
          It looks like you haven&apos;t started any projects yet. Create a
          project to begin managing your tasks.
        </p>
      </div>
    </div>
  );
};
export default ProjectsEmptyScreen;
