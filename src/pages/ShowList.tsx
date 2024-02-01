import { sanitizedSummary } from "@/utils/utils";
import useFetchShows from "@/hooks/useFetchShows";
import Loading from "./Loading";
import ShowInfo from "@/components/ShowInfo";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShowList: React.FC = () => {
  const { shows, loading } = useFetchShows(
    "https://api.tvmaze.com/search/shows?q=all"
  );
  const [showId, setShowId] = useState<number>(42181);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col md:flex-row h-[86vh] custom-scrollbar">
      <ul className="grid w-full h-full grid-cols-1 gap-4 md:w-2/3 custom-scrollbar lg:grid-cols-2">
        {shows.map((show) => (
          <li
            key={show.id}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-md shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={show.image ? show.image.medium : "/nope-not-here.jpg"}
              alt={show.name}
            ></img>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {show.name}{" "}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
                {sanitizedSummary(show.summary)}
              </p>
              <div className="flex flex-row-reverse mt-4 justify-evenly">
                <button
                  onClick={() => setShowId(show.id)}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </button>
                <Link
                  to={`/shows/${show.id}`}
                  className="inline-flex items-center justify-center w-1/2 px-2 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Book Now
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex">
        <div className="fixed w-1/3 h-full overflow-hidden bg-gray-600">
          <ShowInfo showId={showId} />
        </div>
      </div>
    </div>
  );
};

export default ShowList;
