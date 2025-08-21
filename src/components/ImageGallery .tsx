import React, { useState } from "react";

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
];

// Chia ảnh thành các cột
const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const cols = 4; // số cột
  const columns: string[][] = Array.from({ length: cols }, () => []);

  images.forEach((img, idx) => {
    columns[idx % cols].push(img);
  });

  return (
    <div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl relative"
            style={{ width: "800px", height: "500px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-black rounded-full px-2 py-1 text-sm"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Phóng to"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
<div className="grid grid-cols-3 gap-[5px] rounded-[15px]">
  {images.map((imgSrc, idx) => (
    <img
      key={idx}
      src={imgSrc}
      alt={`gallery-${idx}`}
      className="w-full max-w-[80px] aspect-square object-cover rounded-lg cursor-pointer"
      onClick={() => setSelectedImage(imgSrc)}
    />
  ))}
</div>
    </div>
  );
};

export default ImageGallery;
