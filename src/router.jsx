import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root"; 
import LandingPage from "./pages/LandingPage/LandingPage"
import Home from "./pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children:[
            {
                path:"",
                element: <LandingPage />
            },
            {
                path: "home",
                element: <Home />
            }
        ]
    }
]);

export default router;