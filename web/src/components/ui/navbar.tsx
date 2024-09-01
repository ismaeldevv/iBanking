import React from "react";
import { CreditCard, HistoryIcon, LayoutDashboard, LogOut } from "lucide-react";
import NavLink from "./navlink";
import NavItem from "./navitem";
import { fetchNui } from "../../utils/fetchNui";

const NavBar: React.FC = () => {
  return (
    <nav className="flex shrink-0 flex-col items-center justify-between rounded-bl-[0.5rem] rounded-tl-[0.5rem] bg-card p-2">
      <div className="flex flex-col items-center justify-center">
        <NavLink icon={LayoutDashboard} label={"Dashboard"} path="/dashboard" />
        <NavLink icon={CreditCard} label={"Accounts"} path="/accounts" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <NavItem
          exit
          label={"Exit"}
          icon={LogOut}
          onClick={() => {
            fetchNui("exit");
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
