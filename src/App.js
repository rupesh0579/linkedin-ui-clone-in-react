import React from "react";
import LeftSidePanel from "./Components/leftsidepanel/index";
import Main from "./Components/main/index";
import Navbar from "./Components/navbar/Index";
import RightSidePanel from "./Components/rightsidepanel";

const App = () => {
  return (
    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "column",
    //   height: "100vh",
    //   // overflow: "hidden",
    // }}
    >
      <Navbar />
      <main
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "auto",
          // flex: 1,
          // overflow: "hidden",
        }}
      >
        <LeftSidePanel />
        <Main />
        <RightSidePanel />
      </main>
    </div>
  );
};

export default App;
