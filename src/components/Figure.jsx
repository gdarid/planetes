import React from 'react';
import styles from './Figure.module.css';

function getTagAccordingToDataType(data) {
  if (typeof data !== 'object' || !data.type) return null;

  const {
    type,
    src,
    value,
    sources,
    alt = '',
    width,
    height,
    align,
    title,
    ...rest
  } = data;

  const sourceUrl = src || value;

  switch (type) {
    case 'image':
    case 'img': {
      return (
        <img
          src={sourceUrl}
          alt={alt}
          width={width}
          height={height}
          {...rest}
        />
      );
    }

    case 'video': {
      return (
        <video controls width={width} height={height} {...rest}>
          {Array.isArray(sources)
            ? sources.map((s, i) => <source key={i} src={s.src} type={s.type} />)
            : sourceUrl
            ? <source src={sourceUrl} />
            : null}
          {/* Fallback text for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
      );
    }

    case 'audio': {
      return (
        <audio controls {...rest}>
          {Array.isArray(sources)
            ? sources.map((s, i) => <source key={i} src={s.src} type={s.type} />)
            : sourceUrl
            ? <source src={sourceUrl} />
            : null}
          Your browser does not support the audio element.
        </audio>
      );
    }

    case 'html': {
      // Keep iframe props explicit
      return (
        <div className={styles.container} align={align}>
          <iframe
            src={sourceUrl}
            title={title || alt || 'embedded content'}
            width={width}
            height={height}
            {...rest}
          />
        </div>
      );
    }

    default:
      return <object data={sourceUrl} width={width} height={height} {...rest} />;
  }
}

export default function Figure({ data, children }) {
  if (!data && !children) return null;

  return (
    <figure>
      {data && getTagAccordingToDataType(data)}
      {children ? <figcaption className={styles.legend}>{children}</figcaption> : null}
    </figure>
  );
}