import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bucket } from "../Redux/Reducers";
import styles from '../Components/menuContainer/Pizza/Pizza.module.css';
import toast, { Toaster } from "react-hot-toast";

const FuncKebab = () => {
    const [pizza, setPizza] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pizzaSizes, setPizzaSizes] = useState({ Size: "L" });
    const order = useSelector((state) => state.counter.order);
    const dispatch = useDispatch();



    useEffect(() => {
        axios
            .get("https://kombo-939008f7ecb9.herokuapp.com/public/product?direction=ASC&page=0&productType=KEBAB&size=8")
            .then((response) => {
                setPizza(response.data.data);
                setTotalPages(response.data.totalPages);
                const defaultSizes = {};
                const defaultCheeseCrusts = {};
                console.log(response.data.data)
                response.data.data.forEach((_, index) => {
                    defaultSizes[index] = "L";
                    defaultCheeseCrusts[index] = false;
                });
                setPizzaSizes(defaultSizes);
            })
            .catch((error) => {
                console.error("Помилка отримання даних:", error);
            });
        }, []);
        
        
        
        const handleSizeChange = (index, size) => {
            setPizzaSizes((prevSizes) => ({ ...prevSizes, [index]: size }));
        };
        

        
        console.log(pizza)
    const setOrder = (Name, Id, Price, Image, Size, hasCheeseCrust) => {
        const existingItem = order.find(
            (item) => item.Id === Id && item.Size === Size && item.hasCheeseCrust === hasCheeseCrust
        );

        if (existingItem) {
            dispatch(
                bucket(
                    order.map((item) =>
                        item.Id === Id && item.Size === Size && item.hasCheeseCrust === hasCheeseCrust
                            ? { ...item, quantity: item.quantity + 1 } : item)));
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

                    }]))
        }
    };

    const loadMorePizza = () => {
        if (currentPage < totalPages - 1) {
            const nextPage = currentPage + 1;
            axios
                .get(`https://kombo-939008f7ecb9.herokuapp.com/public/product?direction=ASC&page=${nextPage}&productType=PIZZA&size=8`)
                .then((response) => {
                    setPizza((prevPizza) => [...prevPizza, ...response.data.data]);
                    setCurrentPage(nextPage);
                    setTotalPages(response.data.totalPages);
                    const defaultSize = { ...pizzaSizes };
                    pizza.forEach((_, index) => {
                        defaultSize[index] = "L";
                    });
                    setPizzaSizes(defaultSize);
                })
                .catch((error) => {
                    console.error("Помилка отримання даних:", error);
                });
        }
    };

    useEffect(() => {
        const defaultSizes = pizza.map(() => "L")
        setPizzaSizes(defaultSizes);
    }, [pizza])



    const pizzaPrice = (size, pizza) => {
        return size === "L" ? pizza.price : pizza.productVariants[0].price;
    };

    return (
        <>
            <div className={styles.toaster}><Toaster
                position="top-center"
                reverseOrder={true}
            /></div>
            {pizza.map((pizza, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles["img-card"]}>
                        <img className={styles["card-img"]} src={pizza.mainImageUrl} alt="" />
                    </div>
                    <div className={styles.cardText}>
                        <h2 className={styles.pizzaName}>{pizza.name}</h2>
                        <p className={styles.ingredients}> {pizza.ingredients.join(", ")}</p>
                    </div>
                    <div className={styles.footerCard}>
                        <div className={styles.sizeBtn}>
                            <button
                                className={`${styles.btnSizeLeft} ${pizzaSizes[index] === "L" ? styles.active : ""}`}
                                onClick={() => handleSizeChange(index, "L")}>L</button>
                            <button
                                className={`${styles.btnSizeRigth} ${pizzaSizes[index] === "XL" ? styles.active : ""}`}
                                onClick={() => handleSizeChange(index, "XL")}>XL</button>
                        </div>
                        <div className={styles.footerBottom}>
                            <h3 className={styles.cardFooterPrice}>
                                Ціна:
                                {pizzaSizes[index] === "XL"
                                    ? pizzaPrice("XL", pizza)
                                    : pizzaPrice("L", pizza)}
                            </h3>
                            <button
                                className={styles.btnOrder}
                                onClick={() => setOrder(
                                    pizza.name,
                                    pizza.id,
                                    pizzaPrice(pizzaSizes[index], pizza),
                                    pizza.mainImageUrl,
                                    pizzaSizes[index],
                                    index,
                                    toast.success('Додано в кошик')
                                )}
                            >
                                <img className={styles.basketImgBtn} src="корзина.png" alt="" />
                                Купити
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {currentPage < totalPages - 1 && (
                <button className={styles.BtnNextPage} onClick={loadMorePizza}>
                    Показати ще
                </button>
            )}
        </>
    );
};

export default FuncKebab;