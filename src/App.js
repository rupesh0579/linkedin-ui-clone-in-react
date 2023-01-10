import React, { Fragment } from "react";
import LeftSidebar from "./Components/LeftSideBar/index";
import Main from "./Components/Main/index";
import Navbar from "./Components/Navbar/Index";
import RightSidebar from "./Components/RightSideBar";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div style={{ width: "80%", margin: "auto" }}>
        <main style={{ display: "flex", justifyContent: "space-between" }}>
          <LeftSidebar />
          <Main />
          <RightSidebar />
        </main>
      </div>
    </Fragment>
  );
};

export default App;
