import React from "react";
import { HoverExpand } from "./ui/Hover-expand";

const images = [
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnRhbCUyMHdlbGxuZXNzfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661475807889-30a4f33cd405?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVudGFsJTIwd2VsbG5lc3N8ZW58MHx8MHx8fDA%3D",
  "https://assets.lummi.ai/assets/QmXe6v7jBF5L2R7FCio8KQdXwTX2uqzRycUJapyjoXaTqd?auto=format&w=1500",
  "https://plus.unsplash.com/premium_photo-1689177356594-b988a1cc45ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWluZHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVwcmVzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRlcHJlc3Npb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1633977264259-b3517c187e3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVwcmVzc2VkJTIwbWluZHxlbnwwfHwwfHx8MA%3D%3D",
];

function MouseTrailDemo() {
  return (
    <section className="mx-auto w-full max-w-6xl py-20">
      <div className="relative mx-auto flex w-full flex-col items-center justify-center">
        <article className="relative z-50 mt-20 flex flex-col items-center justify-center">
          <h2 className="max-w-2xl text-center text-5xl font-semibold tracking-tight text-white mb-4">
            Your Mental Health <span className="text-orange-400">Matters</span> 
          </h2>
          <p className="mt-6 text-lg text-gray-400 text-center max-w-xl">
            Mental health screening isn't just about identifying problems—it's about recognizing resilience, understanding individual strengths, and building personalized pathways to wellness that honor each person's unique journey toward emotional stability and growth
          </p>
        </article>
        <HoverExpand
          images={images}
          initialSelectedIndex={0}
          thumbnailHeight={200}
          modalImageSize={400}
          maxThumbnails={11}
        />
      </div>
    </section>
  );
}

export default MouseTrailDemo;