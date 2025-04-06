// components/Avatar.jsx

import Image from 'next/image';

const Avatar = ({ imageUrl, altText, size = 'w-16 h-16' }) => {
  return (
    <div className={`rounded-full overflow-hidden ${size} border-2 border-gray-300`}>
      <Image
        src={imageUrl}
        alt={altText}
        width={64} // 64px for default size
        height={64} // 64px for default size
        layout="intrinsic"
        objectFit="cover"
      />
    </div>
  );
};

export default Avatar;
