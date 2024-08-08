import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { AppContext } from "./context/contextApi";

function App() {
  const appRouter= createBrowserRouter([
 
    {
      path:"/Browse",
      element: <AppContext />,
    }
  ])
  return  <RouterProvider router={appRouter}/> 

}

export default App;
