import { useEffect, useState, useRef } from "react";

const allImages = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
  "img6.jpg",
];

const perPage = 6;

// Shuffle array
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ImageGrid() {
  const [randomImages, setRandomImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const observer = useRef(null);

  useEffect(() => {
    // Shuffle once
    setRandomImages(shuffleArray(allImages));
  }, []);

  useEffect(() => {
    // Setup lazy observer
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.current.unobserve(img);
        }
      });
    });
  }, []);

  const loadBatch = () => {
    return randomImages.slice(currentIndex, currentIndex + perPage);
  };

  const handleShowMore = () => {
    setCurrentIndex((prev) => prev + perPage);
  };

  function LazyImage({ src, observer }) {
    const imgRef = useRef();

    useEffect(() => {
      if (imgRef.current) {
        observer.current.observe(imgRef.current);
      }
    }, [observer]);

    return (
      <img
        ref={imgRef}
        data-src={src}
        src="placeholder.jpg"
        loading="lazy"
        className="w-full h-32 object-cover rounded opacity-0 transition-opacity duration-500"
        onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
      />
    );
  }

  return (
    <div className="w-full">
      {/* Grid */}
      <div className="grid grid-cols-3 gap-4">
        {loadBatch().map((src, i) => (
          <LazyImage key={i} src={src} observer={observer} />
        ))}
      </div>

      {/* Show More Button */}
      {currentIndex + perPage < randomImages.length && (
        <button
          onClick={handleShowMore}
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        >
          Show More
        </button>
      )}

      {/* Count */}
      <p className="mt-2 text-gray-700 font-medium">
        Showing {Math.min(currentIndex + perPage, randomImages.length)} /{" "}
        {randomImages.length}
      </p>
    </div>
  );
}
