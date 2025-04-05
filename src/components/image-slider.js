import slide1 from "../IMG_3399.HEIC";
import slide2 from "../slide2.jpg";
import slide3 from "../slide3.jpg";
import slide4 from "../slide4.jpg";

export default function imageSlider() {
  const slides = [slide1, slide2, slide3, slide4];
  return (
    <section className="slider-section">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} className="slide-img" />
          </div>
        ))}
      </div>
    </section>
  );
}
