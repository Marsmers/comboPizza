import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bucket } from "../Redux/Reducers";
import styles from '../Components/menuContainer/HotDog/HotDog.module.css';
import toast, { Toaster } from "react-hot-toast";


const FuncHotDog = () => {
const [hotdog, setHotDog] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const order = useSelector((state) => state.counter.order);
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get("https://kombo-939008f7ecb9.herokuapp.com/public/product?direction=ASC&page=0&productType=HOT_DOG&size=8")
            .then((response) => {
                setHotDog(response.data.data);
                setTotalPages(response.data.totalPages);
                console.log(response)
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

    const loadMoreHotDog = () => {
        if (currentPage < totalPages - 1) {
            const nextPage = currentPage + 1;
            axios
                .get(`https://kombo-939008f7ecb9.herokuapp.com/public/product?direction=ASC&page=${nextPage}&productType=HOT_DOG&size=8`)
                .then((response) => {
                    setHotDog((prevHotDog) => [...prevHotDog, ...response.data.data]);
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
                <Toaster position="top-center" reverseOrder={true} />
            </div>
            {hotdog.map((hotdog, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles["img-card"]}>
                        <img className={styles["card-img"]} src={hotdog.mainImageUrl} alt="Комбо хот-дог Стрий" />
                    </div>
                    <div className={styles.cardText}>
                        <h2 className={styles.hotdogName}>{hotdog.name}</h2>
                        <p className={styles.ingredients}> {hotdog.ingredients.join(", ")}</p>
                    </div>
                    <div className={styles.footerCard}>
                        <div className={styles.footerBottom}>
                            <h3 className={styles.cardFooterPrice}>
                                {hotdog.price} грн
                            </h3>
                            <button
                                className={styles.btnOrder}
                                onClick={() =>
                                    setOrder(
                                        hotdog.name,
                                        hotdog.id,
                                        hotdog.price,
                                        hotdog.mainImageUrl,
                                        toast.success(`${hotdog.name} \nДодано в кошик`)
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
                <button className={styles.BtnNextPage} onClick={loadMoreHotDog}>
                    Показати ще
                </button>
            )}
        </>
    );
};

export default FuncHotDog;
