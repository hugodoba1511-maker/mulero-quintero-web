import React from "react";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundGradient?: string;
  children?: React.ReactNode;
  image?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  backgroundGradient = "from-gray-900 via-gray-800 to-black",
  children,
  image,
}: HeroBannerProps) {
  return (
    <div className={`bg-gradient-to-r ${backgroundGradient} text-white py-20 relative overflow-hidden`}>
      {image && (
        <div className="absolute inset-0 opacity-20">
          <img
            src={image}
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
}
