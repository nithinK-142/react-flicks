// Library imports
import { useState } from "react";

// Relative imports
import useFetchShows from "@/hooks/useFetchShows";
import Loading from "./Loading";
import ShowInfo from "@/components/ShowInfo";

// Utility imports
import { sanitizedSummary } from "@/utils/utils";

const ShowList = () => {
  const { shows, isLoading } = useFetchShows();
  const [showId, setShowId] = useState<number>(15299);

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col justify-between md:flex-row md:h-full md:scroller">
      <ul className="grid w-full h-full grid-cols-1 gap-3 pl-2 md:floating-scrollbar lg:grid-cols-2 3xl:grid-cols-3">
        {shows?.map((show) => (
          <li
            key={show.id}
            className="flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-md shadow sm:max-w-lg md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={show.image ? show.image.medium : "/not-found.jpg"}
              alt={show.name}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white/90">
                {show.name}{" "}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
                {sanitizedSummary(show.summary)}
              </p>
              <div className="flex justify-end pr-4">
                <button
                  onClick={() => setShowId(show.id)}
                  className="px-4 py-1 text-blue-500 transition-colors duration-500 rounded-lg hover:bg-white/80 hover:text-black"
                >
                  Read More
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="md:w-[45vw] bg-gray-800 md:scroller hidden md:block">
        <ShowInfo showId={showId} />
      </div>
    </div>
  );
};

export default ShowList;
