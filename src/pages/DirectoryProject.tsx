import { useContext, useEffect, useState } from "react";
import AboutRepository from "../components/AboutRepository";
import Navbar from "../components/Navbar";
import Readmd from "../components/Readmd";
import { actionProject, repoUser } from "../utils/dataDummy";
import { UserContext } from "../App";
import { search } from "../utils/api";
import ResultSearchUser from "../components/ResultSearchUser";

const DirectoryProject = () => {
  const dataSearch = useContext(UserContext);
  const [users, setUsers] = useState<[]>([]);

  useEffect(() => {
    if (dataSearch.search !== "")
      search(dataSearch.search).then((res) => setUsers(res.data.items));
  }, [dataSearch.search]);

  return (
    <>
      <Navbar>
        <div className="ml-6 flex flex-wrap gap-2 my-2">
          {actionProject?.map((e, i) => (
            <div key={i} className="flex gap-1">
              <img src={e.icon} alt={e.name} /> <span> {e.name}</span>
            </div>
          ))}
        </div>
      </Navbar>

      <section
        className="dark:text-slate-100 py-6"
        onClick={() => dataSearch.setModal(false)}
      >
        <div className="container mx-auto min-h-screen">
          <div className="flex justify-between mt-5 items-center relative after-project-header">
            <div className="flex items-center gap-3">
              <img
                src="https://avatars.githubusercontent.com/u/88915735?s=48&v=4"
                alt="raisyaf photo"
                className="rounded-full"
              />
              <h4 className="font-medium text-lg">
                food-journal{" "}
                <span className="border rounded-lg text-xs p-1">public</span>
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <button>stars</button>
              <button>fork</button>
              <button>unwatch</button>
              <button>pin</button>
            </div>
          </div>
          <main className="mt-8 flex flex-wrap mx-4 gap-6">
            <div className="w-full lg:max-w-xl xl:max-w-4xl">
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap text-sm items-center gap-3">
                  <div className="dropdown">
                    <label tabIndex={0} className="btn m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-git-pull-request"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M6 8l0 8"></path>
                        <path d="M11 6h5a2 2 0 0 1 2 2v8"></path>
                        <path d="M14 9l-3 -3l3 -3"></path>
                      </svg>
                      Master
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#"
                    className="flex gap-1 items-center hover:text-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-git-pull-request"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M6 8l0 8"></path>
                      <path d="M11 6h5a2 2 0 0 1 2 2v8"></path>
                      <path d="M14 9l-3 -3l3 -3"></path>
                    </svg>
                    1 Branch
                  </a>
                  <a
                    href="#"
                    className="flex gap-1 items-center hover:text-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-tags"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"></path>
                      <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path>
                      <path d="M6 9h-.01"></path>
                    </svg>
                    0 Tags
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="btn btn-neutral">Go to file</button>
                  <button className="btn btn-neutral">Add file</button>
                  <button className="btn btn-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-code"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 8l-4 4l4 4"></path>
                      <path d="M17 8l4 4l-4 4"></path>
                      <path d="M14 4l-4 16"></path>
                    </svg>
                    code
                  </button>
                </div>
              </div>
              <div className="overflow-hidden mt-1 rounded-lg border border-gray-400 dark:border-slate-600 w-full shadow-md">
                <ul>
                  {repoUser?.map((e, index) => (
                    <div key={index}>
                      <li className="first:bg-slate-300 dark:first:bg-slate-800 border-b border-gray-400 dark:border-slate-600 py-2 p-2 flex">
                        <div className=" w-full items-center flex gap-2">
                          <div className="w-7">
                            <img
                              src={e.image}
                              alt={e.nama_user}
                              className="rounded-full"
                            />{" "}
                          </div>
                          <p className="text-sm">
                            {e.nama_user} <span>{e.action_git}</span>
                          </p>
                        </div>
                      </li>
                      {e.repository.map((data, i) => (
                        <li
                          key={i}
                          className="last:border-b-0 border-b text-sm border-gray-400 dark:border-slate-600 py-2 p-2 flex"
                        >
                          <div className=" w-full max-w-xs flex gap-2">
                            {data.folder ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-folders"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                ></path>
                                <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
                                <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2"></path>
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-file"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                ></path>
                                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                              </svg>
                            )}
                            {data.name_dir}
                          </div>
                          <div className=" w-full max-w-xs">
                            {data.message_commit}
                          </div>
                          <div className=" w-full max-w-xs text-right">
                            {data.date_commit}
                          </div>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              </div>
              <Readmd />
            </div>
            <div className="w-full md:max-w-xs">
              <AboutRepository />
            </div>
          </main>
        </div>
        {dataSearch.modal && <ResultSearchUser data={users} />}
      </section>
    </>
  );
};

export default DirectoryProject;
