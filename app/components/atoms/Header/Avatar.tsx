import React from 'react';

// Le pedimos la URL de la imagen a través de las props.
interface AvatarProps {
    imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
    return (
        // Usamos un 'div' con 'backgroundImage' para tener control total
        // sobre cómo se muestra la imagen (recorte y centrado).
        <div
            className="
        w-32 h-32
        md:w-40 md:h-40
        rounded-full
        bg-cover
        bg-center
        shadow-md
      "
            style={{ backgroundImage: `url('${imageUrl}')` }} //imagen mia
        ></div>
    );
};

export default Avatar;