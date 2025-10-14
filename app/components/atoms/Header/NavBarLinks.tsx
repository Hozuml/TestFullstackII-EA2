import React from 'react';


interface NavBarLinkProps{
    href: string
    children: React.ReactNode
}

const NavBarLink: React.FC<NavBarLinkProps> = ({href, children}: NavBarLinkProps) => {
    return (
        <a
            href={href}
            className="
            text-gray-600
            hover:text-[#f04299]
            transition-colors
            duration-200"
        >
            {children}
        </a>
    );
};

export default NavBarLink;