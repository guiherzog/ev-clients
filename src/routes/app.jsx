import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
// import Maps from "views/Maps/Maps.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Main Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Add New Client",
    navbarName: "Clients",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "All Clients",
    navbarName: "All Clients",
    icon: ContentPaste,
    component: TableList
  },
  // {
  //   path: "/maps",
  //   sidebarName: "Clients on Map",
  //   navbarName: "Location of All Clients",
  //   icon: LocationOn,
  //   component: Maps
  // },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Dashboard" }
];

export default appRoutes;
