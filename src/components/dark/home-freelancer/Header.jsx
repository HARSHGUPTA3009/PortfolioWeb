/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unused-vars */
'use client';
import { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';

function Header() {

  const [locked, setLocked] = useState(true);

  useLayoutEffect(() => {

    // lock scroll initially
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline();

    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');

    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    // Scroll on first mouse movement
    const handleMouseMove = () => {

      const section = document.getElementById('portfolio-section');

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      // unlock scrolling after auto scroll
      setTimeout(() => {
        document.body.style.overflow = 'auto';
        setLocked(false);
      }, 1200);

      // remove listener after first move
      window.removeEventListener('mousemove', handleMouseMove);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      tl.kill();
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.overflow = 'auto';
    };

  }, []);

  return (
    <div className="header freelancer" data-scroll-index="0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="img">
              <img src="/dark/assets/imgs/bgremove.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="caption">
        <h1 className="up stroke"></h1>

        <h1 className="down">
          <span>I&#39;m a </span> <span>Developer</span>
        </h1>
      </div>
    </div>
  );
}

export default Header;