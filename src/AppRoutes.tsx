import { Route, Routes, useLocation } from "react-router-dom";

import { LayoutMain } from "@/layouts/LayoutMain";

export const AppRoutes = () => {
  const location = useLocation();

  console.log("location.pathname", location.pathname);

  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<div>Home</div>} />
      </Route>
    </Routes>
  );
};
