"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import styles from "./Hero.module.css";

/**
 * Throttle function to limit how often a function can be called
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} - The throttled function
 */
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Debounce function to delay function execution until after a period of inactivity
 * @param {Function} func - The function to debounce
 * @param {number} wait - The wait time in milliseconds
 * @returns {Function} - The debounced function
 */
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

/**
 * Video component that plays video smoothly based on scroll behavior
 * @returns {JSX.Element} The Video component
 */
function Hero() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const lastScrollTop = useRef(0);
  const scrollSpeedRef = useRef(0);
  const frameRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);

  // Smoothly handle video playback state
  const updateVideoPlayback = useCallback(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isVisible && isScrolling) {
      // Adjust playback rate based on scroll speed for smoother experience
      const speed = Math.min(Math.max(scrollSpeedRef.current / 10, 0.75), 2);
      videoElement.playbackRate = speed;

      if (videoElement.paused) {
        videoElement.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }

      if (!hasInteracted) {
        setHasInteracted(true);
      }
    } else if (!videoElement.paused) {
      // Gradually slow down the video instead of abruptly pausing
      const slowDownInterval = setInterval(() => {
        if (videoElement.playbackRate > 0.2) {
          videoElement.playbackRate -= 0.1;
        } else {
          videoElement.pause();
          clearInterval(slowDownInterval);
        }
      }, 50);

      // Clear interval after a short time to prevent memory leaks
      setTimeout(() => clearInterval(slowDownInterval), 500);
    }
  }, [isVisible, isScrolling, hasInteracted]);

  // Effect for intersection observer
  useEffect(() => {
    const videoElement = videoRef.current;
    const containerElement = containerRef.current;

    if (!videoElement || !containerElement) return;

    // Ensure video is initially paused
    videoElement.pause();

    // Set up Intersection Observer with more granular thresholds
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);

        // Hide indicator after video has been visible for a while
        if (entry.isIntersecting && hasInteracted) {
          setTimeout(() => setShowIndicator(false), 2000);
        } else if (!entry.isIntersecting) {
          setShowIndicator(true);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "0px 0px 0px 0px",
      }
    );

    observer.observe(containerElement);

    return () => {
      observer.disconnect();
    };
  }, [hasInteracted]);

  // Effect for scroll detection and handling
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Animation frame based scroll speed calculation for smoother performance
    const calculateScrollSpeed = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      scrollSpeedRef.current = Math.abs(
        currentScrollTop - lastScrollTop.current
      );
      lastScrollTop.current = currentScrollTop;

      frameRef.current = requestAnimationFrame(calculateScrollSpeed);
    };

    frameRef.current = requestAnimationFrame(calculateScrollSpeed);

    // Throttled scroll handler to detect active scrolling
    const handleScroll = throttle(() => {
      if (!isScrolling) {
        setIsScrolling(true);
      }

      // Use debounced function to detect when scrolling stops
      debouncedScrollEnd();
    }, 50);

    // Debounced function to detect when scrolling stops
    const debouncedScrollEnd = debounce(() => {
      setIsScrolling(false);
    }, 200);

    window.addEventListener("scroll", handleScroll);

    // Update video playback when visibility or scrolling state changes
    updateVideoPlayback();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameRef.current);
    };
  }, [isVisible, isScrolling, updateVideoPlayback]);

  // Effect to update video playback when states change
  useEffect(() => {
    updateVideoPlayback();
  }, [isVisible, isScrolling, updateVideoPlayback]);

  return (
    <figure className={styles.videoContainer} ref={containerRef}>
      <video
        ref={videoRef}
        className={styles.video}
        muted
        playsInline
        loop
        preload="auto"
      >
        <source
          src="public\aerial-video-of-the-sunrise-in-the-dolomites-mount-2023-11-27-05-26-37-utc.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {isVisible && showIndicator && !isScrolling && (
        <div
          className={`${styles.scrollIndicator} ${
            hasInteracted ? styles.fadeOut : styles.pulse
          }`}
        >
          <span>Scroll to play</span>
        </div>
      )}
    </figure>
  );
}

export default Hero;
