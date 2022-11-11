import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const bannerImages = [
  {
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg",
  },
  {
    img: "https://www.intowindows.com/wp-content/uploads/2020/07/amazon-prime-video-download-location_thumb.png",
  },
  {
    img: "https://oneroomwithaview.com/wp-content/uploads/2014/07/marvel-logo-wallpaper-1200x520.jpg",
  },
  {
    img: "https://mythbank.com/wp-content/uploads/2019/10/homepagebanner-dc.jpg",
  },
];

const Carousel = ({ caruselImages }) => {
  const responsive = {
    0: { items: 1 },
    512: { items: 1 },
    1024: { items: 1 },
  };

  const items = caruselImages?.map(({ img }, index) => (
    <div key={index} style={{ height: "380px" }} className="bannerItem">
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
