import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bucket } from "../Redux/Reducers";
import styles from '../Components/menuContainer/Burgers/Burgers.module.css';
import toast, { Toaster } from "react-hot-toast";

const FuncBurger = () => {
    const [burger, setBurger] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const order = useSelector((state) => state.counter.order);
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get("https://kombo-939008f7ecb9.herokuapp.com/public/product?direction=ASC&page=0&productType=BURGER&size=8")
            .then((response) => {
                setBurger(response.data.data);
                setTotalPages(response.data.totalPages);
            })
            .catch((error) => {
                console.error("Помилка отримання даних:", error);
            });
    }, []);

    const setOrder = (Name, Id, Price, Image) => {
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
                        quantity: 1,
                    },
                ])
            );
        }
    };

    const loadMoreBurger = () => {
        if (currentPage < totalPages - 1) {
            const nextPage = currentPage + 1;
            axios
                .get(`https://kombo-939008f7ecb9.herokuapp.com/public/product?direction=ASC&page=${nextPage}&productType=BURGER&size=8`)
                .then((response) => {
                    setBurger((prevBurger) => [...prevBurger, ...response.data.data]);
                    setCurrentPage(nextPage);
                    setTotalPages(response.data.totalPages);
                })
                .catch((error) => {
                    console.error("Помилка отримання даних:", error);
                });
        }
    };


    return (
        <>
            <div className={styles.toaster}>
                <Toaster position="top-center" 
                reverseOrder={true} 
                />
            </div>
            {burger.map((burger, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles["img-card"]}>
                        <img className={styles["card-img"]} src={burger.mainImageUrl} alt="Комбо бургер Стрий" />
                    </div>
                    <div className={styles.cardText}>
                        <h2 className={styles.burgerName}>{burger.name}</h2>
                        <p className={styles.ingredients}> {burger.ingredients.join(", ")}</p>
                    </div>
                    <div className={styles.footerCard}>
                        <div className={styles.footerBottom}>
                            <h3 className={styles.cardFooterPrice}>
                                {burger.price} грн
                            </h3>
                            <button
                                className={styles.btnOrder}
                                onClick={() =>
                                    setOrder(
                                        burger.name,
                                        burger.id,
                                        burger.price,
                                        burger.mainImageUrl,
                                        toast.success(`${burger.name} \nДодано в кошик`)
                                    )
                                }
                            >
                                <img className={styles.basketImgBtn} src="корзина.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {currentPage < totalPages - 1 && (
                <button className={styles.BtnNextPage} onClick={loadMoreBurger}>
                    Показати ще
                </button>
            )}
        </>
    );
};

export default FuncBurger;
