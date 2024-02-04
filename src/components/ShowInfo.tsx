import { sanitizedSummary } from "@/utils/utils";
import useFetchShows from "@/hooks/useFetchShows";
import NotFound from "@/pages/NotFound";
import Loading from "@/pages/Loading";
import { Link } from "react-router-dom";

const ShowInfo = ({ showId }: { showId: number }) => {
  const { shows, loading } = useFetchShows(
    `https://api.tvmaze.com/shows/${showId}`
  );
  const show = shows[0];
  if (loading) return <Loading bg="bg-gray-800" />;
  if (!show) return <NotFound />;

  return (
    <div className="flex flex-col items-start justify-start bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col-reverse justify-between mb-2 xl:flex-row">
        <div className="flex flex-col pt-2 pl-3 pr-1 space-y-3">
          <h5 className="mb-2 text-2xl font-semibold tracking-wide text-gray-900 dark:text-white">
            {show.name}
          </h5>
          {show.network?.name && (
            <p className="flex space-x-1">
              Network:{" "}
              <span className="pl-1">
                <img
                  src={`https://flagsapi.com/${show.network.country.code}/flat/64.png`}
                  className="h-6 "
                />
              </span>
              <span className="text-green-400">{show.network.name}</span>{" "}
            </p>
          )}
          {show.schedule.days.length !== 0 && (
            <p>
              Schedule:{" "}
              <span className="opacity-90">
                {show.schedule.days}s at {show.schedule.time} ({show.runtime}{" "}
                min){" "}
              </span>
            </p>
          )}
          <p>
            Status: <span className="opacity-90">{show.status}</span>{" "}
          </p>
          <p>
            Show Type: <span className="opacity-90">{show.type}</span>{" "}
          </p>
          <p>
            Genre:{" "}
            {show.genres.map((genre, idx) => (
              <span key={idx} className="opacity-90">
                {genre}
                {idx !== show.genres.length - 1 && " | "}
              </span>
            ))}
          </p>
          {show.rating.average !== null && (
            <p className="opacity-90">Rating: {show.rating.average} / 10 </p>
          )}
          {show.officialSite && (
            <p>
              Site:{" "}
              <a
                href={show.officialSite}
                target="_blank"
                className="text-blue-300 opacity-90 hover:underline"
              >
                {show.officialSite}
              </a>
            </p>
          )}
          <p>
            Language : <span className="opacity-90">{show.language} </span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover rounded-t-lg md:w-80"
            src={show.image ? show.image.medium : "/not-found.jpg"}
            alt={show.name}
          />
          <Link
            to={`/shows/${show.id}`}
            className="inline-flex items-center justify-center w-full px-3 py-2 mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      <div className="p-3 m-2 mr-0 bg-gray-900 rounded-md shadow shadow-white/70">
        <h3 className="tracking-widest text-center">SUMMARY</h3>
        <p className="font-normal text-gray-700 dark:text-white/90">
          {sanitizedSummary(show.summary)}
        </p>
      </div>
    </div>
  );
};

export default ShowInfo;
