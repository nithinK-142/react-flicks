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
    <div className="flex items-start justify-between min-h-[80vh] bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col p-5 space-y-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {show.name}
        </h5>
        {show.network?.name && (
          <p>
            Network:{" "}
            <span className="opacity-90">{show.network.country.code}</span>{" "}
            <span className="text-green-400">{show.network.name}</span>{" "}
          </p>
        )}
        {show.schedule.days.length !== 0 && (
          <p>
            Schedule:{" "}
            <span className="opacity-90">
              {show.schedule.days}s at {show.schedule.time} ({show.runtime} min){" "}
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
        <p>Rating: {show.rating.average} / 10 </p>
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
        <Link
          to={`/shows/${show.id}`}
          className="inline-flex items-center justify-center w-3/4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      <div className="w-1/2 h-full">
        <img
          className="object-cover w-full rounded-t-lg"
          src={show.image ? show.image.medium : "/nope-not-here.jpg"}
          alt={show.name}
        />
        <p className="my-3 font-normal text-gray-700 dark:text-white/90 line-clamp-[14]">
          {sanitizedSummary(show.summary)}
        </p>
      </div>
    </div>
  );
};

export default ShowInfo;
