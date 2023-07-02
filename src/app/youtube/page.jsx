"use client";
import React, { useEffect, useState } from "react";
import ContTitle from "@/components/title/ContTitle";
import YoutubeCont from "@/components/youtube/YoutubeCont";

const YoutubePage = () => {
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=27&key=AIzaSyAi3oS-PQt8OVW6Njn4l4CEXeK8m8W-fMQ"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ContTitle title="youtube" />
      <YoutubeCont youtubes={youtubes} />
    </>
  );
};

export default YoutubePage;
