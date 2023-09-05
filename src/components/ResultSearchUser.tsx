import { usersSearch } from "../utils/dataDummy";

type propsSearchResult = {
  data: usersSearch[];
};

const ResultSearchUser = ({ data }: propsSearchResult) => {
  console.log(data);

  return (
    <div className="fixed top-0 left-0  right-0 bottom-0 flex items-center justify-center bg-slate-900/75">
      <div className=" bg-neutral-800 p-4 w-full max-w-md rounded-lg shadow-lg max-h-96 overflow-y-scroll">
        <ul className="menu rounded-box">
          {data && data.length ? (
            data.map((e, i) => (
              <li key={i} className="mb-2">
                <a href={e.html_url} target="_blank">
                  {" "}
                  <div className="w-9">
                    <img
                      src={e.avatar_url}
                      alt={e.login}
                      className="rounded-full"
                    />
                  </div>{" "}
                  {e.login}
                </a>
              </li>
            ))
          ) : (
            <p>Search users</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResultSearchUser;
