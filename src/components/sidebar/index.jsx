/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50  flex  min-h-full flex-col bg-primaryLight pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-primaryDark dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${open ? "translate-x-0" : "-translate-x-96"
        }`}
    >
      <span
        className="absolute top-4 z-50 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>
      <div className="relative h-screen overflow-auto w-[300px]">

        <div className={`mx-[56px] mt-[50px] flex items-center`}>
          <div className="mt-1 ml-1 h-2.5 font-poppins text-[20px] font-bold uppercase text-lightText dark:text-darkText">
            Hellwet <span class="font-medium">Soft</span>
          </div>
        </div>
        <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
        {/* Nav item */}
        <ul className="mb-auto pt-1">
          <Links routes={routes} />
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
