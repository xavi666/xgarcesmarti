import React, { ReactNode } from "react";

import NavBar from "../NavBar";
import Footer from "../Footer";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div>
        <NavBar />
        <Footer />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
