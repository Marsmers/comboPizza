
import { createBrowserHistory } from 'history';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Header from './Components/header/Index';
import Burgers from './Components/menuContainer/Burgers/Burgers';
import Pizza from './Components/menuContainer/Pizza/Pizza';
import Drinks from './Components/menuContainer/Drinks/Drinks';
import Appendices from './Components/menuContainer/Other/Other';
import Bucket from './Components/menuContainer/Bucket/Bucket';
import HomePage from './Components/menuContainer/HomePage/HomePage';
import Kebab from './Components/menuContainer/Kebab/Kebab';
import Snack from './Components/menuContainer/Snack/Snack';
import HotDog from './Components/menuContainer/HotDog/HotDog';
import Sets from './Components/menuContainer/Sets/Sets';
import Succes from './Components/menuContainer/Bucket/Succes';

const history = createBrowserHistory();




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />} />
      <Route path="Піца" element={<Pizza />} />
      <Route path="Бургери" element={<Burgers />} />
      <Route path="Кебаби" element={<Kebab />} />
      <Route path="Снеки" element={<Snack />} />
      <Route path="Хот-доги" element={<HotDog />} />
      <Route path="Комбо-меню" element={<Sets />} />
      <Route path="Напої" element={<Drinks />} />
      <Route path="Інше" element={<Appendices />} />
      <Route path="Корзина" element={<Bucket />} />
      <Route path="Succes" element={<Succes />} />
    </Route>
  ),
  { history }
);

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
