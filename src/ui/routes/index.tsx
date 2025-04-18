import { Corp } from "@ui/pages/corp";
import { NotFound } from "@ui/pages/not-found";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const RouteSelector = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Corp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
