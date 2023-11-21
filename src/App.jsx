
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from './Components/header/Index';
import Burgers from './Components/menuContainer/Burgers/Burgers';
import Pizza from './Components/menuContainer/Pizza/Pizza';
import Drinks from './Components/menuContainer/Drinks/Drinks';
import Appendices from './Components/menuContainer/Appendices/Appendices';
import Bucket from './Components/menuContainer/Bucket/Bucket';
import HomePage from './Components/menuContainer/HomePage/HomePage';



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header/>}>
            <Route index element={<HomePage/>} />
            <Route path="Pizza" element={<Pizza/>} />
            <Route path="Burgers" element={<Burgers/>} />
            <Route path="Drinks" element={<Drinks/>} />
            <Route path="Appendices" element={<Appendices/>} />
            <Route path="Bucket" element={<Bucket/>} />
  </Route> 

))
function App() {


  return (

    <RouterProvider router={router}/>
  );
}

export default App;
