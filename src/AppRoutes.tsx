import { Route, Routes, useLocation } from "react-router-dom";

import { LayoutMain } from "@/layouts/LayoutMain";
import { HomePage } from "@/pages/HomePage";

export const AppRoutes = () => {
  const location = useLocation();

  console.log("location.pathname", location.pathname);

  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
