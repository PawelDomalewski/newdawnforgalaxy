export const normalizeImageSrc = (src) => {
  if (!src) return '';
  if (src.startsWith('http')) return src;
  return `${window.location.origin}${src}`;
};

export const extractImagesFromSession = (session) => {
  if (!session) return [];

  const images = [];

  if (session.image) {
    images.push(session.image);
  }

  if (session.fullContent) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = session.fullContent;

    const contentImages = Array.from(tempDiv.getElementsByTagName('img'));

    contentImages.forEach((img) => {
      if (img.src && !images.includes(img.src)) {
        images.push(img.src);
      }
    });
  }

  return images;
};

export const addImageCursorStyles = (container) => {
  if (!container) return;

  const images = container.getElementsByTagName('img');

  for (let i = 0; i < images.length; i++) {
    images[i].style.cursor = 'pointer';
  }
};