import Riders from "./containers/Riders/Riders";
import Home from "./containers/Home/Home";
import Photos from "./containers/Photos/Photos";
import Contest from "./containers/Contest/Contest";
import Location from "./containers/Location/Location";
import Homee from "./containers/Homee/Homee";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: "",
    component: Home
  },
  {
    path: "/riders",
    name: "Riders",
    icon: "",
    component: Riders
  },
  {
    path: "/photos",
    name: "Photos",
    icon: "",
    component: Photos
  },
  {
    path: "/contest",
    name: "Contest",
    icon: "",
    component: Contest
  },
  {
    path: "/location",
    name: "Location",
    icon: "",
    component: Location
  },
  {
    path: "/homee",
    name: "Homee",
    icon: "",
    component: Homee
  },
  
];

export default routes;