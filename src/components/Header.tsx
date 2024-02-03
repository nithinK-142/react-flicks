import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const isBookings = useLocation().pathname === "/bookings";
  return (
    <div className="flex items-center justify-between w-full my-3 bg-gray-900/40">
      <div className="pl-10">
        <Link to={"/"}>
          <h1 className="text-2xl font-semibold tracking-wider text-center">
            React Flicks
          </h1>
        </Link>
      </div>
      {isBookings && <h1 className="text-2xl md:pl-12">Bookings</h1>}
      <div className="flex space-x-10 md:pr-52">
        <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 fill-white"
            viewBox="0 0 576 512"
          >
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
        </Link>

        <Link to={"/bookings"}>
          <svg
            viewBox="0 0 1.44 1.44"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 fill-white"
          >
            <path
              fillRule="evenodd"
              d="M.18.3A.18.18 0 0 1 .36.12h.72a.18.18 0 0 1 .18.18v.84a.18.18 0 0 1-.18.18H.36a.18.18 0 0 1-.18-.18V.3zm.3 0v.42L.618.582a.06.06 0 0 1 .085 0L.84.72V.3A.06.06 0 0 0 .78.24H.54A.06.06 0 0 0 .48.3z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Header;
