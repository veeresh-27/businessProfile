import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({ caruselImages }) => {
  const responsive = {
    0: { items: 1 },
    512: { items: 1 },
    1024: { items: 1 },
  };

  const items = caruselImages?.map(({ img }, index) => (
    <div key={index} style={{ height: "480px" }} className="bannerItem">
      <img
        src={img}
        alt="banner"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        onDragStart={handleDragStart}
        className="bannerItem__img"
      />
    </div>
  ));

  return (
    <div>
      {caruselImages.length > 0 ? (
        <AliceCarousel
          autoPlay
          autoPlayInterval={2500}
          responsive={responsive}
          infinite
          disableButtonsControls
          mouseTracking
          items={items}
        />
      ) : (
        <div
          className="noInfo"
          style={{
            color: "#c6c6c6",
            fontSize: "20px",
          }}
        >
          No Info
        </div>
      )}
    </div>
  );
};

export default Carousel;
