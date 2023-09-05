import { useEffect, useState } from "react";
import { search } from "../utils/api";

import { useContext } from "react";
import { UserContext } from "../App";
import ActivityCard from "../components/ActivityCard";
import Navbar from "../components/Navbar";
import RepoLink from "../components/RepoLink";
import { activity, dummy } from "../utils/dataDummy";
import ResultSearchUser from "../components/ResultSearchUser";

const HomePage = () => {
  const dataSearch = useContext(UserContext);
  const [users, setUsers] = useState<[]>([]);

  useEffect(() => {
    if (dataSearch.search !== "")
      search(dataSearch.search).then((res) => setUsers(res.data.items));
  }, [dataSearch.search]);

  return (
    <>
      <Navbar />
      <section
        className="dark:text-gray-100 relative"
        onClick={() => dataSearch.setModal(false)}
      >
        <div className="flex gap-4 flex-wrap">
          <div className=" mx-3 md:mx-0 border bg-gray-50 dark:bg-gray-800 lg:fixed top-0 bottom-0 left-0 dark:border-gray-700 border-slate-950/20 shadow w-full md:max-w-xs p-3">
            <div className="md:mt-24">
              <div>
                <div className="flex justify-between items-center">
                  <h4>Top Repository</h4>
                  <button className="py-0.5 px-3 bg-green-500 text-white rounded">
                    New
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Find a repository..."
                  className="input input-bordered mt-3 w-full max-w-xs"
                />
              </div>
              <ul className="my-4">
                {dummy?.map((e, i) => (
                  <RepoLink data={e} key={i} />
                ))}
              </ul>
              <h3 className="font-semibold mt-7">Recent activity</h3>
              <div className="border p-2 mt-3 rounded text-slate-500 border-dashed border-slate-600 grid place-items-center">
                When you take actions across GitHub, we’ll provide links to that
                activity here.
              </div>
            </div>
          </div>
          <div className="hidden lg:block  w-full md:max-w-xs  md:min-h-screen"></div>
          <div className=" w-full  md:max-w-md lg:max-w-xl">
            <div className="flex items-center md:mt-10 relative menu-activity justify-between">
              <div className="flex gap-5">
                <h3 className="font-medium text-xl cursor-pointer">
                  For You{" "}
                  <span className="p-0.5 rounded-lg text-xs border border-teal-300 text-teal-300">
                    Beta
                  </span>
                </h3>
                <h3 className="font-medium text-xl cursor-pointer">
                  Following
                </h3>
              </div>
              <a className="link text-blue-500">Send Feedback</a>
            </div>
            <div className="my-2 bg-slate-700 w-full h-0.5"></div>
            <div className="mt-6 dark:bg-slate-800  p-4 rounded border border-gray-300 dark:border-gray-700 shadow">
              <h3 className="text-base">Welcome to the new feed!</h3>
              <p className="text-sm mt-1">
                We’re updating the cards and ranking all the time, so check back
                regularly. At first, you might need to follow some people or
                star some repositories to get started seedling.
              </p>
            </div>
            <div className="grid grid-cols-1 mt-3 gap-4">
              {activity?.map((e, i) => (
                <ActivityCard data={e} key={i} />
              ))}
            </div>
          </div>

          <div className=" w-full hidden lg:block lg:max-w-xs lg:mt-10">
            <div className="bg-gradient-to-br from-teal-400 w-full mx-4 to bg-pink-500 rounded-lg">
              <div className="bg-black/30 w-full h-44 p-2">
                <div className="w-64 mt-2">
                  <img
                    src="https://github.githubassets.com/images/modules/dashboard/universe23/logo.svg"
                    alt="universe logo github"
                  />
                </div>
                <p className="text-white font-medium mt-3">
                  Proactive security, powered by AI.
                </p>
              </div>
            </div>
          </div>
        </div>
        {dataSearch.modal && <ResultSearchUser data={users} />}
      </section>
    </>
  );
};

export default HomePage;
