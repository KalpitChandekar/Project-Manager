import { useContextApp } from "@/app/ContexApp";

const ConfirmationWindow = () => {
  const { openConfirmationWindowObject, selectedProjectObject } =
    useContextApp();
  const { openConfirmationWindow, setOpenConfirmationWindow } =
    openConfirmationWindowObject;
  const { setSelectedProject } = selectedProjectObject;

  const closeConfirmationWindow = () => {
    setOpenConfirmationWindow(false);
    setSelectedProject(null);
  };

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
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationWindow;
