import React, { ReactNode, useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

type propsNavbar = {
  children?: ReactNode;
};

const Navbar = ({ children }: propsNavbar) => {
  const dataSearch = useContext(UserContext);

  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    dataSearch.setSearch(e.target.value);
  };
  return (
    <header className="z-50 sticky border-b border-slate-950/20 dark:border-slate-700 shadow">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            D3Labs
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search users"
              className="input input-bordered w-24 md:w-auto"
              onChange={changeEvent}
              onClick={() => dataSearch.setModal(true)}
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://avatars.githubusercontent.com/u/88915735?v=4" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/project"} className="justify-between">
                  Project
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/raisyaf20"
                  target="_blank"
                  className="justify-between"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {children}
    </header>
  );
};

export default Navbar;
