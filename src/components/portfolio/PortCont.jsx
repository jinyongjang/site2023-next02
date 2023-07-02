import React from "react";
import styles from "./portfolio.module.scss";

const PortCont = () => {
  return (
    <main className={styles.port__wrap + " container "}>
      <h1>계절별 대표 꽃</h1>
      <section id="section1">
        <div className={styles.sectionLeft1}></div>
        <div className={styles.sectionRight}>
          <p>
            벚꽃은 봄의 대표적인 꽃으로, 벚나무(Prunus)의 꽃으로 알려져
            있습니다.
            <br /> 벚꽃은 일반적으로 분홍빛을 띠고 있으며, 한 개 이상의 꽃이
            가지 끝에
            <br /> 소그루터기(꽃대)를 따라 붙어 있습니다.
            <br />
            벚나무는 일반적으로 작고 가는 가지를 가지며,
            <br /> 이 가지 위에 벚꽃이 여러 개 모여 만개하게 됩니다.
            <br /> 벚꽃은 일반적으로 봄에 피어나며,
            <br /> 많은 사람들에게 사랑받고 있습니다.
            <br /> 꽃잎은 부드럽고 얇으며, 분홍색이 가장 흔하지만 흰색,
            <br /> 연보라색 등 다양한 색상의 꽃도 있습니다.
          </p>
        </div>
      </section>
      <section id="section2">
        <div className={styles.sectionLeft2}></div>
        <div className={styles.sectionRight}>
          라벤더(Lavender)는 특히 그 향기로 유명한 꽃으로,여름철에 가장 <br />
          두드러지게 피어나는 꽃 중 하나입니다.
          <br /> 다양한 종류의 라벤더가 있지만 가장 흔하게 알려진 것은 진정한
          라벤더 또는
          <br />
          라벤더 오피시널리스(Lavandula officinalis)입니다. <br />
          라벤더의 가장 큰 특징은 그 향기입니다. 라벤더는 상쾌하면서도 편안하고
          <br />
          진정한 향기를 지니고 있어, 특히 향기 요법이나 휴식 공간의 향기로 많이
          <br />
          사용됩니다. 그 향기는 산뜻하면서도 약간의 단맛과 허브향이 어우러져
          <br />
          특별한 매력을 가지고 있습니다.
        </div>
      </section>
      <section id="section3">
        <div className={styles.sectionLeft3}></div>
        <div className={styles.sectionRight}>
          코스모스(Cosmos)는 미국을 비롯한 다양한 지역에서 자라는 꽃으로,
          <br /> 가을에 가장 두드러지게 피어나는 꽃 중 하나입니다.
          <br /> 코스모스는 속마디초과 비슷한 외모를 가지며,
          <br />
          작은 꽃들이 한 묶음으로 모여 꽃차이를 형성합니다.
          <br />
          코스모스는 아름다운 꽃의 모습과 함께 자연스럽고 화려한 분위기를
          <br />
          연출해주어 가을의 아름다움을 더해줍니다. 또한, 코스모스는 꽃말로서
          <br />
          순수, 사랑, 아름다움, 상상력 등의 의미를 갖고 있어서
          <br /> 다양한 이벤트나 기념일에서 활용될 수 있습니다.
        </div>
      </section>
      <section id="section4">
        <div className={styles.sectionLeft4}></div>
        <div className={styles.sectionRight}>
          윈터 장미(Winter Rose)는 겨울철에 피어나는 특별한 종류의 장미로,
          <br />
          겨울의 추운 날씨에도 꽃을 피우는 점이 특징입니다. 이 꽃은 주로 흰색
          <br />
          또는 연한 분홍색의 꽃을 가지고 있으며, 잎이 비교적 작고 둥글며 광택이
          <br />
          있습니다. 아름다운 꽃잎은 겨울의 풍경에 더욱 빛을 더해줍니다.
        </div>
      </section>
    </main>
  );
};

export default PortCont;
