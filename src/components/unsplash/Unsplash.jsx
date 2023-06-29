import React from "react";
import Image from "next/image";

const Unsplash = () => {
  return (
    <section id="unsplashSection" className="unsplash__wrap section">
      <div className="unsplash__inner container">
        <div className="unsplash__text ">
          <h3>Unsplash</h3>
          <p>
            Unsplash에서 다양한 이미지를 무료로
            <br />
            사용할 수 있습니다.
          </p>
          <a href="/" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__item">
          <div>
            {/* <img
              src="../assets/images/unsplash/unsplashImg.png"
              alt="언스플래쉬"
            /> */}
            <Image
              width={400}
              height={200}
              src="/assets/images/unsplash/unsplashImg.png"
              alt="이미지"
            />
          </div>
          <div>
            {/* <img
              src="../assets/images/unsplash/unsplashImg02.png"
              alt="언스플래쉬"
            /> */}
            <Image
              width={400}
              height={200}
              src="/assets/images/unsplash/unsplashImg02.png"
              alt="이미지"
            />
          </div>
          <div>
            {/* <img
              src="../assets/images/unsplash/unsplashImg03.png"
              alt="언스플래쉬"
            /> */}
            <Image
              width={400}
              height={200}
              src="/assets/images/unsplash/unsplashImg03.png"
              alt="이미지"
            />
          </div>
          <div>
            {/* <img
              src="../assets/images/unsplash/unsplashImg04.png"
              alt="언스플래쉬"
            /> */}
            <Image
              width={400}
              height={200}
              src="/assets/images/unsplash/unsplashImg04.png"
              alt="이미지"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
