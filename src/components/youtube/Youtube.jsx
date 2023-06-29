import React from "react";
import Image from "next/image";
const Youtube = () => {
  return (
    <section id="youtubeSection" className="youtube__wrap section bg-blue">
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>코딩 유튜버 추천</h3>
          <p>
            노마드 코더, 애플 코딩 등 많은 유튜버들이 있습니다. <br />
            함께 공부 합시다.
          </p>
          <a href="/" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="youtube__item">
          <div>
            {/* <img src="assets/images/youtube/youtubeImg.png" alt="유튜브" /> */}
            <Image
              width={400}
              height={200}
              src="/assets/images/youtube/youtubeImg.png"
              alt="이미지"
            />
          </div>
          <div>
            {/* <img src="assets/images/youtube/youtubeImg02.png" alt="유튜브" /> */}
            <Image
              width={400}
              height={200}
              src="/assets/images/youtube/youtubeImg02.png"
              alt="이미지"
            />
          </div>
          <div>
            {/* <img src="assets/images/youtube/youtubeImg03.png" alt="유튜브" /> */}
            <Image
              width={400}
              height={200}
              src="/assets/images/youtube/youtubeImg03.png"
              alt="이미지"
            />
          </div>
          <div>
            {/* <img src="assets/images/youtube/youtubeImg04.png" alt="유튜브" /> */}
            <Image
              width={400}
              height={200}
              src="/assets/images/youtube/youtubeImg04.png"
              alt="이미지"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
