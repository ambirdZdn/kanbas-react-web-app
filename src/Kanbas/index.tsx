import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import Labs from "../Labs";
import Account from "./Account";
import Calendar from "./Calendar";
import Inbox from "./Inbox";
import "./styles.css";
export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
            <div className="d-none d-md-block bg-black">
            <KanbasNavigation />
            </div>
            <div className="flex-fill p-4">
                <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<Account />} />
                        <Route path="Dashboard" element={<Dashboard />} />
                        <Route path="Courses/:cid/*" element={<Courses />} />
                        <Route path="Calendar" element={<Calendar />} />
                        <Route path="Inbox" element={<Inbox />} />
                        <Route path="Labs/*" element={<Labs />} /> 
                </Routes>
            </div>
        </div>
    </div>
); 
}