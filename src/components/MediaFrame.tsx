import { useEffect, useRef, useState, type CSSProperties } from 'react';

type MediaFrameProps = {
  src?: string;
  srcSet?: string;
  alt: string;
  aspectRatio?: '16 / 9' | '1 / 1' | '5 / 3';
  focalPoint?: string;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  videoSrc?: string;
  poster?: string;
  fallback?: string;
  className?: string;
};

export function MediaFrame({
  src,
  srcSet,
  alt,
  aspectRatio = '16 / 9',
  focalPoint = 'center',
  sizes = '(max-width: 700px) 100vw, 60vw',
  loading = 'lazy',
  priority = false,
  videoSrc,
  poster,
  fallback = 'Original visual placeholder',
  className = '',
}: MediaFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = Boolean(videoSrc && !videoFailed);
  const showImage = Boolean(!showVideo && src && !imageFailed);

  useEffect(() => {
    const video = videoRef.current;
    const frame = frameRef.current;
    if (!video || !frame || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
    }, { threshold: 0.1 });
    observer.observe(frame);
    return () => observer.disconnect();
  }, [videoSrc, videoFailed]);

  return (
    <div
      ref={frameRef}
      className={`media-frame ${className}`.trim()}
      style={{ aspectRatio, '--media-focal-point': focalPoint } as CSSProperties}
    >
      {showVideo ? (
        <video
          ref={videoRef}
          className="media-frame__asset"
          src={videoSrc}
          poster={poster}
          controls
          playsInline
          preload="none"
          aria-label={alt}
          onError={() => setVideoFailed(true)}
        />
      ) : showImage ? (
        <img
          className="media-frame__asset"
          src={src}
          srcSet={srcSet}
          alt={alt}
          loading={priority ? 'eager' : loading}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          sizes={sizes}
          style={{ objectPosition: 'var(--media-focal-point)' }}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="media-frame__fallback" role="img" aria-label={alt}>
          <span className="media-frame__fallback-mark" aria-hidden="true">AV</span>
          <span>{fallback}</span>
        </div>
      )}
      <span className="media-frame__shade" aria-hidden="true" />
    </div>
  );
}
