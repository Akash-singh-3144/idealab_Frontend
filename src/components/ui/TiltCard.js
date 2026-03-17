"use client";

import React from 'react';
import Tilt from 'react-parallax-tilt';

/**
 * Reusable Tilt Card wrapper using react-parallax-tilt.
 * Provides a premium 3D tilt effect on hover.
 */
export default function TiltCard({ 
  children, 
  className = "", 
  tiltMaxAngleX = 12, 
  tiltMaxAngleY = 12, 
  perspective = 1000, 
  scale = 1.02, 
  transitionSpeed = 1500,
  gyroscope = true,
  glareEnable = true,
  glareMaxOpacity = 0.1,
  glareColor = "#ffffff",
  glarePosition = "all",
  glareBorderRadius = "20px"
}) {
  return (
    <Tilt
      className={className}
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      perspective={perspective}
      scale={scale}
      transitionSpeed={transitionSpeed}
      gyroscope={gyroscope}
      glareEnable={glareEnable}
      glareMaxOpacity={glareMaxOpacity}
      glareColor={glareColor}
      glarePosition={glarePosition}
      glareBorderRadius={glareBorderRadius}
    >
      {children}
    </Tilt>
  );
}
