import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bucket } from "../Redux/Reducers";
import styles from '../Components/menuContainer/Drinks/Drinks.module.css';
import toast, { Toaster } from "react-hot-toast";

const FuncDrink = () => {
const [drink, setDrink] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const order = useSelector((state) => state.counter.order);
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get("https://kombo-939008f7ecb9.herokuapp.com/public/product?direction=ASC&page=0&productType=DRINK&size=8")
            .then((response) => {
                setDrink(response.data.data);
                setTotalPages(response.data.totalPages);
                console.log(response)
            })
            .catch((error) => {
                console.error("Помилка отримання даних:", error);
            });
    }, []);

    const setOrder = (Name, Id, Price, Image, Size, hasCheeseCrust) => {
        const existingItem = order.find(
            (item) => item.Id === Id 
        );

        if (existingItem) {
            dispatch(
                bucket(
                    order.map((item) =>
                        item.Id === Id 
                            ? { ...item, quantity: item.quantity + 1 } : item)
                )
            );
        } else {
            dispatch(
                bucket([
                    ...order,
                    {
                        Name,
                        Id,
                        Price,
                        Image,
                        Size,
                        quantity: 1,
                        hasCheeseCrust,
                    },
                ])
            );
        }
    };

    const loadMoreDrink = () => {
        if (currentPage < totalPages - 1) {
            const nextPage = currentPage + 1;
            axios
                .get(`https://kombo-939008f7ecb9.herokuapp.com/public/product?direction=ASC&page=${nextPage}&productType=DRINK&size=8`)
                .then((response) => {
                    setDrink((prevDrink) => [...prevDrink, ...response.data.data]);
                    setCurrentPage(nextPage);
                    setTotalPages(response.data.totalPages);
                })
                .catch((error) => {
                    console.error("Помилка отримання даних:", error);
                });
        }
    };

    console.log(drink)

    return (
        <>
            <div className={styles.toaster}>
                <Toaster position="top-center" reverseOrder={true} />
            </div>
            {drink.map((drink, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles["img-card"]}>
                        <img className={styles["card-img"]} src={drink.mainImageUrl} alt="" />
                    </div>
                    <div className={styles.cardText}>
                        <h2 className={styles.drinkName}>{drink.name}</h2>
                        <p className={styles.ingredients}> {drink.ingredients.join(", ")}</p>
                    </div>
                    <div className={styles.footerCard}>
                        <div className={styles.footerBottom}>
                            <h3 className={styles.cardFooterPrice}>
                                Ціна: {drink.price}
                            </h3>
                            <button
                                className={styles.btnOrder}
                                onClick={() =>
                                    setOrder(
                                        drink.name,
                                        drink.id,
                                        drink.price,
                                        drink.mainImageUrl,
                                        false,
                                        index,
                                        toast.success('Додано в кошик')
                                    )
                                }
                            >
                                <img className={styles.basketImgBtn} src="корзина.png" alt="" />
                                Купити
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {currentPage < totalPages - 1 && (
                <button className={styles.BtnNextPage} onClick={loadMoreDrink}>
                    Показати ще
                </button>
            )}
        </>
    );
};

export default FuncDrink;
