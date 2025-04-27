// src/components/VideoHighlightSection.js
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'react-feather';
import './VideoHighlightSection.css';

const VideoHighlightSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false); // State για σφάλματα φόρτωσης βίντεο

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          setHasError(true); // Χειρισμός σφάλματος αναπαραγωγής
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleError = () => {
    setHasError(true); // Χειρισμός σφάλματος φόρτωσης
  };

  return (
    <section className="video-highlight-section">
      <div className="video-container">
        <div className="video-wrapper">
          <div className="video-content">
            <div className="left-column">
              {/* Κενή αριστερή στήλη, μπορεί να προστεθεί περιεχόμενο αν χρειάζεται */}
            </div>
            <div className="right-column">
              <div className="video-frame">
                {hasError ? (
                  <p style={{ color: '#FF6F61', textAlign: 'center' }}>
                    Failed to load video. Please try again later.
                  </p>
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      className="highlight-video"
                      loop
                      playsInline
                      onError={handleError} // Χειρισμός σφάλματος φόρτωσης
                    >
                      <source src="/videos/VK/vkIntro.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="video-controls">
                      <button onClick={togglePlay} className="control-button play-pause-button">
                        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                      </button>
                      <button onClick={toggleMute} className="control-button mute-button">
                        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlightSection;