import { useContextApp } from "@/app/ContexApp";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const MoreDropDown = () => {
  const {
    openDropDownObject: { openDropDown, setOpenDropDown },
    dropDownPositionObject: { dropDownPosition },
    openConfirmationWindowObject: { setOpenConfirmationWindow },
  } = useContextApp();

  const [dropDownOption, setDropDownOption] = useState([
    { id: 1, name: "Edit", icon: <EditOutlined /> },
    { id: 2, name: "Delete", icon: <DeleteOutlined /> },
  ]);

  const menuRef = React.useRef<HTMLDivElement>(null);

  const clickedItemHandler = (id: number) => {
    if (id === 2) {
      setOpenConfirmationWindow(true);
      setOpenDropDown(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenDropDown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    if (openDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [openDropDown, setOpenDropDown]);

  return (
    <div
      ref={menuRef}
      style={{ top: dropDownPosition.top, left: dropDownPosition.left }}
      className={`bg-white fixed z-[90] top-14 left-24 px-5 border-slate-500 py-6 w-[130px] select-none shadow-md rounded-lg flex flex-col gap-7 ${
        openDropDown ? "block" : "hidden"
      }`}
    >
      {dropDownOption.map((dropDownOption) => (
        <div
          onClick={() => clickedItemHandler(dropDownOption.id)}
          key={dropDownOption.id}
          className={`flex items-center gap-1 text-slate-400 cursor-pointer hover:text-orange-600 ${
            dropDownOption.id === 2 && "hover:text-red-600"
          }`}
        >
          {dropDownOption.icon}
          <span className="text-[14px]">{dropDownOption.name}</span>
        </div>
      ))}
    </div>
  );
};
export default MoreDropDown;
