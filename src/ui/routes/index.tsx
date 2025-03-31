import { Home } from "@ui/pages/home";
import { NotFound } from "@ui/pages/not-found";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const RouteSelector = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
