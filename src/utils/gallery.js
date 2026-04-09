export const getNextGalleryIndex = (currentIndex, total) => {
  if (total === 0) return 0;
  return (currentIndex + 1) % total;
};

export const getPrevGalleryIndex = (currentIndex, total) => {
  if (total === 0) return 0;
  return (currentIndex - 1 + total) % total;
};

export const clampZoom = (value, min = 0.5, max = 3) =>
  Math.max(min, Math.min(max, value));