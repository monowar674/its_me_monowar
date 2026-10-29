import "./Lightfall.css";

function Lightfall({
  colors = ["#A855F7", "#5227FF", "#C084FC"],
  backgroundColor = "#f5124b",
  speed = 0.28,
  streakCount = 10,
  streakWidth = 10,
  streakLength = 1.5,
  glow = 1,
  density = 0.35,
  twinkle = 0.8,
  zoom = 3,
  backgroundGlow = 0.25,
  opacity = 1,
  mouseInteraction = false,
}) {
  const safeColors =
    colors.length >= 3
      ? colors
      : [
          "#A855F7",
          "#5227FF",
          "#C084FC",
        ];

  const streaks = Array.from(
    { length: 18 },
    (_, index) => index
  );

  return (
    <div
      className="lightfall"
      style={{
        "--lightfall-bg": backgroundColor,
        "--lightfall-speed": `${Math.max(
          0.12,
          speed
        )}s`,
        "--lightfall-opacity": opacity,
        "--lightfall-glow": glow,
        "--lightfall-density": density,
        "--lightfall-twinkle": twinkle,
        "--lightfall-zoom": zoom,
        "--lightfall-background-glow":
          backgroundGlow,
        "--lightfall-streak-width":
          `${Math.max(0.5, streakWidth)}px`,
        "--lightfall-streak-length":
          `${Math.max(0.3, streakLength)}`,
      }}
      data-mouse-interaction={
        mouseInteraction
      }
    >
      {/* Background */}
      <div className="lightfall-background" />

      {/* Main ambient glow */}
      <div
        className="lightfall-glow lightfall-glow-one"
        style={{
          background: safeColors[0],
        }}
      />

      <div
        className="lightfall-glow lightfall-glow-two"
        style={{
          background: safeColors[1],
        }}
      />

      <div
        className="lightfall-glow lightfall-glow-three"
        style={{
          background: safeColors[2],
        }}
      />

      {/* Light streaks */}
      <div className="lightfall-streaks">
        {streaks.map((index) => {
          const color =
            safeColors[
              index % safeColors.length
            ];

          return (
            <span
              key={index}
              className="lightfall-streak"
              style={{
                "--streak-color": color,
                "--streak-index": index,
                "--streak-delay": `${
                  index * 0.65
                }s`,
                "--streak-duration": `${
                  6 +
                  (index % 5) * 1.2
                }s`,
                "--streak-left": `${
                  8 +
                  (index * 17) % 88
                }%`,
                "--streak-height": `${
                  180 +
                  (index % 6) * 70
                }px`,
              }}
            />
          );
        })}
      </div>

      {/* Subtle center light */}
      <div
        className="lightfall-center-glow"
        style={{
          background: safeColors[0],
        }}
      />

      {/* Fine atmospheric layer */}
      <div className="lightfall-noise" />
    </div>
  );
}

export default Lightfall;