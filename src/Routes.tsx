import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { OrderPage } from "./pages/Order";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/confirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}