import { createBrowserRouter, Navigate } from "react-router-dom";
import { Carousel } from "../pages/Carousel";
import { Display } from "../pages/Display";
import { Nutrients } from "../pages/Nutrients";
import { Change } from "../components/Change";
import { Error } from "../pages/Error";
import { RecipeDetail } from "../pages/RecipeDetail";
import { Favorites } from "../pages/Favorites"; 
import { TipsAndTricks} from "../pages/TipsAndTricks"


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>

        <Change />
      </>
    ),
    children:[
        {
            index:true,
            element: < Carousel/>,
          }, 
          {
            path: "/display",
            element: < Display/>,
          }, 
          {
            path: "/nutrients",
            element: <Nutrients/>,
          },
          {
            path: "/recipe-detail",
            element: <RecipeDetail/>,
          },
          {
            path: "favorites",
            element: <Favorites />,
          },
          {
            path: "tips",
            element: <TipsAndTricks />,
          },
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" />, 
  },


   {/*
  {
    path: "*",
    element: <Error />, 
  },
  */}
]);