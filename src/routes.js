import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import SignUp from "views/auth/SignUp";
import MarketPlace from "views/admin/marketplace/index.jsx";
import Gallery from "views/admin/gallery/index.jsx";
import Team from "views/admin/team/index.jsx";
import Blogs from "views/admin/blog/index.jsx";
import Customes from "views/admin/customers/index.jsx";
import PublishBlog from "views/admin/publishBlog/index.jsx"
import FAQ from "views/admin/faq/index.jsx"
import Clients from "views/admin/clients/index.jsx"
import Calendar from "views/admin/calendar/index.jsx"
import Invoice from "views/admin/invoice/index.jsx"

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import ForgetPassword from "views/auth/ForgetPassword";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Clients",
    layout: "/admin",
    path: "clients",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Clients />,
  },
  {
    name: "Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <MarketPlace></MarketPlace>,
    secondary: true,
  },
  {
    name: "Gallery",
    layout: "/admin",
    path: "gallery",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Gallery></Gallery>,
    secondary: true,
  },
  {
    name: "Calendar",
    layout: "/admin",
    path: "calendar",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Calendar />,
    secondary: true,
  },
  {
    name: "Invoivce",
    layout: "/admin",
    path: "invoice",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Invoice />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Blogs",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "blogs",
    component: <Blogs />,
    childrens: [
      {
        name: "Nested Route",
        layout: "/admin",
        icon: <MdBarChart className="h-6 w-6" />,
        path: "nested",
        component: <DataTables />,
      },
      {
        name: "Nested Route",
        layout: "/admin",
        icon: <MdBarChart className="h-6 w-6" />,
        path: "nested",
        component: <DataTables />,
      },
      {
        name: "Nested Route",
        layout: "/admin",
        icon: <MdBarChart className="h-6 w-6" />,
        path: "nested",
        component: <DataTables />,
      },
      {
        name: "Nested Route",
        layout: "/admin",
        icon: <MdBarChart className="h-6 w-6" />,
        path: "nested",
        component: <DataTables />,
      },
    ]
  },
  {
    name: "Publish Blogs",
    layout: "/admin",
    path: "publish",
    icon: <MdPerson className="h-6 w-6" />,
    component: <PublishBlog />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Customes",
    layout: "/admin",
    path: "customers",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Customes />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "sign-up",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignUp />,
  },
  {
    name: "Forget Password",
    layout: "/auth",
    path: "forget-password",
    icon: <MdLock className="h-6 w-6" />,
    component: <ForgetPassword></ForgetPassword>
  },
  {
    name: "Team",
    layout: "/admin",
    path: "team",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Team></Team>,
    secondary: true,
  },
  {
    name: "FAQ",
    layout: "/admin",
    path: "faq",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <FAQ />,
    secondary: true,
  }
];
export default routes;
