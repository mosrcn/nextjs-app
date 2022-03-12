import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export const getLayout = (children: React.ReactNode) => <Layout>{children}</Layout>;

export default Layout;
