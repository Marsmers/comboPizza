// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { bucket } from "../../../Redux/Reducers";
import styles from '../Pizza/Pizza.module.css';
import Func from "../../../func/FuncPizza";

export default function Pizza() {
  // const [pizza, setPizza] = useState([]);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [totalPages, setTotalPages] = useState(0);
  // const [pizzaSizes, setPizzaSizes] = useState({})
  // console.log(pizzaSizes)
  // const [selectedPizzaIndex, setSelectedPizzaIndex] = useState(null);





  // // Замовлення зберігається в Redux сторінці
  // const order = useSelector((state) => state.counter.order); 
  // const dispatch = useDispatch();

  // // Ефект для завантаження початкових даних піц
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/public/product?direction=ASC&field=name&page=0&productType=PIZZA&size=8")
  //     .then((response) => {
  //       setPizza(response.data.data);
  //       setCurrentPage(0);
  //       setTotalPages(response.data.totalPages);
  //       // console.log(response.data.data);
  //       const defaultSizes = {};
  //       response.data.data.forEach((_, index) => {
  //         defaultSizes[index] = "30см";
  //       });
  //       setPizzaSizes(defaultSizes);
  //     })
  //     .catch((error) => {
  //       console.error("Помилка отримання даних:", error);
  //     });
  // }, []);





  // const setOrder = (Name, Id, Price, Image, Sizes) => {
  // const existingItem = order.find((item) => item.Id === Id && item.Size === Sizes[selectedPizzaIndex]);

  //   if (existingItem) {
  //     // Якщо товар вже є в замовленні з вказаним розміром, збільшуємо кількість
  //     dispatch(
  //       bucket(
  //         order.map((item) =>
  //           item.Id === Id && item.Size === Sizes[selectedPizzaIndex]? { ...item, quantity: item.quantity + 1 } : item)));
  //   } else {
  //     // Якщо товару немає в замовленні з вказаним розміром, додаємо новий
  //     dispatch(
  //       bucket([...order, { Name, Id, Price, Image, Size: Sizes[selectedPizzaIndex], quantity: 1 },]));
  //     }
  // };







  // // Функція для завантаження додаткових піц при кліці на "Показати ще"
  // const loadMorePizza = () => {
  //   if (currentPage < totalPages - 1) {
  //     const nextPage = currentPage + 1;
  //     axios
  //       .get(`http://localhost:8080/public/product?direction=ASC&field=name&page=${nextPage}&productType=PIZZA&size=8`)
  //       .then((response) => {
  //         setPizza((prevPizza) => [...prevPizza, ...response.data.data]);
  //         setCurrentPage(nextPage);
  //         setTotalPages(response.data.totalPages);
  //       })
  //       .catch((error) => {
  //         console.error("Помилка отримання даних:", error);
  //       });
  //     }
  //   };
    
  //   console.log(pizza)

  // const pizzaPrice = (size, pizza) => {
  //   if (size === "30см") {
  //     return pizza.price;
  //   } else {
  //     return pizza.productVariants[0].price;
    
  //   }
  // };


  
  // const handleSizeChange = (index, size) => {
  //   setSelectedPizzaIndex(index);
  //   setPizzaSizes((prevSizes) => ({ ...prevSizes, [index]: size }));
    
  // };


  

  return (
    <div className={styles.cons}>
      <div className={styles.coco}>
        <Func/>
      </div>
    </div>
  );
}
