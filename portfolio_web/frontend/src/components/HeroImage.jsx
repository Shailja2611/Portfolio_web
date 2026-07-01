import React, { useEffect, useState, useId } from "react";
import "./HeroImage.css";

/**
 * HeroImage
 * ---------
 * A profile image that "tunes in" like an old CRT television when it
 * first mounts: black screen -> static burst -> heavy blur + horizontal
 * tear -> brief chromatic aberration -> rolling scanlines + brightness
 * flicker -> gradual sharpening -> perfectly clear final image.
 *
 * Everything is driven by a single CSS animation timeline (no JS loops,
 * no canvas). React's only job is to flip one class on mount so the
 * animation starts from a clean, predictable state and never re-fires.
 *
 * Usage:
 *   <HeroImage src="/images/profile.jpg" alt="Jane Doe" />
 *
 * Drop it inside any sized container (the "image card" in your layout) -
 * it fills 100% of its parent's width/height, so sizing/aspect ratio is
 * controlled by the wrapper, which keeps it responsive.
 */
export default function HeroImage({ src, alt = "Profile photo", className = "" }) {
  // Starts false so the very first paint is the "black screen" state.
  // Flipping to true on mount (via rAF, after layout) kicks off every
  // CSS animation in HeroImage.css at once, in sync.
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setPlay(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Unique id so multiple <HeroImage /> instances on the same page don't
  // fight over the same SVG filter ids.
  const uid = useId().replace(/:/g, "");
  const redFilterId = `crt-red-${uid}`;
  const blueFilterId = `crt-blue-${uid}`;

  return (
    <div className={`crt-frame ${play ? "crt-frame--play" : ""} ${className}`}>
      {/*
        Hidden SVG filter definitions used to pull a true red-only and
        blue-only channel out of the photo (feColorMatrix), rather than
        faking the color split with a tinted overlay. Width/height 0 so
        it takes up no layout space - only its <filter> defs are used,
        referenced via `filter: url(#id)` in HeroImage.css.
      */}
      <svg className="crt-frame__defs" aria-hidden="true" focusable="false">
        <defs>
          <filter id={redFilterId} colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
            />
          </filter>
          <filter id={blueFilterId} colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

      {/* 1. Black screen the set "powers on" from. Fades out fast. */}
      <div className="crt-frame__black" />

      {/*
        4. Chromatic aberration ghosts. These are decorative duplicates
        of the same photo, isolated to their red/blue channel via the
        SVG filters above, then nudged apart with `transform` and
        recombined with `mix-blend-mode: screen`. Only visible for the
        first ~500ms (see crt-rgb-red / crt-rgb-blue keyframes).
      */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="crt-frame__img crt-frame__ghost crt-frame__ghost--red"
        style={{ filter: `url(#${redFilterId})` }}
      />
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="crt-frame__img crt-frame__ghost crt-frame__ghost--blue"
        style={{ filter: `url(#${blueFilterId})` }}
      />

      {/* The real, accessible image. Carries the blur/sharpen + slice-distortion animation. */}
      <img src={src} alt={alt} className="crt-frame__img crt-frame__img--main" />

      {/* 2. Static / noise burst, fades out as the picture locks in. */}
      <div className="crt-frame__noise" />

      {/* 5. Rolling scanlines. */}
      <div className="crt-frame__scanlines" />

      {/* 6. Whole-screen brightness flicker, like an unstable tube warming up. */}
      <div className="crt-frame__flicker" />
    </div>
  );
}