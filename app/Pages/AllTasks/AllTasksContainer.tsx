import TasksHeader from "./Components/TasksHeader";
import TasksSubHeader from "./Components/TasksSubHeader";
import TasksList from "./Components/TasksList";

const AllTasksContainer = () => {
  return (
    <div className="bg-slate-50 w-full p-10">
      <TasksHeader />
      <TasksSubHeader />
      <TasksList />
    </div>
  );
};
export default AllTasksContainer;
