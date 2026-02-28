'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import data from '../../../data/portfolios/works1';

function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const swiperOptions = {
    modules: [Navigation, Autoplay],
    speed: 700,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: '.swiper-arrow-control .swiper-button-next',
      prevEl: '.swiper-arrow-control .swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      640: { slidesPerView: 3, spaceBetween: 12 },
      768: { slidesPerView: 4, spaceBetween: 14 },
      1024: { slidesPerView: 5, spaceBetween: 14 },
      1280: { slidesPerView: 6, spaceBetween: 16 },
    },
  };

  return (
    <section className="portfolio-carousel section-padding" data-scroll-index="3">
      <style>{`
        .portfolio-carousel {
          position: relative;
          font-family: inherit;
        }

        /* ──────────────── HEADER ──────────────── */
        .portfolio-carousel .sec-head {
          margin-bottom: 60px;
        }
        .portfolio-carousel .sub-title {
          font-family: inherit;
          font-size: 0.7rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.55;
          margin-bottom: 18px;
        }
        .portfolio-carousel .bord {
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .portfolio-carousel h2 {
          flex: 1;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          line-height: 1.15;
          margin: 0;
          letter-spacing: -0.02em;
          font-family: inherit;
        }
        .portfolio-carousel h2 span {
          font-weight: 300;
          opacity: 0.45;
        }

        /* ──────────────── NAV ARROWS ──────────────── */
        .swiper-arrow-control {
          display: flex;
          gap: 10px;
        }
        .swiper-arrow-control > div {
          width: 38px;
          height: 38px;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.25s ease;
          background: rgba(255,255,255,0.03);
        }
        .swiper-arrow-control > div:hover {
          border-color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.08);
          transform: scale(1.12);
        }

        /* ──────────────── CAROUSEL ITEMS (small) ──────────────── */
        .carousel-item-small {
          cursor: pointer;
          position: relative;
        }
        .carousel-item-small .img-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          aspect-ratio: 1 / 1;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .carousel-item-small .img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.34,1.4,0.64,1);
          display: block;
        }
        .carousel-item-small:hover .img-wrap img {
          transform: scale(1.12);
        }
        .carousel-item-small .img-wrap .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, transparent 40%, rgba(0,0,0,0.7) 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          align-items: flex-end;
          padding: 10px;
          border-radius: 8px;
        }
        .carousel-item-small:hover .img-wrap .overlay {
          opacity: 1;
        }
        .carousel-item-small .overlay-link {
          width: 26px;
          height: 26px;
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 0.7rem;
          color: white;
          margin-left: auto;
          background: rgba(255,255,255,0.1);
          transition: background 0.2s;
        }
        .carousel-item-small .overlay-link:hover {
          background: rgba(255,255,255,0.25);
        }
        .carousel-item-small .label {
          margin-top: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          opacity: 0.85;
          transition: opacity 0.2s;
        }
        .carousel-item-small:hover .label {
          opacity: 1;
        }
        .carousel-item-small .tag {
          font-family: inherit;
          font-size: 0.6rem;
          opacity: 0.4;
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ──────────────── DIVIDER ──────────────── */
        .section-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 70px 0 50px;
        }
        .section-divider span {
          font-family: inherit;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.35;
          white-space: nowrap;
        }
        .section-divider::before,
        .section-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }

        /* ──────────────── STATIC GRID ──────────────── */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }

        @media (min-width: 1200px) {
          .portfolio-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }
        @media (min-width: 900px) and (max-width: 1199px) {
          .portfolio-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media (min-width: 600px) and (max-width: 899px) {
          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .grid-card {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.34,1.4,0.64,1),
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
        }
        .grid-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.07);
        }

        /* Featured first card: twice as wide */
        .grid-card.featured {
          grid-column: span 2;
          grid-row: span 2;
        }
        @media (max-width: 599px) {
          .grid-card.featured { grid-column: span 1; grid-row: span 1; }
        }

        .grid-card .card-img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.34,1.2,0.64,1);
        }
        .grid-card.featured .card-img {
          aspect-ratio: unset;
          height: 100%;
          position: absolute;
          inset: 0;
        }
        .grid-card.featured {
          min-height: 300px;
        }

        .grid-card:hover .card-img {
          transform: scale(1.07);
        }

        .grid-card .card-info {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 14px;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .grid-card:hover .card-info {
          opacity: 1;
          transform: translateY(0);
        }
        .grid-card .card-num {
          font-family: inherit;
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          opacity: 0.5;
          margin-bottom: 4px;
        }
        .grid-card .card-title {
          font-size: 0.82rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 0 0 8px;
          letter-spacing: 0.01em;
        }
        .grid-card.featured .card-title {
          font-size: 1.1rem;
        }
        .grid-card .card-subtitle {
          font-family: inherit;
          font-size: 0.6rem;
          opacity: 0.5;
          margin: 0 0 10px;
        }
        .grid-card .card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          color: inherit;
          border-bottom: 1px solid rgba(255,255,255,0.25);
          padding-bottom: 2px;
          width: fit-content;
          transition: border-color 0.2s;
        }
        .grid-card .card-link:hover {
          border-color: white;
        }

        /* Index badge top-right */
        .grid-card .badge {
          position: absolute;
          top: 10px;
          right: 10px;
          font-family: inherit;
          font-size: 0.6rem;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          padding: 3px 8px;
          backdrop-filter: blur(6px);
          letter-spacing: 0.05em;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .grid-card:hover .badge {
          opacity: 1;
        }
      `}</style>

      <div className="container">
        {/* Header */}
        <div className="sec-head">
          <h6 className="sub-title main-color">My Portfolio</h6>
          <div className="bord">
            <h2>
              Selected <span>Works</span>
            </h2>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">←</div>
                <div className="swiper-button-next">→</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Carousel (5–6 per row, small cards) ── */}
        <Swiper
          id="content-carousel-container-unq-work"
          className="swiper-container"
          {...swiperOptions}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="carousel-item-small">
                <div className="img-wrap">
                  <img src={item.img} alt={item.title} />
                  <div className="overlay">
                    <a href={item.link} className="overlay-link" target="_blank" rel="noreferrer">↗</a>
                  </div>
                </div>
                <div className="label">{item.title}</div>
                <div className="tag">{item.subTitle}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ── Divider ── */}
        <div className="section-divider">
          <span>All Projects</span>
        </div>

        {/* ── Static Grid ── */}
        <div className="portfolio-grid">
          {data.map((item, i) => (
            <div
              key={i}
              className={`grid-card${i === 0 ? ' featured' : ''}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={item.img} alt={item.title} className="card-img" />
              <div className="badge">#{String(i + 1).padStart(2, '0')}</div>
              <div className="card-info">
                <div className="card-num">
                  {String(i + 1).padStart(2, '0')} / {String(data.length).padStart(2, '0')}
                </div>
                <h5 className="card-title">{item.title}</h5>
                {item.subTitle && <p className="card-subtitle">{item.subTitle}</p>}
                <a href={item.link} className="card-link" target="_blank" rel="noreferrer">
                  View Project ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;