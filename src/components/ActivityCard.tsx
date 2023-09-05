import { userActivity } from "../utils/dataDummy";

interface propsAct {
  data: userActivity;
}

const ActivityCard = ({ data }: propsAct) => {
  return (
    <div className="">
      <div className="flex gap-3 items-center">
        <div className="w-8">
          <img src={data.image} alt={data.name} className="rounded-full" />
        </div>
        <h5 className="">{data.name}</h5>
        <p>
          {data.action} <span className="text-slate-500">{data.date_time}</span>
        </p>
      </div>
      <div className="dark:bg-slate-800 bg-gray-100 mt-3 p-4 rounded-md shadow border dark:border-slate-700">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6">
              <img
                src={data.image_repo}
                alt={data.name}
                className="rounded-full"
              />
            </div>
            <h5 className="text-slate-800">
              {data.name} /<span> {data.title}</span>
            </h5>
          </div>
          <div>
            <button>stars</button>
          </div>
        </div>
        <p className="mb-3">{data.desc_repo}</p>
        <div className="flex gap-3">
          <div>
            {data.programing_language.map((e, i) => (
              <div key={i}>{e}</div>
            ))}
          </div>
          <div>{data.starts}</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
