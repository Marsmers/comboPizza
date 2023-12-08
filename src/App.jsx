
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
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




const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header/>}>
            <Route index element={<HomePage/>} />
            <Route path="#Pizza" element={<Pizza/>} />
            <Route path="#Burgers" element={<Burgers/>} />
            <Route path="#Kebab" element={<Kebab/>} />
            <Route path="#Snack" element={<Snack/>} />
            <Route path="#HotDog" element={<HotDog/>} />
            <Route path="#Sets" element={<Sets/>} />
            <Route path="#Drinks" element={<Drinks/>} />
            <Route path="#Appendices" element={<Appendices/>} />
            <Route path="#Bucket" element={<Bucket/>} />
  </Route> 

))
function App() {
  return (
  <>
    <RouterProvider router={router}/>
  </>
  );
}

export default App;
