///////// NEW STUFF ADDED USE STATE
import React, { useRef, useState, useEffect } from 'react';

import * as tf from '@tensorflow/tfjs';
import * as handPoseDetection from '@tensorflow-models/hand-pose-detection';

import Webcam from 'react-webcam';

import { drawHand } from './drawHand';

export default function Main() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const model = handPoseDetection.SupportedModels.MediaPipeHands;
  const detectorConfig = {
    runtime: 'tfjs', // or 'tfjs'
    modelType: 'lite',
  };

  const runHandpose = async () => {
    const detector = await handPoseDetection.createDetector(
      model,
      detectorConfig
    );

    //  Loop and detect hands
    setInterval(() => {
      detect(detector);
    }, 100);
  };

  const detect = async (detector) => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hands = await detector.estimateHands(video);

      // Draw mesh
      const ctx = canvasRef.current.getContext('2d');
      drawHand(hands, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div
      className="p-0 m-5"
      style={{
        position: 'absolute',
      }}
    >
      <Webcam
        ref={webcamRef}
        style={{
          position: 'absolute',
          borderRadius: '2rem',
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          borderRadius: '2rem',
          boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        }}
      />
    </div>
  );
}
