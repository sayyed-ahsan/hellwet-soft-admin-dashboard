/* eslint-disable */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  const [isOpen, setIsOpen] = useState(false);

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    // console.log(location.pathname.includes(routeName))
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) =>

      // route.childrens ?


      //   <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
      //     <h2 id="accordion-flush-heading-1">
      //       <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
      //         <span>What is Flowbite?</span>
      //         <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      //       </button>
      //     </h2>
      //     <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
      //       <div class="py-5 font-light border-b border-gray-200 dark:border-gray-700">
      //         <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      //         <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
      //       </div>
      //     </div>
      //     <h2 id="accordion-flush-heading-2">
      //       <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
      //         <span>Is there a Figma file available?</span>
      //         <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      //       </button>
      //     </h2>
      //     <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
      //       <div class="py-5 font-light border-b border-gray-200 dark:border-gray-700">
      //         <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      //         <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
      //       </div>
      //     </div>
      //     <h2 id="accordion-flush-heading-3">
      //       <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
      //         <span>What are the differences between Flowbite and Tailwind UI?</span>
      //         <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      //       </button>
      //     </h2>
      //     <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
      //       <div class="py-5 font-light border-b border-gray-200 dark:border-gray-700">
      //         <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      //         <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      //         <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      //         <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
      //           <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
      //           <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>

      //   :
      <Link key={index} to={route.layout + "/" + route.path}>
        <div className="relative mb-3 flex  hover:cursor-pointer">
          <li
            className="my-[3px] flex cursor-pointer items-center px-8"
            key={index}
          >
            <span
              className={`${activeRoute(route.path) === true
                ? "font-bold text-brandLight dark:text-darkText"
                : "font-medium text-gray-600"
                }`}
            >
              {route.icon ? route.icon : <DashIcon />}{" "}
            </span>
            <p
              className={`leading-1 ml-4 flex ${activeRoute(route.path) === true
                ? "font-bold text-lightText dark:text-darkText"
                : "font-medium text-gray-600"
                }`}
            >
              {route.name}
            </p>
          </li>
          {activeRoute(route.path) ? (
            <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brandLight dark:bg-white" />
          ) : null}
        </div>
      </Link>

    );
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
