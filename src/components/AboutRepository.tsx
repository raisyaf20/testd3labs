const AboutRepository = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-lg">About</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-settings-2 cursor-pointer"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
        </svg>
      </div>
      <p className="mt-3 text-sm">
        a website that can display food/drinks that can be saved along with
        recipes and if you like it, just add it to the food you like.
      </p>
      <ul className="menu text-slate-500">
        <li>
          <a className="hover:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-book"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
              <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
              <path d="M3 6l0 13"></path>
              <path d="M12 6l0 13"></path>
              <path d="M21 6l0 13"></path>
            </svg>
            Readme
          </a>
        </li>
        <li>
          <a className="hover:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chart-line"
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
              <path d="M4 19l16 0"></path>
              <path d="M4 15l4 -6l4 2l4 -5l4 4"></path>
            </svg>
            Activity
          </a>
        </li>
        <li>
          <a className="hover:text-blue-400 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-star-filled group-hover:text-yellow-400"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                strokeWidth="0"
                fill="currentColor"
              ></path>
            </svg>
            1 Watchers
          </a>
        </li>
        <li>
          <a className="hover:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-git-branch"
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
              <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M7 8l0 8"></path>
              <path d="M9 18h6a2 2 0 0 0 2 -2v-5"></path>
              <path d="M14 14l3 -3l3 3"></path>
            </svg>
            Forks
          </a>
        </li>
      </ul>
      <hr className="h-0.5 my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <div>
        <h3 className="font-bold text-lg">Realeses</h3>
        <p className="text-xs mt-4">
          No releases published <br />
          <a href="/" className="text-blue-400 underline">
            Create a new release
          </a>{" "}
        </p>
      </div>
      <hr className="h-0.5 my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <div>
        <h3 className="font-bold text-lg">Package</h3>
        <p className="text-xs mt-4">
          No package published <br />
          <a href="/" className="text-blue-400 underline">
            Publish your first package
          </a>{" "}
        </p>
      </div>
      <hr className="h-0.5 my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <div>
        <h3 className="font-bold text-lg">Language</h3>
        <div className="w-full overflow-hidden rounded-full h-3 flex mt-3">
          <div className="bg-sky-500 w-[60%] h-full"></div>
          <div className="bg-yellow-500 w-[20%] h-full"></div>
          <div className="bg-red-500 w-[10%] h-full"></div>
          <div className="bg-blue-400 w-[10%] h-full"></div>
        </div>
        <div className="flex flex-wrap gap-3 mt-4 text-sm">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-sky-500"></div>
            <h5>
              Typescript <span>60%</span>
            </h5>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <h5>
              Javascript <span>20%</span>
            </h5>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <h5>
              HTML <span>10%</span>
            </h5>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <h5>
              CSS <span>10%</span>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRepository;
