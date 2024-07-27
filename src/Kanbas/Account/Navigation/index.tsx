import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation();

  const isActiveLink = (link: string) => pathname === `/Kanbas/Account/${link}`;

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link} // Added key prop for efficient updates
          to={`/Kanbas/Account/${link}`}
          className={`wd-link list-group-item border-0 ${isActiveLink(link) ? "active text-black" : "text-danger"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}