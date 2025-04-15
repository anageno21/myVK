import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const PhotoSwipeGallery = ({ items }) => {
  return (
    <Gallery>
      {items.map((item, index) => (
        <Item
          key={index}
          original={item.src}
          thumbnail={item.thumbnail || item.src}
          width={item.width || '1024'}
          height={item.height || '768'}
        >
          {({ ref, open }) => (
            <a href={item.src} onClick={open}>
              <img ref={ref} src={item.thumbnail || item.src} alt={item.alt || ''} />
            </a>
          )}
        </Item>
      ))}
    </Gallery>
  );
};

export default PhotoSwipeGallery;