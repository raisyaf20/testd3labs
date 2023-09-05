import { Link } from "react-router-dom";
import { repository } from "../utils/dataDummy";

type propsRepo = {
  data: repository;
};

const RepoLink = ({ data }: propsRepo) => {
  return (
    <li className="mb-3">
      <Link to={data.url} className="hover:text-blue-400">
        <div className="flex gap-2 items-center">
          <img src={data.image} className="rounded-full" alt={data.name} />
          <p>
            {data.name}/{data.repo}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default RepoLink;
