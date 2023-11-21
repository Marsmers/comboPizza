import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bucket } from "../Redux/Reducers";
import styles from '../Components/menuContainer/Pizza/Pizza.module.css';

export default function Func() {
    const [pizza, setPizza] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pizzaSizes, setPizzaSizes] = useState({ Size: "30см" })
    const [selectedPizzaIndex, setSelectedPizzaIndex] = useState(null);




    // Замовлення зберігається в Redux сторінці
    const order = useSelector((state) => state.counter.order);
    const dispatch = useDispatch();

    // Ефект для завантаження початкових даних піц
    useEffect(() => {
        axios
            .get("http://localhost:8080/public/product?direction=ASC&field=name&page=0&productType=PIZZA&size=8")
            .then((response) => {
                setPizza(response.data.data);
                setTotalPages(response.data.totalPages);
                const defaultSizes = {};
                response.data.data.forEach((_, index) => {
                    defaultSizes[index] = "30см";
                });
                setPizzaSizes(defaultSizes);
            })
            .catch((error) => {
                console.error("Помилка отримання даних:", error);
            });
    }, []);



    const handleSizeChange = (index, size) => {
        setSelectedPizzaIndex(index);
        setPizzaSizes((prevSizes) => ({ ...prevSizes, [index]: size }));
    };


    const setOrder = (Name, Id, Price, Image, Sizes) => {
        const selectedSize = Sizes[selectedPizzaIndex] || "30см";

        const existingItem = order.find((item) => item.Id === Id && item.Size === selectedSize);

        if (existingItem) {
            dispatch(
                bucket(
                    order.map((item) =>
                        item.Id === Id && item.Size === selectedSize ? { ...item, quantity: item.quantity + 1 } : item
                    )
                )
            );
        } else {
            dispatch(
                bucket([
                    ...order,
                    { Name, Id, Price, Image, Size: selectedSize, quantity: 1 },
                ])
            );
        }
    };








    // Функція для завантаження додаткових піц при кліці на "Показати ще"
    const loadMorePizza = () => {
        if (currentPage < totalPages - 1) {
            const nextPage = currentPage + 1;
            axios
                .get(`http://localhost:8080/public/product?direction=ASC&field=name&page=${nextPage}&productType=PIZZA&size=8`)
                .then((response) => {
                    setPizza((prevPizza) => [...prevPizza, ...response.data.data]);
                    setCurrentPage(nextPage);
                    setTotalPages(response.data.totalPages);
                    const defaultSize = { ...pizzaSizes }
                    pizza.forEach((_, index) => {
                        defaultSize[index] = "30см";
                    });
                    setPizzaSizes(defaultSize);
                })
                .catch((error) => {
                    console.error("Помилка отримання даних:", error);
                });
        }
    };

    useEffect(() => {
        const defaultSizes = pizza.map(() => "30см");
        setPizzaSizes(defaultSizes);
    }, [pizza])


    const pizzaPrice = (size, pizza) => {
        if (size === "30см") {
            return pizza.price;
        } else {
            return pizza.productVariants[0].price;

        }
    };






    console.log(pizza)
    return (
        <>
            {pizza.map((pizza, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles["img-card"]}>
                        <img className={styles["card-img"]} src={pizza.mainImageUrl} alt="" />
                    </div>
                    <h1>{pizza.name}</h1>
                    <p>Інгредієнти: {pizza.ingredients.join(", ")}</p>
                    <div className={styles.footerCard}>
                        <div className={styles.sizeBtn}>
                            <button className={`${styles.btnSizeLeft}
                                ${pizzaSizes[index] === "30см" ? styles.active : ""}`}
                                onClick={() => handleSizeChange(index, "30см")}>30см
                            </button>
                            <button className={`${styles.btnSizeRigth} 
                                ${pizzaSizes[index] === "40см" ? styles.active : ""}`}
                                onClick={() => handleSizeChange(index, "40см")}>40см
                            </button>
                        </div>
                        <div className={styles.footerBottom}>
                            <h3>
                                Ціна:
                                {pizzaSizes[index] === "40см" ? pizzaPrice("40см", pizza) : pizzaPrice("30см", pizza)}
                            </h3>
                            <button onClick={() => setOrder(
                                pizza.name,
                                pizza.id,
                                pizzaSizes[index] === "40см" ? pizzaPrice("40см", pizza) : pizzaPrice("30см", pizza),
                                pizza.mainImageUrl,
                                pizzaSizes,)}>
                                <img className={styles.basketImgBtn} src="korz.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {currentPage < totalPages - 1 && (
                <button className={styles.BtnNextPage} onClick={loadMorePizza}>Показати ще</button>
            )}
        </>
    )
}
