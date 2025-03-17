import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root"; 
import LandingPage from "./pages/LandingPage/LandingPage"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children:[
            {
                path:"",
                element: <LandingPage />
            },
        ]
    }
]);

export default router;