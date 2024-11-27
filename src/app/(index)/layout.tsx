import { Suspense } from "react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Suspense>{children}</Suspense>
);

export default Layout;
