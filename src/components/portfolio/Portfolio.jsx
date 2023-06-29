import React from "react";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section id="portSection" className="port__wrap section center">
      <h3>쉬어가기 꽃 소개</h3>
      <p>
        꽃은 아름다움과 향기로운 특징을 지니며, 심신 안정과 안락함을 전해주는
        자연의 아름다운 선물입니다.
      </p>
      <div className="port__inner container">
        <div className="port__btn">
          <ul>
            <li>
              <Link href="/">봄</Link>
            </li>
            <li>
              <Link href="/">여름</Link>
            </li>
            <li>
              <Link href="/">가을</Link>
            </li>
            <li>
              <Link href="/">겨울</Link>
            </li>
          </ul>
        </div>
        <div className="port__cont">
          <div className="port">
            <figure className="port__header">
              {/* <img
                src="../assets/images/port/portImg01.svg"
                alt="포트폴리오 이미지"
              /> */}
              <Image
                width={200}
                height={200}
                src="/assets/images/port/portImg01.svg"
                alt="이미지"
              />
            </figure>
            <div className="port__body">
              <div className="pic">
                {/* <img
                  src="../assets/images/port/memberIcon01.png"
                  alt="멤버 이미지"
                /> */}
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/port/memberIcon01.png"
                  alt="이미지"
                />
              </div>
              <div>
                <h4>국화</h4>
                <p>
                  우아하고 아름다운 꽃으로,
                  <br /> 전통적인 아시아 문화에서 미를 상징
                </p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              {/* <img
                src="../assets/images/port/portImg02.svg"
                alt="포트폴리오 이미지"
              /> */}
              <Image
                width={200}
                height={200}
                src="/assets/images/port/portImg02.svg"
                alt="이미지"
              />
            </figure>
            <div className="port__body">
              <div className="pic">
                {/* <img
                  src="../assets/images/port/memberIcon01.png"
                  alt="멤버 이미지"
                /> */}
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/port/memberIcon01.png"
                  alt="이미지"
                />
              </div>
              <div>
                <h4>데이지</h4>
                <p>
                  신선하고 밝은 느낌을 주는 꽃으로,
                  <br /> 순수함과 희망을 상징
                </p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              {/* <img
                src="../assets/images/port/portImg03.svg"
                alt="포트폴리오 이미지"
              /> */}
              <Image
                width={200}
                height={200}
                src="/assets/images/port/portImg03.svg"
                alt="이미지"
              />
            </figure>
            <div className="port__body">
              <div className="pic">
                {/* <img
                  src="../assets/images/port/memberIcon01.png"
                  alt="멤버 이미지"
                /> */}
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/port/memberIcon01.png"
                  alt="이미지"
                />
              </div>
              <div>
                <h4>장미</h4>
                <p>
                  사랑과 열정을 상징하는 아름다운 꽃으로,
                  <br /> 그 향기와 우아함으로 인기있는 꽃
                </p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              {/* <img
                src="../assets/images/port/portImg04.svg"
                alt="포트폴리오 이미지"
              /> */}
              <Image
                width={200}
                height={200}
                src="/assets/images/port/portImg04.svg"
                alt="이미지"
              />
            </figure>
            <div className="port__body">
              <div className="pic">
                {/* <img
                  src="../assets/images/port/memberIcon01.png"
                  alt="멤버 이미지"
                /> */}
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/port/memberIcon01.png"
                  alt="이미지"
                />
              </div>
              <div>
                <h4>제비꽃</h4>
                <p>자유로움과 희망을 상징하는 아름다운 꽃</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              {/* <img
                src="../assets/images/port/portImg05.svg"
                alt="포트폴리오 이미지"
              /> */}
              <Image
                width={200}
                height={200}
                src="/assets/images/port/portImg05.svg"
                alt="이미지"
              />
            </figure>
            <div className="port__body">
              <div className="pic">
                {/* <img
                  src="../assets/images/port/memberIcon01.png"
                  alt="멤버 이미지"
                /> */}
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/port/memberIcon01.png"
                  alt="이미지"
                />
              </div>
              <div>
                <h4>아이리스</h4>
                <p>
                  꽃잎과 섬세한 모양으로 유명한 꽃으로,
                  <br />
                  우아함과 지혜를 상징하는 꽃
                </p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              {/* <img
                src="../assets/images/port/portImg06.svg"
                alt="포트폴리오 이미지"
              /> */}
              <Image
                width={200}
                height={200}
                src="/assets/images/port/portImg06.svg"
                alt="이미지"
              />
            </figure>
            <div className="port__body">
              <div className="pic">
                {/* <img
                  src="../assets/images/port/memberIcon01.png"
                  alt="멤버 이미지"
                /> */}
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/port/memberIcon01.png"
                  alt="이미지"
                />
              </div>
              <div>
                <h4>벚꽃</h4>
                <p>
                  아름다운 분홍빛 꽃을 피우며,잠시동안만 <br /> 지속되는
                  아름다운 순간을 상징하는 꽃
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
