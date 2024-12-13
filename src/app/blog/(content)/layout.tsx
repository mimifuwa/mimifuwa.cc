import { Suspense } from "react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Suspense>{children}</Suspense>;
};

export default Layout;
