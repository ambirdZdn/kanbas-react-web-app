import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { useLocation } from "react-router-dom";

export default function KanbasNavigation() {
    const location = useLocation();// Get the current location.

    const isClicked = (path:string) => {
      return location.pathname.startsWith(path)
      ? "list-group-item text-center border-0 bg-white text-danger"
      :"list-group-item text-white bg-black text-center border-0";
    } // Check if the current path is the same as the path passed in the function.

    return (

      <div id="wd-kanbas-navigation" className="list-group rounded-0" 
      style={{ width: "110px", 
              backgroundColor:"black"}}>
        <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0">
        <img src="/images/NEU.png" alt="NEU" width="75px" /> </a>

        <a id="wd-account-link" href="#/Kanbas/Account"
        className={isClicked("/Kanbas/Account")}>
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account </a>

        <a id="wd-dashboard-link" href="#/Kanbas/Dashboard"
        className={isClicked("/Kanbas/Dashboard")}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </a>

        <a id="wd-course-link" href="#/Kanbas/Courses"
        className={isClicked("/Kanbas/Courses")}>
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </a>

        <a id="wd-calendar-link" href="#/Kanbas/Calendar"
        className={isClicked("/Kanbas/Calendar")}>
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar </a>

        <a id="wd-inbox-link" href="#/Kanbas/Inbox"
        className={isClicked("/Kanbas/Inbox")}>
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox </a>

        <a id="wd-resources-link" href="#/Kanbas/Labs"
        className={isClicked("/Kanbas/Labs")}>
        <HiOutlineDesktopComputer className="fs-1 text-danger" /><br /> 
        Labs </a>

      </div> 
  );}