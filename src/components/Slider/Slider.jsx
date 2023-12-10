import './Slider.css'

import React, { useEffect, useState } from "react";
import {icons} from '../../constants/icon'

export const Slider = () => {
  // const [data, setData] = useState([]);
  // function showData() {
  //   fetch("https://641fbbe425cb6572103c73ea.mockapi.io/products")
  //     .then((response) => response.json())
  //     .then((products) => setData(products));
  // }
  // useEffect(() => {
  //   showData();
  // }, []);
  // console.log(data);
  return (
    <section className="slider">
      <ul className="slide-track">
        {icons.technologies.map((product) => {
          return (
            <li key={product.id} className="slide">
              <p>{product.id}</p>
              <img src={product.src} alt="" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
