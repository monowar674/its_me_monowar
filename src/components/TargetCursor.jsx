import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

function TargetCursor({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hoverDuration = 0.2,
  parallaxOn = true,
  cursorColor = "#ffffff",
  cursorColorOnTarget,
}) {
  const cursorRef = useRef(null);
  const cornersRef = useRef([]);
  const dotRef = useRef(null);

  const activeTargetRef = useRef(null);
  const mousePositionRef = useRef({
    x: 0,
    y: 0,
  });

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const hasTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    const isSmallScreen =
      window.innerWidth <= 768;

    return hasTouch || isSmallScreen;
  }, []);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const cursor = cursorRef.current;

    if (!cursor) {
      return;
    }

    const corners = cornersRef.current;

    const targets = Array.from(
      document.querySelectorAll(targetSelector)
    );

    let animationFrame;

    const getTargetPositions = (target) => {
      const rect =
        target.getBoundingClientRect();

      const mouseX =
        mousePositionRef.current.x;

      const mouseY =
        mousePositionRef.current.y;

      const padding = 8;

      return [
        {
          x:
            rect.left -
            padding -
            mouseX,

          y:
            rect.top -
            padding -
            mouseY,
        },

        {
          x:
            rect.right +
            padding -
            mouseX,

          y:
            rect.top -
            padding -
            mouseY,
        },

        {
          x:
            rect.right +
            padding -
            mouseX,

          y:
            rect.bottom +
            padding -
            mouseY,
        },

        {
          x:
            rect.left -
            padding -
            mouseX,

          y:
            rect.bottom +
            padding -
            mouseY,
        },
      ];
    };

    const setDefaultCorners = () => {
      const size = 18;

      const defaultPositions = [
        {
          x: -size,
          y: -size,
        },
        {
          x: size,
          y: -size,
        },
        {
          x: size,
          y: size,
        },
        {
          x: -size,
          y: size,
        },
      ];

      corners.forEach((corner, index) => {
        if (!corner) return;

        gsap.to(corner, {
          x: defaultPositions[index].x,
          y: defaultPositions[index].y,
          duration: hoverDuration,
          ease: "power3.out",
        });
      });
    };

    const moveCursor = (event) => {
      mousePositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.12,
        ease: "power2.out",
      });

      if (activeTargetRef.current) {
        cancelAnimationFrame(animationFrame);

        animationFrame =
          requestAnimationFrame(() => {
            const positions =
              getTargetPositions(
                activeTargetRef.current
              );

            corners.forEach(
              (corner, index) => {
                if (!corner) return;

                gsap.to(corner, {
                  x: positions[index].x,
                  y: positions[index].y,
                  duration: 0.12,
                  ease: "power2.out",
                });
              }
            );
          });
      }
    };

    const enterTarget = (event) => {
      const target = event.currentTarget;

      activeTargetRef.current = target;

      const positions =
        getTargetPositions(target);

      corners.forEach((corner, index) => {
        if (!corner) return;

        gsap.killTweensOf(corner);

        gsap.to(corner, {
          x: positions[index].x,
          y: positions[index].y,
          duration: hoverDuration,
          ease: "power3.out",
        });
      });

      if (cursorColorOnTarget) {
        gsap.to(corners, {
          borderColor:
            cursorColorOnTarget,
          duration: 0.15,
          ease: "power2.out",
        });

        if (dotRef.current) {
          gsap.to(dotRef.current, {
            backgroundColor:
              cursorColorOnTarget,
            duration: 0.15,
            ease: "power2.out",
          });
        }
      }

      gsap.to(cursor, {
        scale: 1.05,
        duration: hoverDuration,
        ease: "power2.out",
      });
    };

    const leaveTarget = () => {
      activeTargetRef.current = null;

      setDefaultCorners();

      gsap.to(cursor, {
        scale: 1,
        duration: hoverDuration,
        ease: "power2.out",
      });

      gsap.to(corners, {
        borderColor: cursorColor,
        duration: 0.15,
      });

      if (dotRef.current) {
        gsap.to(dotRef.current, {
          backgroundColor: cursorColor,
          duration: 0.15,
        });
      }
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.2,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.2,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    window.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    targets.forEach((target) => {
      target.addEventListener(
        "mouseenter",
        enterTarget
      );

      target.addEventListener(
        "mouseleave",
        leaveTarget
      );
    });

    setDefaultCorners();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      window.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      targets.forEach((target) => {
        target.removeEventListener(
          "mouseenter",
          enterTarget
        );

        target.removeEventListener(
          "mouseleave",
          leaveTarget
        );
      });
    };
  }, [
    targetSelector,
    hoverDuration,
    parallaxOn,
    cursorColor,
    cursorColorOnTarget,
    isMobile,
  ]);

  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="target-cursor"
      style={{
        "--cursor-color": cursorColor,
      }}
    >
      <div
        ref={dotRef}
        className="target-cursor-dot"
        style={{
          backgroundColor: cursorColor,
        }}
      />

      <span
        ref={(element) => {
          cornersRef.current[0] =
            element;
        }}
        className="target-cursor-corner corner-top-left"
      />

      <span
        ref={(element) => {
          cornersRef.current[1] =
            element;
        }}
        className="target-cursor-corner corner-top-right"
      />

      <span
        ref={(element) => {
          cornersRef.current[2] =
            element;
        }}
        className="target-cursor-corner corner-bottom-right"
      />

      <span
        ref={(element) => {
          cornersRef.current[3] =
            element;
        }}
        className="target-cursor-corner corner-bottom-left"
      />
    </div>
  );
}

export default TargetCursor;