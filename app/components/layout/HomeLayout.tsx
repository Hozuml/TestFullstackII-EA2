// app/components/layouts/HomeLayout.tsx
import React from 'react';
import Header from '~/components/molecules/Header';

interface HomeLayoutProps {
    children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {

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