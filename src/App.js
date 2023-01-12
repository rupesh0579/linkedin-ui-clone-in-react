import React from "react";
import LeftSidebar from "./Components/LeftSideBar/index";
import Main from "./Components/Main/index";
import Navbar from "./Components/Navbar/Index";
import RightSidebar from "./Components/RightSideBar";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        // overflow: "hidden",
      }}
    >
      <Navbar />
      <main
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "auto",
          flex: 1,
          // overflow: "hidden",
        }}
      >
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </main>
    </div>
  );
};

export default App;
