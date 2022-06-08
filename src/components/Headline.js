import React from "react";
import News from "../assets/bg.jpg";
import Card from "./Card";
import LatestNews from "./LatestNews";
import "./Style.css";

const Headline = () => {
  return (
    <div className="bg">
      <div className=" text-dark position-relative">
        <img src={News} alt="...." className="bg" />
        <div className="position-absolute top-0 start-40">
          <h1 className=" d-flex text-warning mt-5 container ms-2 ">
            <strong>"MAMA TITIPKAN KAMU KEPADA ALLAH"</strong>
          </h1>
        </div>
        <div className="position-absolute bottom-0 start-0 ms-5 p-5">
          <h3 className="text-white mt-5">News Trending</h3>
        </div>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="position-absolute bottom-0 start-0 ms-5"></div>
      </div>
      <div className="container">
        <h1 className="mt-3">Latest News</h1>
        <div className="mt-3 text-dark">
          <LatestNews />
          <LatestNews />
          <LatestNews />
          <LatestNews />
          <LatestNews />
        </div>
      </div>
      <div className="bg-warning ">
        <div className="container d-flex justify-content-between p-5">
          <h1 className="mb-0 ">News</h1>
          <p className="mb-0 text-center">
            Informasi Perusahaan• Syarat dan Ketentuan Umum Privasi• Pedoman
            Liputan Media Siber• Kontak Kami• Karier
          </p>
          <h1 className="mb-0">News</h1>
        </div>
        <div className="bg-dark text-white ">
          <p className="mb-0 d-flex justify-content-center">
            News | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headline;
