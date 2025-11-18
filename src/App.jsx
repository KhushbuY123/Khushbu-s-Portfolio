import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Project from "./Projects/Project";
import Experience from "./Experience/Experience";
import Gallery from "./Gallery/Gallery";
import Main from "./Main Page/Main";
import Preloader from "./Components/Preloader/Preloader";
import AnimatedCursor from "./Components/Animated Cursor/AnimatedCursor";
import ScrollTop from "./Components/Scroll To Top/ScrollTop";
import Error from "./Components/Error/Error";

const App = () => {
  return (
    <>
      <div>
        <Nav />
        <AnimatedCursor />
        <ScrollTop />
        <Preloader />
        <Outlet />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
    ],
    errorElement: <Error />,
  },
]);
const Root = () => {
  return (
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  );
};

export default Root;
