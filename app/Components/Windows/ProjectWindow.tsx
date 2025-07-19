"use client";

import { useContextApp } from "@/app/ContexApp";
import { BorderAll, CloseOutlined, LibraryBooks } from "@mui/icons-material";
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useLayoutEffect, useState } from "react";
import { getIconComponent } from "@/app/functions/iconsActions";
import { addNewProject } from "@/app/functions/projectsAction";
import { toast } from "react-hot-toast";
import { allIconsArray } from "@/app/Data/AllIcons";

const schema = z.object({
  projectName: z
    .string()
    .min(1, { message: "Project name is required" })
    .max(30, { message: "Project name must be less than 30 characters" }),
});

export type FormData = z.infer<typeof schema>;

export const ProjectWindow = () => {
  const {
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
    allProjectsObject: { allProjects, setAllProjects },
    selectedIconObject: { selectedIcon, setSelectedIcon },
    selectedProjectObject: { selectedProject, setSelectedProject },
  } = useContextApp();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setFocus,
    setError,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const existingProject = allProjects.find(
      (project) =>
        project.title.toLowerCase() === data.projectName.toLowerCase()
    );

    if (existingProject) {
      setError("projectName", {
        type: "manual",
        message: "Project already exists",
      });
      setFocus("projectName");
    } else {
      projectFunction(data);
    }

    console.log("Form data", data);
    handleClose();
    setSelectedIcon(null);
    setSelectedProject(null);
  };

  async function projectFunction(data: FormData) {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      addNewProject(
        data,
        allProjects,
        setAllProjects,
        setOpenProjectWindow,
        selectedIcon,
        reset
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
      toast.success("Project added successfully");
    }
  }

  const handleClose = () => {
    setOpenProjectWindow(false);
    reset();
  };

  useLayoutEffect(() => {
    if (openProjectWindow) {
      if (!selectedProject) {
        reset();
      } else {
        setValue("projectName", selectedProject.title);

        const findIconInAllArray = allIconsArray.find(
          (icon) => icon.name === selectedProject.icon
        );

        if (findIconInAllArray) {
          setSelectedIcon(findIconInAllArray);
        }
      }
    }
  }, [openProjectWindow, reset, selectedProject, setSelectedIcon, setValue]);

  return (
    <div
      className={`${
        openProjectWindow ? "block" : "hidden"
      } w-[48%] max-sm:w-[82%] max-[600px]:w-[93%] z-[80] p-3 left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 absolute flex flex-col gap-3 border-2 border-slate-50 bg-white rounded-lg shadow-md`}
    >
      <Header handleClose={handleClose} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 pt-8 px-7 mt-3"
      >
        <ProjectInput register={register} errors={errors} />
        <Footer handleClose={handleClose} isLoading={isLoading} />
      </form>
    </div>
  );
};

const Header = ({ handleClose }: { handleClose: () => void }) => {
  const {
    selectedIconObject: { setSelectedIcon },
    selectedProjectObject: { selectedProject, setSelectedProject },
  } = useContextApp();
  return (
    <div className="flex items-center justify-between pt-7 px-7">
      <div className="flex items-center gap-2">
        <div className="p-[7px] bg-orange-200 rounded-lg flex items-center justify-between">
          <BorderAll sx={{ fontSize: "21px" }} className="text-orange-600" />
        </div>
        <span className="text-lg font-semibold">
          {selectedProject ? "Edit Project" : "New Project"}
        </span>
      </div>

      <CloseOutlined
        sx={{ fontSize: "18px" }}
        className="text-slate-300 cursor-pointer"
        onClick={() => {
          handleClose();
          setSelectedIcon(null);
          setSelectedProject(null);
        }}
      />
    </div>
  );
};

const ProjectInput = ({
  register,
  errors,
}: {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}) => {
  const {
    openProjectWindowObject: { openProjectWindow },
    openIconWindowObject: { setOpenIconWindow },
    selectedIconObject: { selectedIcon },
  } = useContextApp();

  useEffect(() => {
    if (openProjectWindow) {
      const inputElement = document.querySelector<HTMLInputElement>(
        "input[name='projectName']"
      );
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [openProjectWindow]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px] font-medium text-slate-600">
        Project Name
      </span>
      <div className="flex justify-between gap-3">
        <div className="w-full">
          <input
            {...register("projectName")}
            placeholder="Enter Project Name..."
            className="w-full border-2 outline-none rounded-md p-[10px] text-[13px]"
          />
          {errors.projectName && (
            <p className="text-[11px] mt-2 text-red-500">
              {errors.projectName.message}
            </p>
          )}
        </div>

        <div
          onClick={() => {
            setOpenIconWindow(true);
          }}
          className="w-12 h-10 text-white flex items-center justify-center bg-orange-600 rounded-lg cursor-pointer"
        >
          {selectedIcon ? (
            getIconComponent(selectedIcon?.name)
          ) : (
            <LibraryBooks />
          )}
        </div>
      </div>
    </div>
  );
};

const Footer = ({
  handleClose,
  isLoading,
}: {
  handleClose: () => void;
  isLoading: boolean;
}) => {
  const {
    selectedIconObject: { setSelectedIcon },
    selectedProjectObject: { selectedProject, setSelectedProject },
  } = useContextApp();
  return (
    <div className="w-[102%] p-[12px] mt-8 mb-4 flex gap-3 items-center justify-end">
      <button
        onClick={() => {
          handleClose();
          setSelectedIcon(null);
          setSelectedProject(null);
        }}
        className="border border-slate-200 text-slate-400 text-[13px] p-2 px-6 rounded-md hover:border-slate-300 transition-all"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="bg-orange-600 text-white text-[13px] p-2 px-4 rounded-md hover:bg-orange-700 transition-all"
      >
        {isLoading
          ? "Saving..."
          : selectedProject
          ? "Edit Project"
          : "Add Project"}
      </button>
    </div>
  );
};
