import React, { Fragment } from "react";
import LeftSidebar from "./Components/LeftSideBar/index";
import Main from "./Components/Main/index";
import Navbar from "./Components/Navbar/Index";
import RightSidebar from "./Components/RightSideBar";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </Fragment>
  );
};

export default App;
