import { Link, Outlet } from 'react-router-dom';
import './header.css'
import Footer from '../footer/Footer';
import { useSelector } from 'react-redux';


export default function Index() {
  const order = useSelector(state => state.counter.order.length);



  return (
    <div className='container'>
      <div className='header'>
        <div className='headerLogo'>
          <Link to=""><img className='komboLogo' src='Logokombo.png' alt="Logo" /></Link>
        </div>
        <ul>
          <li><Link to="Pizza"><p>Піцца</p></Link></li>
          <li><Link to="Burgers"><p>Бургери</p></Link></li>
          <li><p>Кебаби</p></li>
          <li><p>Снеки</p></li>
          <li><p>Салати</p></li>
          <li><p>Сети</p></li>
          <li><Link to="Drinks"><p>Напої</p></Link></li>
          <li><Link to="Appendices"><p>Інше</p></Link></li>  
        </ul>
        <li className='bucketIcon'>
            <Link to="Bucket">
              <img src="bucket.png" alt="" />
              <div className='bucektIndex'>
              <p>{order}</p>
              </div>
            </Link>
          </li>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}