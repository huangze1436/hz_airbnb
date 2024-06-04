import React from "react"
import {Navigate} from "react-router-dom";

const Home = React.lazy(()=>import("@/views/home"))
const Detail = React.lazy(()=>import("@/views/detail"))
const Entire = React.lazy(()=>import("@/views/entire"))
const Testforindicator = React.lazy(()=>import("@/views/testforindicator"))

const routes = [
    //进来就自动跳转到Navigate
    {
        path:"/",
        element:<Navigate to="/home"/>
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/detail",
        element:<Detail/>
    },
    {
        path:"/entire",
        element:<Entire/>
    },
    {
        path:'/test',
        element:<Testforindicator/>
    }
]

export default routes