import React, { useState, useEffect } from "react";
import styles from "./VirtualProductPhotography.module.css";

function Title() {
  const [, setScrollPosition] = useState(0);
  const [currentGradient, setCurrentGradient] = useState(0);

  // Array of gradient color pairs with high contrast
  const gradientColors = [
    ["#433E98", "#643B9B"], // Purple to pink
    ["#643B9B", "#813599"], // Teal to blue
    ["#813599", "#9C2C93"], // Red to yellow
    ["#9C2C93", "#B4228A"], // Green to blue
    ["#B4228A", "#C8187D"], // Orange to magenta
    ["#C8187D", "#E5245C"], // Orange to magenta
    ["#E5245C", "#ED3749"], // Orange to magenta
    ["#ED3749", "#F04C33"], // Orange to magenta
    ["#E5245C", "#ED3749"], // Orange to magenta
    ["#C8187D", "#E5245C"], // Orange to magenta
    ["#B4228A", "#C8187D"], // Orange to magenta
    ["#9C2C93", "#B4228A"], // Orange to magenta
    ["#813599", "#9C2C93"], // Orange to magenta
    ["#643B9B", "#813599"], // Orange to magenta
  ];

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Update gradient index based on scroll position
      const scrollFactor = Math.floor(
        (position % (gradientColors.length * 100)) / 100
      );
      const colorIndex = scrollFactor % gradientColors.length;
      setCurrentGradient(colorIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [gradientColors.length]);

  // Get current gradient colors
  const [startColor, endColor] = gradientColors[currentGradient];

  // Create CSS variables for the gradient colors
  const gradientStyle = {
    "--start-color": startColor,
    "--end-color": endColor,
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@600;700&display=swap"
        rel="stylesheet"
      />
      <h1 className={styles.virtualProductTitle} style={gradientStyle}>
        Virtual Product Photography
      </h1>
      <p className={styles.scrollIndicator}></p>
    </>
  );
}

export default Title;
