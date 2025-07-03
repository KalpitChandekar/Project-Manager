import {
  Cached,
  Circle,
  DeleteOutlined,
  EditOutlined,
  List,
} from "@mui/icons-material";
import { Checkbox } from "@mui/material";

const TasksList = () => {
  return (
    <div className="min-sm:ml-12 mt-11 flex-col flex gap-4">
      <Tabs />
      <div className="flex flex-col gap-4">
        <SingleTask />
        <SingleTask />
        <SingleTask />
      </div>
    </div>
  );
};
export default TasksList;

function Tabs() {
  return (
    <div className="flex items-center gap-6 ml-3 mt-8 mb-5">
      <div className="flex gap-2 text-orange-400 font-semibold items-center">
        <span>On Going Tasks</span>
        <span className="bg-orange-600 text-white px-2 rounded-md max-[420px]:hidden">
          7
        </span>
      </div>
      <div className="text-slate-400 flex gap-2 items-center">
        <span>Completed Tasks</span>
        <span className="bg-slate-200 px-2 rounded-md max-[420px]:hidden">
          8
        </span>
      </div>
    </div>
  );
}

function SingleTask() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox />
      <div className="w-full bg-white rounded-lg border border-slate-100 flex gap-3 items-center justify-between p-5 py-6 max-sm:p-4">
        <div className="flex gap-3 items-center">
          <div className="bg-orange-200 rounded-lg p-2 flex items-center justify-center">
            <List className="text-orange-600" />
          </div>

          <div className="flex flex-col">
            <span className="font-bold hover:text-orange-600 cursor-pointer max-sm:text-sm">
              Create the UI Design of the task
            </span>
            <div className="flex">
              <span className="text-slate-400 text-[13px] p-[2px]">
                Project
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-36 max-xl:gap-20 max-lg:gap-12 font-bold items-center">
          <div className="flex items-center gap-2 max-md:hidden">
            <Cached className="text-[24px] text-slate-400" />
            <span className="text-slate-400 text-[14px]">In Progress</span>
          </div>
          <div className="flex items-center gap-2 max-lg:hidden">
            <Circle className="text-green-600" sx={{ fontSize: "10px" }} />
            <span className="text-slate-400 text-[14px]">Low</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-orange-200 hover:bg-orange-300 transition-all duration-100">
              <EditOutlined
                className="text-orange-600"
                sx={{ fontSize: "17px" }}
              />
            </div>
            <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300 transition-all duration-100">
              <DeleteOutlined
                className="text-slate-600"
                sx={{ fontSize: "17px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
