import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => (
  <div className="relative flex justify-center px-3 py-20 w-screen h-screen dark:bg-dark-app">
    <div className="w-default-app flex justify-center items-center flex-col">
      {children}
    </div>
  </div>
);

export default Layout;
