import React from "react";
import Image from "next/image";

const Member = () => {
  return (
    <section
      id="memberSection"
      className="member__wrap gmarket5 section center bg-blue"
    >
      <h3>멤버 소개</h3>
      <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.</p>
      <div className="member__inner container">
        <article className="member">
          <figure className="member__header">
            {/* <img src="/assets/images/member/peep-1.svg" alt="멤버" /> */}
            <Image
              width={300}
              height={400}
              src="assets/images/member/peep-1.svg"
              alt="이미지"
            />
          </figure>
          <div className="member__body">
            <h4>웹디자이너</h4>
            <p className="desc">김고은(31)</p>
            <a href="/" className="btn"></a>
          </div>
        </article>
        <article className="member">
          <figure className="member__header">
            {/* <img src="/assets/images/member/peep-2.svg" alt="멤버" /> */}
            <Image
              width={300}
              height={400}
              src="assets/images/member/peep-2.svg"
              alt="이미지"
            />
          </figure>
          <div className="member__body">
            <h4>웹 퍼블리셔</h4>
            <p className="desc">공유(42)</p>
            <a href="/" className="btn"></a>
          </div>
        </article>
        <article className="member">
          <figure className="member__header">
            {/* <img src="/assets/images/member/peep-3.svg" alt="멤버" /> */}
            <Image
              width={300}
              height={400}
              src="assets/images/member/peep-3.svg"
              alt="이미지"
            />
          </figure>
          <div className="member__body">
            <h4>프론트엔드</h4>
            <p className="desc">이동욱(38)</p>
            <a href="/" className="btn"></a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Member;
