import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
// import Sample from "./Sample";

import { useNavigate } from "react-router-dom";
const Home = () => {
  const [imgname, setImgname] = useState("");
  const [upload, setUpload] = useState("");
  const [data, setdata] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch("./Sam.json")
      .then((res) => res.json())
      .then((data) => setdata(data.data));
  }, []);

  // const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const ChangeHandler = (event) => {
    event.preventDefault();
    setImgname(event.target.value);

    // navigate("/Sample", { state: event.target.value });
  };

  const clickHandler = () => {
    navigate("/Sample", { state: imgname });
  };

  const uploadHandler = () => {
    inputRef.current.click();
  };

  const changeUpload = (event) => {
    setUpload(inputRef.current.files[0].name);
    console.log(event.target.files);

    // setUpload(event.target.files[0]);
    localStorage.setItem("inputValue", inputRef.current.value);
  };

  const photoHandler = (event) => {
    event.preventDefault();
    setPhoto(event.target.value);
  };
  const videoHandler = (event) => {
    event.preventDefault();
    setVideo(event.target.value);
  };

  return (
    <div>
      <div className="bgimage">
        <div className="navtype ">
          <h2 className="brandname">PixelLab</h2>
          <div className="authentication">
            <button className="b1">Login</button> &nbsp;
            <button className="b2">SignUp </button> &nbsp;
            <button className="b3" onClick={uploadHandler}>
              <input
                type="file"
                value={upload}
                ref={inputRef}
                style={{ display: "none" }}
                onChange={changeUpload}
              />
              Upload
            </button>
          </div>
        </div>
        <div id="para">
          <center>
            <h1>Best free stock photos, royalty free images & videos.</h1>
          </center>
          <h6>
            <center>
              Over 3.5 million+ high quality stock images, videos and music
              shared by our talented community.
            </center>
          </h6>

          <center>
            <form
            // onSubmit={submitHandler}
            >
              <select className="categories">
                <option>Categories</option>
                <option onChange={photoHandler} value={photo}>
                  Photos
                </option>
                <option onChange={videoHandler} value={video}>
                  Videos
                </option>
              </select>
              <input
                type="text"
                size="80"
                id="inputText"
                placeholder="Search for free photos & videos"
                onChange={(event) => {
                  ChangeHandler(event);
                }}
              />
              <br />
              <br />
              <button
                id="b4"
                type="submit"
                value="search"
                onClick={clickHandler}
              >
                Search
              </button>
            </form>
          </center>
        </div>
      </div>

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
                {value.imgname
                  .toLowerCase()
                  .includes(imgname.toLowerCase()) && (
                  <div>
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
                      <div>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
