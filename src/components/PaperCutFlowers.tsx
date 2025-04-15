import React from 'react';
import Image from 'next/image';

interface PaperCutFlowersProps {
  className?: string;
}

const PaperCutFlowers: React.FC<PaperCutFlowersProps> = ({ className }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {/* Large Rose */}
      <div className="absolute -top-32 -left-24 w-[400px] h-[400px] transform rotate-12">
        <Image
          src="https://images.unsplash.com/photo-1589994160839-163cd867cfe8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Decorative Rose"
          fill
          className="object-cover mix-blend-multiply rounded-full shadow-2xl"
        />
      </div>

      {/* Small Wildflower */}
      <div className="absolute top-48 -right-16 w-[300px] h-[300px] transform -rotate-12">
        <Image
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Decorative Wildflower"
          fill
          className="object-cover mix-blend-multiply rounded-full shadow-2xl"
        />
      </div>

      {/* Medium Daisy */}
      <div className="absolute -bottom-48 left-1/4 w-[350px] h-[350px] transform rotate-45">
        <Image
          src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Decorative Daisy"
          fill
          className="object-cover mix-blend-multiply rounded-full shadow-2xl"
        />
      </div>
    </div>
  );
};

export default PaperCutFlowers; 