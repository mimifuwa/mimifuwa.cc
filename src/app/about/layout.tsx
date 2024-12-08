import { Suspense } from "react";

import { MainLayout } from "@/layouts/Main";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Suspense>
    <MainLayout>{children}</MainLayout>
  </Suspense>
);

export default Layout;
