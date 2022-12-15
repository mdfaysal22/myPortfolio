import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Layout/main";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        }
      ]
    }
  ])
  return (
    <div className="font-mono">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
