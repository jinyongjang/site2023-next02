import React from "react";
import Image from "next/image";

const Slider = () => {
  return (
    <section id="sliderSection" className="slider__wrap section">
      <div className="slider__inner">
        <h2 className="blind">배너 슬라이드</h2>
        <div className="slider__img">
          <div className="slider s1 container">
            <div className="text">
              <h3>
                MY
                <br />
                portfolio
              </h3>
              <p>
                포트폴리오는 나의 의지와 열정의 흔적이 담긴 작품집입니다.
                <br />그 안에 내 끈기와 결연함을 보여줄 터전이 되어주세요.
              </p>
              <a href="#" className="more button-red">
                더 알아보기
              </a>
            </div>
            <div className="img" aria-label="hidden">
              {/* <img src="images/icon5.png" alt="이미지1" /> */}
              <Image
                width={200}
                height={200}
                src="/assets/images/slider/sliderIcon6.png"
                alt="이미지"
              />
              {/* <img src="images/icon7.png" alt="이미지2" /> */}
              <Image
                width={200}
                height={200}
                src="/assets/images/slider/sliderIcon7.png"
                alt="이미지"
              />
              {/* <img src="images/icon6.png" alt="이미지3" /> */}
              <Image
                width={200}
                height={200}
                src="/assets/images/slider/sliderIcon2.png"
                alt="이미지"
              />
            </div>
            <div className="circle" aria-label="hidden">
              <span className="circle c1"></span>
              <span className="circle c2"></span>
              <span className="circle c3"></span>
              <span className="circle c4"></span>
              <span className="circle c5"></span>
            </div>
          </div>
        </div>
        <div className="slider__btn">
          <a href="#" className="left">
            <span className="ir">이전이미지</span>
          </a>
          <a href="#" className="right">
            <span className="ir">다음이미지</span>
          </a>
        </div>
        <div className="slider__dot">
          <a href="#" className="dot active">
            <span className="ir">1번 이미지</span>
          </a>
          <a href="#" className="dot">
            <span className="ir">2번 이미지</span>
          </a>
          <a href="#" className="dot">
            <span className="ir">3번 이미지</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
