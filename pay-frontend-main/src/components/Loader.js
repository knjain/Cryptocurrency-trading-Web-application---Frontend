import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FiLoader } from "react-icons/fi";
/*const Loader = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto flex items-center justify-center">
        <FiLoader className="animate-spin text-blue-500" size={24} />
        <span className="ml-2">Loading...</span>
      </div>
    </div>
  );
};
*/

const Loader = () => {
  const mainSVGRef = useRef(null);
  const ellRefs = useRef([]);
  const colorArr = ["#18D4A7", "#28DFBE", "#12E55A", "#28DFBE"];

  // const colorArr = ["#D946EF", "#C5B1FE", "#312E81", "#312E81"];
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.config({ trialWarn: false });

    const mainSVG = mainSVGRef.current;
    const allEll = ellRefs.current;

    let colorInterp = gsap.utils.interpolate(colorArr);

    gsap.set(mainSVG, {
      visibility: "visible",
    });

    function animate(el, count) {
      let tl = gsap.timeline({
        defaults: {
          ease: "sine.inOut",
        },
        repeat: -1,
      });

      gsap.set(el, {
        opacity: 1 - count / allEll.length,
        stroke: colorInterp(count / allEll.length),
      });

      tl.to(el, {
        attr: {
          ry: `-=${count * 2.3}`,
          rx: `+=${count * 1.4}`,
        },
        ease: "sine.in",
      })
        .to(el, {
          attr: {
            ry: `+=${count * 2.3}`,
            rx: `-=${count * 1.4}`,
          },
          ease: "sine",
        })
        .to(
          el,
          {
            duration: 1,
            rotation: -180,
            transformOrigin: "50% 50%",
          },
          0
        )
        .timeScale(0.5);
    }

    allEll.forEach((c, i) => {
      gsap.delayedCall(i / (allEll.length - 1), animate, [c, i + 1]);
    });

    gsap.to("#aiGrad", {
      duration: 4,
      delay: 0.75,
      attr: {
        x1: "-=300",
        x2: "-=300",
      },
      scale: 1.2,
      transformOrigin: "50% 50%",
      repeat: -1,
      ease: "none",
    });

    gsap.to("#ai", {
      duration: 1,
      scale: 1.1,
      transformOrigin: "50% 50%",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.set(logoRef.current, {
      opacity: 0,
    });
  }, []);
  function animateLogo() {
    let tl = gsap.timeline({
      defaults: {
        ease: "sine.inOut",
      },
      repeat: -1,
    });

    tl.fromTo(
      logoRef.current,
      {
        opacity: 0,
        duration: 1,
      },
      {
        opacity: 1,
        duration: 1,
      }
    )
      .to(logoRef.current, {
        opacity: 0,
        duration: 1,
      })
      .timeScale(0.8);
  }

  animateLogo();

  return (
    <div className="w-screen h-screen bg-[#0a090d] flex items-center justify-center">
      <svg
        ref={mainSVGRef}
        id="mainSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        className="w-full h-full"
      >
        {/* inner lines */}
        {/* <defs>
          <linearGradient
            id="aiGrad"
            x1="513.98"
            y1="290"
            x2="479.72"
            y2="320"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#000" stopOpacity="0" />
            <stop offset=".15" stopColor="#EF476F" />
            <stop offset=".4" stopColor="#359EEE" />
            <stop offset=".6" stopColor="#03CEA4" />
            <stop offset=".78" stopColor="#FFC43D" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </linearGradient>
          // extra dded by 
          <linearGradient id="logoGrad" gradientUnits="userSpaceOnUse">
  <stop offset="0%" stopColor="#E8ADFF" />
  <stop offset="50%" stopColor="#C5B1FE" />
  <stop offset="100%" stopColor="#ACB4FE" />
</linearGradient>

        </defs> */}
        {/* outer ellipse */}
        {Array.from({ length: 30 }).map((_, index) => (
          <ellipse
            ref={(el) => (ellRefs.current[index] = el)}
            key={index}
            className="ell"
            cx="400"
            cy="300"
            rx="80"
            ry="80"
          />
        ))}

        <path
          id="ai"
          opacity="0.85"
          d="m417.17,323.85h-34.34c-3.69,0-6.67-2.99-6.67-6.67v-34.34c0-3.69,2.99-6.67,6.67-6.67h34.34c-3.69,0-6.67-2.99-6.67-6.67v-34.34c0-3.69,2.99-6.67,6.67-6.67Zm-5.25-12.92v-21.85c0-.55-.45-1-1-1h-21.85c-.55,0-1,.45-1,1v21.85c0,.55.45,1,1,1h-21.85c-.55,0-1,.45-1,1v21.85c0,.55.45,1,1,1h21.85c.55,0,1-.45,1-1v21.85c0,.55.45,1,1,1h21.85c.55,0,1-.45-1-1Zm23.08-16.29h-11.15m-47.69,0h-11.15m70,10.73h-11.15m-47.69,0h-11.15m40.37,29.63v-11.15m0-47.69v-11.15m-10.73,70v-11.15m0-47.69v-11.15"
          stroke="url(#aiGrad)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        {/* actual image */}
        <image
          ref={(el) => (logoRef.current = el)}
          href="/images/navlogo.png"
          x="350"
          y="250"
          width="100"
          height="100"
        />
      </svg>
    </div>
  );
};

export default Loader;
