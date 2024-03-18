import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Modal from "./Modal.js";
import "./Sample.css";

const Sample = (Props) => {
  const [data, setdata] = useState([]);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);

  const location = useLocation();
  const data1 = location.state;
  // console.log(data1);

  useEffect(() => {
    fetch("./Sam.json")
      .then((res) => res.json())
      .then((data) => setdata(data.data));
  }, []);

  const handleClickimg = (index) => {
    setActive(index);
    setShow(true);
  };
  const handleClickvid = (index) => {
    setActive(index);
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <div
        className="image-list"
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((value, index) => {
          // console.log("this is img", value.img);
          return (
            <div key={index}>
              {value.imgname.toLowerCase().includes(data1.toLowerCase()) && (
                <div
                  className={index === active ? "active" : ""}
                  onClick={() => handleClickimg(index)}
                  key={value.imgname}
                >
                  <div>
                    <div>
                      <img
                        src={value.img}
                        alt="night"
                        style={{ height: "450px", width: "470px" }}
                      />{" "}
                    </div>

                    <div>
                      <center>
                        <h3>{value.imgname}</h3>
                      </center>
                    </div>
                    <br />
                    <div
                      className={index === active ? "active" : ""}
                      onClick={() => handleClickvid(index)}
                      key={value.vidname}
                    >
                      <iframe
                        width="470"
                        height="450"
                        src={value.vid}
                        title="Jabardasth Latest Promo - 16th November 2023 - Indraja,Siri Hanmanth,Rocket Raghava,Saddam"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div>
                      <center>
                        <h3>{value.vidname}</h3>
                      </center>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div>
          <img src={localStorage.getItem("inputValue")} alt={"C - language"} />
        </div>
      </div>
      ;
      <Modal show={show} title="Lightbox" onClose={onClose}>
        <Slider data={data} active={active} setActive={setActive} />
        {/* <Slider data={data} active={active} setActive={setActive} /> */}
      </Modal>
    </div>
  );
};

const Slider = ({ data, active, setActive }) => {
  const onNext = () => {
    if (active < data.length - 1) {
      setActive(active + 1);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="slider">
      <div className="slides">
        {data.map((value, index) => (
          <Slide key={value.imgname} {...value} active={index === active} />
        ))}
      </div>
      <div className="navigation">
        <div className="navigation-next-prev">
          <div class="next-prev prev" onClick={onPrev}>
            {" "}
            &lt;{" "}
          </div>
          <div class="next-prev next" onClick={onNext}>
            {" "}
            &gt;{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

const Slide = ({ img, vid, imgname, vidname, active }) => {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <div>
        <img src={img} alt={imgname} />
        <span>{imgname}</span>
      </div>

      {/* <div>
        <video src={vid} alt={vidname} />
        <span>{vidname}</span>
      </div> */}
    </div>
  );
};

export default Sample;
