import Admin from "./pages/Admin.js";
import Auth from "./pages/Auth.js";
import DevicePage from "./pages/DevicePaje.js";
import Shop from "./pages/Shop.js";
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Admin
  },
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  }, {
    path: LOGIN_ROUTE,
    Component: Auth
  }, {
    path: REGISTRATION_ROUTE,
    Component: Auth
  }, {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  },
]