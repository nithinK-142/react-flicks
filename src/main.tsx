import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./styles/index.css";
import { Layout } from "./layout.tsx";
import ShowList from "./pages/ShowList.tsx";
import BookShow from "./pages/BookShow.tsx";
import NotFound from "./pages/NotFound.tsx";
import Bookings from "./pages/Bookings.tsx";

const routes = (
  <Route path="/" element={<Layout />}>
    <Route path="" element={<ShowList />} />
    <Route path="shows/:id" element={<BookShow />} />
    <Route path="bookings" element={<Bookings />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
