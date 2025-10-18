// app/components/layouts/HomeLayout.tsx
import React from 'react';
import Header from '~/components/molecules/Header';

interface HomeLayoutProps {
    children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    // Este div NO debe tener clases como bg-cover, bg-center,
    // ni la prop style con backgroundImage.
    return (
        <div className="min-h-screen font-display">
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
};

export default HomeLayout;