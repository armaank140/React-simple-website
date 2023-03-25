import React from "react";
import "../css/main.css";

export default function Main() {
    const imghw={
        "height" : "200px",
        "width" : "470px"
    }   
  return (
    <>
      <div className="container">
        <div className="back-banner">
          <div className="banner">
            <div className="left-banner">
              <h1>
                We <b>aim to build a better world</b> where clean water is
                <span className="change_contain"> </span>
              </h1>
              <p>
                KarIoT is a IoT enabled Smart Water Management System which
                monitors the quality and quantity of water in real time for
                Residential, Commercial, Industrial Sectors
              </p>
              <div className="left-btn">
                <button id="Lbtn1">KarIoT Device 3D View</button>
                <button id="Lbtn2">
                  Download Brochure{" "}
                  <span>
                    <img
                      className="downloading"
                      src="https://www.karikala.in/assets/images/downloading.webp"
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  </span>
                </button>
              </div>
            </div>

            <div className="right-banner">
              <p>Government sector</p>
              <div class="pic-ctn">
                <img
                  src="https://www.karikala.in/assets/images/commercial-owl.webp"
                  alt=""
                  class="pic"
                />
                <img
                  src="https://www.karikala.in/assets/images/gov-owl.webp"
                  alt=""
                  class="pic"
                />
                <img
                  src="https://www.karikala.in/assets/images/industry-owl.webp"
                  alt=""
                  class="pic"
                />
              </div>
            </div>
          </div>
        </div>



        <div className="back-banner2">        
        <div className="main-bottom">
            <div className="bottom-img1">
                <span className="s1 animate__animated animate__bounce">industries</span>
            <img src="https://www.karikala.in/assets/images/industries.webp" alt="" style={imghw}/>
            </div>
            <div className="bottom-img2">
            <span className="s2">Government-Sector</span>
            <img  className="img2" src="https://www.karikala.in/assets/images/gov.webp" alt="" style={imghw}/>
            </div>
            <div className="bottom-img3">
                <span className="s3">Commercial</span>
            <img src="https://www.karikala.in/assets/images/commercial.webp" alt="" style={imghw}/>
            </div>
        </div>

        </div>


      </div>
    </>
  );
}
