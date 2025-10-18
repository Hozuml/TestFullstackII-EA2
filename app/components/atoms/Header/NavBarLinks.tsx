import React from 'react';


interface NavBarLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavBarLinks: React.FC<NavBarLinkProps> = ({ href, children }) => {
    return (
        <a href={href} className="nav-link">
            {children}
        </a>
    );
};

export default NavBarLinks;