import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i className="bi bi-arrow-left-circle" onClick={goForward} />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i className="bi bi-arrow-right-circle" onClick={goForward} />
      </div>
    </div>
  );
}

export default Carousel;
