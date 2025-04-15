import React from 'react';

interface FlowerIllustrationsProps {
  className?: string;
}

const FlowerIllustrations: React.FC<FlowerIllustrationsProps> = ({ className }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {/* Large Flower */}
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-amber-200/30"
      >
        <path
          d="M100 20C100 20 120 40 120 60C120 80 100 100 100 100C100 100 80 80 80 60C80 40 100 20 100 20Z"
          fill="currentColor"
        />
        <path
          d="M100 100C100 100 120 120 120 140C120 160 100 180 100 180C100 180 80 160 80 140C80 120 100 100 100 100Z"
          fill="currentColor"
        />
        <path
          d="M100 100C100 100 80 120 60 120C40 120 20 100 20 100C20 100 40 80 60 80C80 80 100 100 100 100Z"
          fill="currentColor"
        />
        <path
          d="M100 100C100 100 120 80 140 80C160 80 180 100 180 100C180 100 160 120 140 120C120 120 100 100 100 100Z"
          fill="currentColor"
        />
      </svg>

      {/* Small Flower */}
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-amber-300/20"
      >
        <path
          d="M50 10C50 10 60 20 60 30C60 40 50 50 50 50C50 50 40 40 40 30C40 20 50 10 50 10Z"
          fill="currentColor"
        />
        <path
          d="M50 50C50 50 60 60 60 70C60 80 50 90 50 90C50 90 40 80 40 70C40 60 50 50 50 50Z"
          fill="currentColor"
        />
        <path
          d="M50 50C50 50 40 60 30 60C20 60 10 50 10 50C10 50 20 40 30 40C40 40 50 50 50 50Z"
          fill="currentColor"
        />
        <path
          d="M50 50C50 50 60 40 70 40C80 40 90 50 90 50C90 50 80 60 70 60C60 60 50 50 50 50Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default FlowerIllustrations; 