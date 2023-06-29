"use client";
import ContTitle from "@/components/title/ContTitle";
import UnsplashCont from "@/components/unsplash/UnsplashCont";
import React, { useEffect, useState } from "react";

const Unsplash = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const getData = async () => {
      const res = await fetch(
        "https://api.unsplash.com/photos?client_id=Y5YRP4enZkTmKiGv73DRLR4X1vXjLibm7fCZg_Y45_8&per_page=30",
        requestOptions
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setImages(data);
    };
    getData();
  }, []);

  return (
    <>
      <ContTitle title="unsplash" />
      <UnsplashCont images={images} />
    </>
  );
};

export default Unsplash;
