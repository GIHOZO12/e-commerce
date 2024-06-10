import React, { useRef } from "react";
import "./NewRice.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import RiceImage from "../assets/kawunga.jpg";

function NewRice() {
  const slider = useRef();
  let tx = 0;
  const handleForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const haandleBack = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="new-rice">
      <h1 style={{ textAlign: "center" }}>Latest Rice</h1>
      <hr style={{ width: 100, height: 5, background: "#1212" }} />
      <GrNext className="next" onClick={handleForward} />
      <GrPrevious className="back" onClick={haandleBack} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="product-info">
                <img src={RiceImage} alt="" />
                <p>This is the best Tanzanian rice</p>
              </div>
              <button>View this product</button>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="product-info">
                <img src={RiceImage} alt="" />
                <p>This is the best Tanzanian rice</p>
              </div>
              <button>View this product</button>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="product-info">
                <img src={RiceImage} alt="" />
                <p>This is the best Tanzanian rice</p>
              </div>
              <button>View this product</button>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="product-info">
                <img src={RiceImage} alt="" />
                <p>This is the best Tanzanian rice</p>
              </div>
              <button>View this product</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewRice;
