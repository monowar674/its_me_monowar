import {
  Code2,
  Megaphone,
  Palette,
  Smartphone,
  Camera,
  BarChart3,
} from "lucide-react";

import "./ServiceOrbit.css";

function ServiceOrbit({ logo = "/logo.png" }) {
  const leftServices = [
    {
      icon: Code2,
      label: "Web Development",
      color: "#A855F7",
    },
    {
      icon: Megaphone,
      label: "Digital Marketing",
      color: "#C084FC",
    },
    {
      icon: Camera,
      label: "Creative",
      color: "#8B5CF6",
    },
  ];

  const rightServices = [
    {
      icon: Palette,
      label: "Social Media",
      color: "#C084FC",
    },
    {
      icon: Smartphone,
      label: "Content",
      color: "#A855F7",
    },
    {
      icon: BarChart3,
      label: "Growth",
      color: "#7C3AED",
    },
  ];

  return (
    <div className="service-orbit">
      {/* Background glow */}
      <div className="orbit-background-glow" />

      {/* LEFT ORBIT */}
      <div className="orbit orbit-left">
        <div className="orbit-ring" />

        {leftServices.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={service.label}
              className={`orbit-item orbit-left-item orbit-left-${index}`}
            >
              <div
                className="orbit-icon"
                style={{
                  "--icon-color": service.color,
                }}
              >
                <Icon size={21} strokeWidth={1.8} />
              </div>

              <span>{service.label}</span>
            </div>
          );
        })}
      </div>

      {/* RIGHT ORBIT */}
      <div className="orbit orbit-right">
        <div className="orbit-ring" />

        {rightServices.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={service.label}
              className={`orbit-item orbit-right-item orbit-right-${index}`}
            >
              <div
                className="orbit-icon"
                style={{
                  "--icon-color": service.color,
                }}
              >
                <Icon size={21} strokeWidth={1.8} />
              </div>

              <span>{service.label}</span>
            </div>
          );
        })}
      </div>

      {/* CENTER LOGO */}
      <div className="orbit-logo">
        <div className="orbit-logo-glow" />

        <div className="orbit-logo-container">
          <img
            src={logo}
            alt="Portfolio Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceOrbit;