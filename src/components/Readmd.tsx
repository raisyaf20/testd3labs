const Readmd = () => {
  return (
    <div className="text-slate-300  border shadow-md dark:border-slate-800 rounded-md mt-6 bg-gradient-to-br from-pink-700 to-teal-700">
      <div className="border-b border-neutral-500 dark:border-slate-800 p-2">
        {" "}
        <span className="uppercase">readme</span>.md
      </div>
      <div className="p-2">
        <h1 className="font-bold text-4xl p-2 border-b border-neutral-500 dark:border-slate-800">
          Getting Started with React + Typescript
        </h1>
        <p className="p-2">
          This project was bootstrapped with{" "}
          <a
            href="https://vitejs.dev/"
            className="link text-blue-400"
            target="_blank"
          >
            React Vite
          </a>
        </p>
        <div className="p-2">
          <div className="bg-gray-200 text-slate-800 w-28 p-2 grid place-items-center text-xl font-bold rounded-md shadow dark:text-slate-800">
            yarn dev
          </div>
          <p className="mt-2">
            Runs the app in the development mode. Open{" "}
            <a href="http://localhost:5173" className="link text-blue-400">
              http://localhost:5173
            </a>{" "}
            to view it in your browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Readmd;
