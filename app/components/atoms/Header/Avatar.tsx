import React from 'react';

interface AvatarProps {
    imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
    return (

        <div
            className="
        w-32 h-32
        md:w-40 md:h-40
        rounded-full
        bg-cover
        bg-center
        shadow-md
      "
        ></div>
    );
};

export default Avatar;