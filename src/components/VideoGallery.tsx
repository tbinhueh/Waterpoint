import React, { useState } from "react";

const VideoGallery: React.FC = () => {
  const videos = [
    {
      id: 1,
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://img.youtube.com/vi/YE7VzlLtp-4/0.jpg",
    },
    {
      id: 2,
      src: "https://www.w3schools.com/html/movie.mp4",
      thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/0.jpg",
    },
    {
      id: 3,
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
    },
    {
      id: 4,
      src: "https://www.w3schools.com/html/movie.mp4",
      thumbnail: "https://img.youtube.com/vi/3fumBcKC6RE/0.jpg",
    },
    {
      id: 5,
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/0.jpg",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Video chính cố định 800x400 */}
      <div className="relative w-[800px] h-[400px] bg-gray-800 rounded-lg shadow-lg ml-[1100px]">
        <video
          src={selectedVideo.src}
          controls
          className="w-full h-full rounded-lg"
        />
      </div>

      {/* Thumbnails ngay dưới video */}
      <div className="grid grid-cols-5 gap-[150px] mt-[20px] ml-[1100px]">
        {videos.map((video) => (
          <div key={video.id} className="flex justify-center">
            <img
              src={video.thumbnail}
              alt={`Thumbnail ${video.id}`}
              className={`w-[150px] h-[100px] rounded-[20px] border-4 cursor-pointer transition-transform duration-200 ${
                selectedVideo.id === video.id
                  ? "border-blue-500 scale-100"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedVideo(video)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
