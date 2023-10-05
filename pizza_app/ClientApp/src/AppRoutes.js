import  Atsiliepimai  from "./components/Atsiliepimai";
import  Nuopelnai  from "./components/Nuopelnai";
import { Home } from "./components/Home";
import Menu from "./components/Menu";
import  Restoranai  from "./components/Restoranai";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/restoranai',
    element: <Restoranai />
  },
  {
    path: '/nuopelnai',
    element: <Nuopelnai />
    },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/atsiliepimai',
    element: <Atsiliepimai />
  }
];

export default AppRoutes;
