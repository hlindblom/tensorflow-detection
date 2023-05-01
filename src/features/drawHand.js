const fingerLookupIndices = [
  [0, 1, 2, 3, 4],
  [0, 5, 6, 7, 8],
  [0, 9, 10, 11, 12],
  [0, 13, 14, 15, 16],
  [0, 17, 18, 19, 20],
];

export const drawHand = (hands, ctx) => {
  ctx.strokeStyle = 'cyan';
  if (hands.length > 0) {
    hands.forEach((hand) => {
      const keypoints = hand.keypoints;
      fingerLookupIndices.forEach((finger) => {
        for (let i = 0; i < finger.length - 1; i++) {
          ctx.moveTo(keypoints[finger[i]]['x'], keypoints[finger[i]]['y']);
          ctx.lineTo(
            keypoints[finger[i + 1]]['x'],
            keypoints[finger[i + 1]]['y']
          );
        }
        ctx.stroke();
      });
    });
  }
};
