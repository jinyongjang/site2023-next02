import React from "react";
import Image from "next/image";

const Movie = () => {
  return (
    <section id="moviesSection" className="movies__wrap section bg-blue">
      <div className="movie__inner">
        <div className="movie__inner container">
          <div className="movie__text">
            <h3>코딩 추천 영화</h3>
            <p>
              Netflix와 Youtube등 다양한 경로에서
              <br />
              코딩 관련 영화를 시청할 수 있습니다.
            </p>
            <a href="/" className="button-green">
              자세히 보기
            </a>
          </div>
          <div className="movie__item">
            <div>
              {/* <img src="../assets/images/movie/movieImg.png" alt="영화" /> */}
              <Image
                width={400}
                height={200}
                src="/assets/images/movie/movieImg.png"
                alt="이미지"
              />
            </div>
            <div>
              {/* <img src="../assets/images/movie/movieImg02.png" alt="영화" /> */}
              <Image
                width={400}
                height={200}
                src="/assets/images/movie/movieImg02.png"
                alt="이미지"
              />
            </div>
            <div>
              {/* <img src="../assets/images/movie/movieImg03.png" alt="영화" /> */}
              <Image
                width={400}
                height={200}
                src="/assets/images/movie/movieImg03.png"
                alt="이미지"
              />
            </div>
            <div>
              {/* <img src="../assets/images/movie/movieImg04.png" alt="영화" /> */}
              <Image
                width={400}
                height={200}
                src="/assets/images/movie/movieImg04.png"
                alt="이미지"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
