import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// lazyLoading
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  const lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazyBackground"));
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          if (lazyImage.dataset.srcset) {
            lazyImage.srcset = lazyImage.dataset.srcset;
          }
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
     entries.forEach(function(entry) {
       if (entry.isIntersecting) {
         entry.target.classList.add("visible");
         lazyBackgroundObserver.unobserve(entry.target);
       }
     });
   });
    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
