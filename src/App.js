import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (<div className="App" >
    <div className="container" >
      <Weather defaultCity="New York" />

      <footer >
        This project was coded by Mariya Harizanova{
          " "
        } <a href="https://www.delac.io/"
          target="_blank"
          rel="noopener noreferrer" >
        </a>{" "}and is {
            " "
          } <a href = "https://github.com/mharizanova8703/React-weather"
            target="_blank"
            rel="noopener noreferrer" >
            open - sourced on GitHub </a>{" "}and {
              " "
            } <a href=""
              target="_blank"
              rel="noopener noreferrer" >hosted on Netlify </a> </footer> </div> </div>
  );
}