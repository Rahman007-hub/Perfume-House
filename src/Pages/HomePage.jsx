import React from "react";
import Header from "../Component/Header";
import AllPerfumes from "../Component/Allperfumes";
import Cart from "../Component/cart";



const HomePage = () => {
  return (
      <>
          <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-8">
            <AllPerfumes />
          </div>
          <div className="col-lg-3">
          <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
