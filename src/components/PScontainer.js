import React from "react";
import "../css/PScontainer.css";

export default function PScontainer() {
  return (
    <>
      <div className="problem-sec">
        <div className="pscontainer">
          <div className="problem-heading">
            <h3>Problem Statements</h3>
            <div className="problem-statement">
              <p>
                We have systematically identified the problems of water
                management in each sector that impacts revenue and
                sustainability.&nbsp;
              </p>
            </div>
          </div>
          <div className="problem-tab">
            <div className="problem-tab-left">
              <div className="problem-box">
                <p class="pro-head">Over Exploitation of Water</p>
                <p className="pro-para">
                  Lack of water systems to monitor fair usage and to efficiently
                  use reclaimed water for alternate purposes such as car wash,
                  gardening, etc.
                </p>
              </div>

              <div className="problem-box">
                <p class="pro-head">Zero-loss Preventive Measures</p>{" "}
                <p className="pro-para">
                  Absence of observation mechanism to notify or alert a consumer
                  for any mishaps in leakages or quality fluctuations.
                </p>
              </div>

              <div className="problem-box">
                <p class="pro-head">Scarcity of Quality Water</p>{" "}
                <p class="pro-para">
                  Lack of water systems to monitor fair usage and to efficiently
                  use reclaimed water for alternate purposes such as car wash,
                  gardening, etc.
                </p>
              </div>

              <div className="problem-box">
                <p class="pro-head">Lack of Data Transparency</p>{" "}
                <p class="pro-para">
                  Manual effort to record data is prone to clerical errors and
                  the lack of digital data makes it difficult to predict or
                  analyse water requirements.
                </p>
              </div>

              <div className="problem-box">
                <p class="pro-head">Higher Cost Investment</p>{" "}
                <p className="pro-para">
                  Systems such as PLC/SCADA require high installation/ license
                  costs, infrastructure, skilled operators, and the need to
                  physically download daily reports.
                </p>
              </div>
            </div>
            <div className="problem-tab-right">
              <div class="pic-ctn">
                <img
                  src="https://www.karikala.in/assets/images/tab-deprivation.webp"
                  alt=""
                  class="pic"
                />
                <img
                  src="https://www.karikala.in/assets/images/tab-exploitation.webp"
                  alt=""
                  class="pic"
                />
                <img
                  src="https://www.karikala.in/assets/images/tab-quality.webp"
                  alt=""
                  class="pic"
                />
                <img
                  src="https://www.karikala.in/assets/images/tab-investment.webp
                  "
                  alt=""
                  class="pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="problem-sec2">
        <div className="solution-layout">
          <div className="left_layout">
            <h4>KarIoT as an</h4>
            <h4>
              Intelligent <span className="span_S">solution</span>
            </h4>
            <span className="span_p">
              We understand your problems and have tailored IoT (Internet of
              Things) &amp; AI-based (Artificial Intelligence algorithms)
              solutions to satisfy your needs and demands with cutting-edge
              strategies
            </span>

            <div className="problem-sec2logo">
              <ul>
                <li>
                  <img
                    src="https://www.karikala.in/assets/images/logo-amrit.webp"
                    alt="logo-amrit"
                  />
                </li>
                <li>
                  <img
                    src="https://www.karikala.in/assets/images/logo-amrit.webp"
                    alt="logo-micro"
                  />
                </li>
                <li>
                  <img
                    src="https://www.karikala.in/assets/images/logo-agni.webp"
                    alt="logo-agni"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="right_layout">
            <div className="can-img1">
              <img
                className="img"
                src="https://www.karikala.in/assets/images/icons/smart-monitor.webp"
                alt=""
              />
              <h5>Smart Monitoring System</h5>
            </div>
            <div className="can-img2">
              <img
                className="img"
                src="https://www.karikala.in/assets/images/icons/automated-alerting.webp"
                alt=""
              />
              <h5>Automated Alerting System</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
