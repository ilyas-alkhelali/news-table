import React from "react";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <div className="content _container">
        <Header />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
