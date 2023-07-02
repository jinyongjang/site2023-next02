import React from "react";
import Image from "next/image";

const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={youtube.snippet.thumbnails.medium.url}
          alt={youtube.snippet.title}
          priority={true}
          width={500}
          height={750}
        />
        <span>{youtube.snippet.title}</span>
      </a>
    </li>
  );
};

const YoutubeCont = ({ youtubes }) => {
  return (
    <div className="youtube__cont container">
      <ul>
        {youtubes.map((youtube, index) => (
          <YoutubeItem key={index} youtube={youtube} />
        ))}
      </ul>
    </div>
  );
};

export default YoutubeCont;
