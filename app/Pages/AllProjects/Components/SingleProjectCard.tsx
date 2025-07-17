import { Circle, LibraryAdd, MoreVert } from "@mui/icons-material";
import { Project } from "@/app/Data/AllProjects";
import { getIconComponent } from "@/app/functions/iconsActions";
import { useContextApp } from "@/app/ContexApp";
import { useRef } from "react";

const SingleProjectCard = ({ project }: { project: Project }) => {
  const daysLeft = calculateDaysLeft(project.createdAt);
  const progressPercentage = calculateProgressPercentage(
    project.tasks.length,
    project.tasks.filter((task) => task.status === "Completed").length
  );
  return (
    <li className="h-[306px] flex flex-col gap-8 rounded-lg p-7 bg-white">
      <ProjectCardHeader daysLeft={daysLeft} />
      <ProjectCardBody />
      <ProjectCardFooter progressPercentage={progressPercentage} />
    </li>
  );

  function ProjectCardHeader({ daysLeft }: { daysLeft: number }) {
    const threeDotsRef = useRef<HTMLDivElement>(null);
    const {
      dropDownPositionObject: { setDropDownPosition },
      openDropDownObject: { setOpenDropDown },
    } = useContextApp();

    function openDropDown(event: React.MouseEvent<HTMLDivElement>) {
      event.preventDefault();
      event.stopPropagation();
      if (threeDotsRef.current) {
        const rect = threeDotsRef.current.getBoundingClientRect();
        const { top, left } = rect;
        setDropDownPosition({
          top: top + window.scrollY + 30,
          left: left + window.scrollX,
        });
        setOpenDropDown(true);
      }
    }

    return (
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-orange-600 flex justify-center items-center w-[38px] h-[38px] rounded-md text-white text-[23px]">
            {getIconComponent(project.icon)}
          </div>
          <div className="flex flex-col">
            <span className="text-[19px] font-semibold max-w-[200px] truncate">
              {project.title}
            </span>
            <span className="text-[13px] text-slate-400">
              {daysLeft === 0
                ? "Today"
                : daysLeft + ` day${daysLeft > 1 ? "s" : ""} ago`}
            </span>
          </div>
        </div>

        <div
          ref={threeDotsRef}
          onClick={openDropDown}
          className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-slate-100"
        >
          <MoreVert className="text-slate-400 text-[19px] cursor-pointer" />
        </div>
      </div>
    );
  }

  function ProjectCardBody() {
    return (
      <div className="h-[80px] flex flex-col gap-3 mb-1">
        {project.tasks.length === 0 && (
          <div className="flex justify-center flex-col gap-3 mt-[15px] items-center h-full">
            <LibraryAdd className="text-slate-400 opacity-40 text-[26px] cursor-pointer hover:opacity-100 hover:text-orange-600" />
            <span className="text-slate-400 text-[13px] opacity-45">
              No tasks created yet...
            </span>
          </div>
        )}
        <ul className="text-slate-400 text-[13px] flex flex-col gap-2 ml-3">
          {project.tasks.slice(0, 3).map((task) => (
            <li className="flex items-center gap-2" key={task.id}>
              <Circle sx={{ fontSize: "8px" }} />
              <span>{task.title}</span>
            </li>
          ))}
        </ul>

        <div className="text-[11px] text-slate-400">
          {project.tasks.length > 3 && (
            <span className="text-orange-600">
              +{project.tasks.length - 3} more
            </span>
          )}
        </div>
      </div>
    );
  }

  function ProjectCardFooter({
    progressPercentage,
  }: {
    progressPercentage: number;
  }) {
    return (
      <div className="flex gap-4 flex-col mt-2">
        <div className="text-[12px] gap-3 items-center flex w-full">
          <div className="w-full h-[7px] rounded-xl bg-slate-100 overflow-hidden">
            <div
              className=" bg-orange-600 h-full rounded-r-xl"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-[13px] text-slate-400">On Progress</p>
          <div className="flex text-[13px] gap-1">
            <p>{progressPercentage}%</p>
          </div>
        </div>
      </div>
    );
  }
};
export default SingleProjectCard;

function calculateDaysLeft(creationDate: string): number {
  const creation = new Date(creationDate);
  const now = new Date();
  const timeDifference = now.getTime() - creation.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

function calculateProgressPercentage(
  totalTasks: number,
  completedTasks: number
): number {
  return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
}
