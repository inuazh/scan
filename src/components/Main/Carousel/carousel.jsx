import React from "react";
import "./carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clockpic from "../../../data/images/clockpic.svg";
import search from "../../../data/images/search.svg";
import safety from "../../../data/images/safety.svg";
import smile_pic from "../../../data/images/smile_pic.svg";



const PrevArrow = (props) => (
  <div {...props} className="slick-arrow slick-prev">
    Previous
  </div>
);

const NextArrow = (props) => (
  <div {...props} className="slick-arrow slick-next">
    Next
  </div>
);

export default function Slider_Main() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  const slider = [
    {
      text: "Высокая и оперативная скорость обработки заявки",
      img: clockpic,
    },

    {
      text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
      img: search,
    },

    {
      text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
      img: safety,
    },

    {
      text: "99,99% процентов довольных клиентов, станьте одним из них!",
      img: smile_pic,
    },
  ];

  return (
    <Slider {...settings}>
      {slider.map((card, id) => (
        <div className="slider-item" key={id}>
          <img className="slider-img" src={card.img} />
          <p className="slider-info">{card.text}</p>
        </div>
      ))}
    </Slider>
  );
}
