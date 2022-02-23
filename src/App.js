import React from "react";
import {useRoutes} from "react-router-dom";
import Home from "./pages/Home";
import Bmi from "./components/Bmi";
import Calc from "./components/Calc";
import Circle from "./components/Circle";
import Counter from "./components/Counter";
import Grade from "./components/Grade";
import Login from "./components/Login";

export default function App(){
  return useRoutes([
    {path:"/",element:<Home/>},
    {path:"/login",element:<Login/>},
    {path:"/calc",element:<Calc/>},
    {path:"/bmi",element:<Bmi/>},
    {path:"/counter",element:<Counter/>},
    {path:"/circlearea",element:<Circle/>},
    {path:"/grade",element:<Grade/>}
  ]);
}