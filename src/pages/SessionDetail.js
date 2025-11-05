import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { sessions } from '../data/sessions.js';
import './SessionDetail.css';

const SessionDetail = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const session = sessions.find(s => s.id === parseInt(sessionId));
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const contentRef = useRef(null);

    React.useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Zbierz wszystkie zdjęcia z sesji
  useEffect(() => {
    if (!session) return;

    const images = [];
    
    // Dodaj główne zdjęcie sesji
    if (session.image) {
      images.push(session.image);
    }
    
    // Dodaj zdjęcia z fullContent
    if (session.fullContent) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = session.fullContent;
      const contentImages = Array.from(tempDiv.getElementsByTagName('img'));
      contentImages.forEach(img => {
        if (img.src && !images.includes(img.src)) {
          images.push(img.src);
        }
      });
    }
    
    setAllImages(images);
  }, [session]);

  // Dodaj event listeners do zdjęć w fullContent po renderze
  useEffect(() => {
    if (!contentRef.current || !session?.fullContent) return;

    const images = contentRef.current.getElementsByTagName('img');
    
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const src = img.getAttribute('src');
      
      if (src) {
        // Znajdź index tego zdjęcia w allImages
        const imageIndex = allImages.findIndex(imgSrc => {
          // Normalizuj ścieżki do porównania
          const normalizedSrc = src.startsWith('http') ? src : `${window.location.origin}${src}`;
          const normalizedAllSrc = imgSrc.startsWith('http') ? imgSrc : `${window.location.origin}${imgSrc}`;
          return normalizedSrc === normalizedAllSrc;
        });
        
        if (imageIndex !== -1) {
          img.style.cursor = 'pointer';
          img.addEventListener('click', () => handleImageClick(src, imageIndex));
        }
      }
    }

    // Cleanup function
    return () => {
      const images = contentRef.current?.getElementsByTagName('img');
      if (images) {
        for (let img of images) {
          img.replaceWith(img.cloneNode(true)); // Usuwa event listeners
        }
      }
    };
  }, [session?.fullContent, allImages]);

  if (!session) {
    return (
      <div className="session-detail">
        <div className="container">
          <div className="not-found">
            <h1>Sesja nie znaleziona</h1>
            <p>Przepraszamy, ta sesja nie istnieje.</p>
            <Link to="/sesje" className="back-button">
              ← Wróć do wszystkich sesji
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleImageClick = (imageSrc, index = 0) => {
    console.log('Image clicked:', imageSrc, 'Index:', index);
    
    // Normalizuj ścieżkę do porównania
    const normalizedSrc = imageSrc.startsWith('http') ? imageSrc : `${window.location.origin}${imageSrc}`;
    
    const foundIndex = allImages.findIndex(img => {
      const normalizedImg = img.startsWith('http') ? img : `${window.location.origin}${img}`;
      return normalizedImg === normalizedSrc;
    });
    
    const finalIndex = foundIndex !== -1 ? foundIndex : index;
    
    console.log('Found index:', foundIndex, 'Final index:', finalIndex, 'All images:', allImages);
    
    setCurrentImage(imageSrc);
    setCurrentImageIndex(finalIndex);
    setIsImageModalOpen(true);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleCloseModal = () => {
    setIsImageModalOpen(false);
    setCurrentImage('');
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('image-modal-overlay')) {
      handleCloseModal();
    }
  };

  // Nawigacja strzałkami
  const navigateImages = useCallback((direction) => {
    if (allImages.length === 0) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % allImages.length;
    } else {
      newIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    }

    console.log('Navigating to index:', newIndex, 'Image:', allImages[newIndex]);
    
    setCurrentImageIndex(newIndex);
    setCurrentImage(allImages[newIndex]);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  }, [currentImageIndex, allImages]);

  // Obsługa klawiszy
  const handleKeyDown = useCallback((e) => {
    if (!isImageModalOpen) return;

    switch(e.key) {
      case 'Escape':
        handleCloseModal();
        break;
      case 'ArrowLeft':
        navigateImages('prev');
        break;
      case 'ArrowRight':
        navigateImages('next');
        break;
      case '+':
      case '=':
        e.preventDefault();
        setZoomLevel(prev => Math.min(prev + 0.25, 3));
        break;
      case '-':
        e.preventDefault();
        setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
        break;
      case '0':
        e.preventDefault();
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
        break;
      default:
        break;
    }
  }, [isImageModalOpen, navigateImages]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Zoom na zdjęciu
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.01;
    setZoomLevel(prev => {
      const newZoom = prev + delta;
      return Math.max(0.5, Math.min(3, newZoom));
    });
  };

  // Drag do przesuwania przy zoomie
  const handleMouseDown = (e) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || zoomLevel <= 1) return;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Reset zoom i position przy zmianie zdjęcia
  useEffect(() => {
    if (isImageModalOpen) {
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [currentImage, isImageModalOpen]);

  return (
    <div className="session-detail">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Strona główna</Link>
          <span> / </span>
          <Link to="/sesje">Relacje</Link>
          <span> / </span>
          <span>{session.game}</span>
        </nav>

        <article className="session-article">
          <header className="session-header">
            <button onClick={() => navigate(-1)} className="back-button">
              ← Wróć
            </button>
            <h1>{session.game}</h1>
            <div className="session-meta-large">
              <div className="meta-item">
                <span className="meta-label">📅 Data sesji:</span>
                <span className="meta-value">{session.date}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">👥 Gracze:</span>
                <span className="meta-value">{session.players.join(', ')}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">🕓 Czas:</span>
                <span className="meta-value">{session.rating}</span>
              </div>
            </div>
          </header>

          <div className="session-image-large">
            {session.image ? (
              <img 
                src={session.image} 
                alt={`Sesja gry ${session.game}`}
                className="session-image-real-large"
                onClick={() => handleImageClick(session.image, 0)}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <div className="image-placeholder-large">
                🎲 {session.game}
              </div>
            )}
          </div>

          <div className="session-content-detailed">
            <section className="summary-section">
              <h2>Podsumowanie</h2>
              <p className="session-summary">{session.summary}</p>
            </section>

            <section className="full-content-section">
              <h2>Pełny opis sesji</h2>
              <div 
                className="full-content"
                ref={contentRef}
                dangerouslySetInnerHTML={{ __html: session.fullContent || '<p>Pełny opis tej sesji wkrótce się pojawi...</p>' }}
              />
            </section>

            <section className="tags-section">
              <h2>Tagi</h2>
              <div className="session-tags-large">
                {session.tags.map(tag => (
                  <span key={tag} className="tag-large">{tag}</span>
                ))}
              </div>
            </section>
          </div>

          <footer className="session-footer">
            <Link to="/sesje" className="cta-button">
              ← Wróć do wszystkich sesji
            </Link>
          </footer>
        </article>
      </div>

      {/* Modal do powiększonego zdjęcia */}
      {isImageModalOpen && currentImage && (
        <div 
          className="image-modal-overlay"
          onClick={handleModalClick}
        >
          <div className="image-modal-content">
            <button 
              className="image-modal-close"
              onClick={handleCloseModal}
              title="Zamknij (ESC)"
            >
              ×
            </button>

            {/* Nawigacja strzałkami */}
            {allImages.length > 1 && (
              <>
                <button 
                  className="nav-button nav-button-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImages('prev');
                  }}
                  title="Poprzednie zdjęcie (←)"
                >
                  ‹
                </button>
                <button 
                  className="nav-button nav-button-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImages('next');
                  }}
                  title="Następne zdjęcie (→)"
                >
                  ›
                </button>
              </>
            )}

            {/* Kontrolki zoomu */}
            <div className="zoom-controls">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
                }}
                title="Zoom out (-)"
              >
                −
              </button>
              <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel(prev => Math.min(prev + 0.25, 3));
                }}
                title="Zoom in (+)"
              >
                +
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel(1);
                  setPosition({ x: 0, y: 0 });
                }}
                title="Reset zoom (0)"
                className="reset-zoom"
              >
                ⟲
              </button>
            </div>

            {/* Licznik zdjęć */}
            {allImages.length > 1 && (
              <div className="image-counter">
                {currentImageIndex + 1} / {allImages.length}
              </div>
            )}

            {/* Zdjęcie z obsługą zoom i drag */}
            <div 
              className="image-container"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
            >
              <img 
                src={currentImage} 
                alt={`Powiększone zdjęcie z sesji`}
                className="image-modal-image"
                style={{
                  transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                  transition: isDragging ? 'none' : 'transform 0.2s ease'
                }}
              />
            </div>

            <div className="image-modal-caption">
              {session.game} - {session.date}
              <div className="zoom-hint">
                Użyj scroll do zoomu • {zoomLevel > 1 ? 'Przeciągaj zdjęcie' : 'Strzałki do nawigacji'} • ESC aby zamknąć
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionDetail;