import React from "react";
// import Link from "next/link";
import Image from "next/image";
import styles from "./unsplash.module.scss";

const UnsplashImg = ({ image }) => {
  return (
    <a href={`https://unsplash.com/photos/${image.id}`}>
      <li>
        <Image
          src={image.urls.regular}
          alt={image.alt_description}
          width={500}
          height={750}
          priority={true}
        />
      </li>
    </a>
  );
};

const UnsplashCont = ({ images }) => {
  return (
    <div className={styles.unsplash__cont}>
      <ul className={styles.ul}>
        {images.map((image, index) => (
          <UnsplashImg key={index} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default UnsplashCont;
