import React from "react";

const Cards = ({ head, img, content, author }) => {
  return (
    <div className="bg-white overflow-hidden relative max-w-sm p-6 w-[300px] rounded-lg shadow-lg text-white">
      <div className="glow1 absolute"></div>
      <div className="glow1 absolute"></div>
      <div className="glow1 absolute"></div>
      <div className="glow1 absolute"></div>
      <div className="glow1 absolute"></div>
      <div className="glow2 absolute"></div>
      <div className="glow2 absolute"></div>
      <div className="glow2 absolute"></div>
      <div className="glow2 absolute"></div>
      <div className="glow2 absolute"></div>
      <div className="relative rounded-lg overflow-hidden cursor-pointer group">
        <img src={img} alt="NFT Preview" className="w-full" />
      </div>

      <div className="pt-6 border-b border-[#2c3a4c] mb-4">
          <a href="#" className="text-[#14253d] font-bold hover:text-indigo-400 transition-colors">
          <h3 className="text-2xl font-medium mb-4">{head}</h3>
        </a>
        <p className="text-[#8bacda] text-md mb-6 leading-relaxed">
          {content}
        </p>
      </div>

      <div className="flex items-center">
        <img
          src="https://i.postimg.cc/G3N6sF4g/image-avatar.png"
          alt="Avatar"
          className="w-9 h-9 border-2 border-[#14253d] rounded-full mr-4"
        />
        <p className="text-[#8bacda]">
          <a
            href="https://medium.com/@rashmi.psychology"
            className="text-[#14253d] font-medium hover:text-indigo-500 transition-colors"
          >
            {author}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Cards;
