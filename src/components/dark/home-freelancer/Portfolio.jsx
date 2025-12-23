'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import data from '../../../data/portfolios/works1';

function Portfolio() {
  const swiperOptions = {
    modules: [Navigation, Autoplay],
    speed: 600,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: '.swiper-arrow-control .swiper-button-next',
      prevEl: '.swiper-arrow-control .swiper-button-prev',
    },
    breakpoints: {
      640: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  };

  return (
    <section
      className="portfolio-carousel section-padding"
      data-scroll-index="3"
    >
      <style>{`
        .portfolio-carousel {
          position: relative;
        }

        .portfolio-carousel .sec-head {
          margin-bottom: 80px;
        }

        .portfolio-carousel .sub-title {
          margin-bottom: 25px;
        }

        .portfolio-carousel .bord {
          padding-top: 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
        }

        .portfolio-carousel h2 {
          flex: 1;
        }

        .portfolio-carousel h2 span {
          font-weight: 200;
        }

        .swiper-arrow-control {
          display: flex;
          gap: 15px;
          cursor: pointer;
        }

        .swiper-arrow-control > div {
          width: 45px;
          height: 45px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
          color: inherit;
        }

        .swiper-arrow-control > div:hover {
          border-color: currentColor;
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }

        .work-swiper-center {
          position: relative;
        }

        .work-swiper-center .swiper-container {
          overflow: hidden;
        }

        .work-swiper-center .swiper-slide {
          height: auto;
        }

        .item {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .item .img {
          position: relative;
          overflow: hidden;
          border-radius: 6px;
          aspect-ratio: 1 / 1;
          margin-bottom: 0;
          background: rgba(255, 255, 255, 0.05);
        }

        .item .img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform;
        }

        .item:hover .img img {
          transform: scale(1.08) rotate(1deg);
        }

        .item .cont {
          display: flex;
          align-items: center;
          margin-top: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          flex-direction: column;
          gap: 8px;
        }

        .item:hover .cont {
          border-bottom-color: currentColor;
        }

        .item .cont h5 {
          margin: 0;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          text-align: center;
        }

        .item:hover .cont h5 {
          letter-spacing: 0.3px;
        }

        .item .cont p {
          margin: 0;
          font-size: 0.75rem;
          opacity: 0.6;
          transition: opacity 0.3s ease;
          text-align: center;
          display: none;
        }

        .item .cont .ml-auto {
          flex-shrink: 0;
          align-self: center;
          margin-top: 5px;
        }

        .item .rmore {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          background: rgba(255, 255, 255, 0.02);
        }

        .item:hover .rmore {
          border-color: currentColor;
          background: rgba(255, 255, 255, 0.08);
          transform: translate(3px, -3px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.1);
        }

        .item .rmore .icon-img-20 {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .item:hover .rmore .icon-img-20 {
          transform: translate(2px, -2px);
        }

        .item {
          perspective: 1000px;
          cursor: pointer;
        }

        .item .img {
          position: relative;
        }

        .item .img::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.15) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          border-radius: 6px;
          z-index: 1;
        }

        .item:hover .img::before {
          opacity: 1;
        }
      `}</style>

      <div className="container">
        <div className="sec-head">
          <h6 className="sub-title main-color">My Portfolio</h6>
          <div className="bord">
            <h2>
              My <span>Projects (Hover to look after ;))</span>
            </h2>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left">←</span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work-swiper-center">
          <Swiper
            id="content-carousel-container-unq-work"
            className="swiper-container"
            data-swiper="container"
            {...swiperOptions}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="item">
                  <div className="img object-fit">
                    <img src={item.img} alt={item.title} className="h-100" />
                  </div>
                  <div className="cont d-flex align-items-center">
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.subTitle}</p>
                    </div>
                    <div className="ml-auto">
                      <a href={item.link} className="rmore">
                        <img
                          src="/dark/assets/imgs/arrow-right.png"
                          alt="visit"
                          className="icon-img-20"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;