import React from "react";
import { Carousel } from "antd";

const StronaGlowna = () => {
  return (
    <section class="strona-glowna">
      <h1>Strona Główna</h1>
      <Carousel autoplay className="carousel">
        <div>
          <img src="https://prezentokracja.pl/media/catalog/category/Wroclaw-prezenty-atrakcje_2.jpg" />
        </div>
        <div>
          <img src="https://s3.viva.pl/styl-zycia/dom/wnetrza/wroclaw-512884-GALLERY_BIG.jpg" />
        </div>
        <div>
          <img src="https://ocdn.eu/pulscms-transforms/1/ksTk9kpTURBXy9hZmZmNGU1ODBjZmI5NGI4YTRmZWZlNjIxMTNjMzgzYy5qcGeTlQPNAe4AzRvHzQ-gkwXNAxTNAbyTCaY2MjI0MDAGgaEwAQ/wroclaw.jpg" />
        </div>
        <div>
          <img src="https://go.wroclaw.pl/api/download/img-5bd1e3fe0a18003d75e168ec7c26c998/wroclaw-glowny-1920x1080-100-jpg.jpg" />
        </div>
      </Carousel>
    </section>
  );
};

export default StronaGlowna;
