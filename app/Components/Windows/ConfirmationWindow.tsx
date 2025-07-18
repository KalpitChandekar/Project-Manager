import { useContextApp } from "@/app/ContexApp";
import { deleteProject } from "@/app/functions/projectsAction";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ConfirmationWindow = () => {
  const {
    openConfirmationWindowObject: {
      openConfirmationWindow,
      setOpenConfirmationWindow,
    },
    selectedProjectObject: { setSelectedProject, selectedProject },
    allProjectsObject: { allProjects, setAllProjects },
  } = useContextApp();

  const [isLoading, setIsLoading] = useState(false);

  const closeConfirmationWindow = () => {
    setOpenConfirmationWindow(false);
    setSelectedProject(null);
  };

  async function deleteFunction() {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      deleteProject(
        selectedProject,
        setSelectedProject,
        allProjects,
        setAllProjects,
        setOpenConfirmationWindow
      );
    } catch (error) {
      console.log(error);
      toast.error("Error deleting project");
    } finally {
      setIsLoading(false);
      setOpenConfirmationWindow(false);
      toast.success("Project deleted successfully");
    }
  }

  return (
    <div
      className={`w-[38%] bg-white max-sm:w-[91%] p-6 fixed shadow-md z-[90] rounded-lg flex items-center top-[30%] left-1/2 -translate-x-1/2 ${
        openConfirmationWindow ? "block" : "hidden"
      }`}
    >
      <div className="rounded-lg p-6">
        <h2 className="text-xl font-semibold">Delete Project</h2>
        <p className="text-sm text-gray-600 mt-2">
          Are you sure you want to delete this project? This action cannot be
          undone, and will remove all projects associated with it.
        </p>

        <div className="flex justify-end gap-2 mt-10 text-[13px]">
          <button
            onClick={closeConfirmationWindow}
            className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={deleteFunction}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationWindow;
