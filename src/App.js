import React, { useEffect, useState } from "react";
import listApi from "./api/listApi";
import "./App.css";
import AddProduct from "./components/addProduct";
import Product from "./components/products/products";
import UpdateProduct from "./components/updateProduct";

import * as htmlToImage from "html-to-image";

function App() {
  const [list, setList] = useState([]);
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    listApi
      .getList()
      .then((response) => {
        if (response) setList(response);
      })
      .catch((err) => console.log(err));
  });

  const handleShowUpdate = (id) => {
    const show = !isShowUpdate;
    setIsShowUpdate(show);
    setId(id);
  };

  const handleShare = () => {
    const img = document.getElementById("img");

    htmlToImage
      .toPng(img)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div id="img">
      <AddProduct />
      <button onClick={() => handleShare()}>Share</button>
      {isShowUpdate && <UpdateProduct id={id} isShow={handleShowUpdate} />}
      {list !== [] && <Product list={list} isShow={handleShowUpdate} />}
    </div>
  );
}

export default App;
