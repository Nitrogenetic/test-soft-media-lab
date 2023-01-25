import React, { FC, memo } from "react";
import { RouteComponentProps, Router } from "@reach/router";
import { Home } from "./pages/EXPORT";

const RouterPage: FC<RouteComponentProps> = () => {
  return (
    <Router className={"router screen-flex"}>
      <Home path={"/"} />
      {/* <NotFound default /> */}
    </Router>
  );
};

export default memo(RouterPage);
