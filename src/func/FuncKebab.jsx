import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bucket } from "../Redux/Reducers";
import styles from "../Components/menuContainer/Kebab/Kebab.module.css";
import toast, { Toaster } from "react-hot-toast";

const FuncKebab = () => {
  const [kebab, setKebab] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [kebabSizes, setKebabSizes] = useState({ Size: "L" });
  const order = useSelector((state) => state.counter.order);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://kombo-939008f7ecb9.herokuapp.com/public/product?direction=ASC&page=0&productType=KEBAB&size=8"
      )
      .then((response) => {
        setKebab(response.data.data);
        setTotalPages(response.data.totalPages);
        const defaultSizes = {};
        const defaultCheeseCrusts = {};
        console.log(response.data.data);
        response.data.data.forEach((_, index) => {
          defaultSizes[index] = "L";
          defaultCheeseCrusts[index] = false;
        });
        setKebabSizes(defaultSizes);
      })
      .catch((error) => {
        console.error("Помилка отримання даних:", error);
      });
  }, []);

  const handleSizeChange = (index, size) => {
    setKebabSizes((prevSizes) => ({ ...prevSizes, [index]: size }));
  };

  console.log(kebab);
  const setOrder = (Name, Id, Price, Image, Size) => {
    const existingItem = order.find(
      (item) =>
        item.Id === Id &&
        item.Size === Size 
    );

    if (existingItem) {
      dispatch(
        bucket(
          order.map((item) =>
            item.Id === Id &&
            item.Size === Size 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
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
          },
        ])
      );
    }
  };

  const loadMoreKebab = () => {
    if (currentPage < totalPages - 1) {
      const nextPage = currentPage + 1;
      axios
        .get(
          `https://kombo-939008f7ecb9.herokuapp.com/public/product?direction=ASC&page=${nextPage}&productType=KEBAB&size=8`
        )
        .then((response) => {
          setKebab((prevKebab) => [...prevKebab, ...response.data.data]);
          setCurrentPage(nextPage);
          setTotalPages(response.data.totalPages);
          const defaultSize = { ...kebabSizes };
          kebab.forEach((_, index) => {
            defaultSize[index] = "L";
          });
          setKebabSizes(defaultSize);
        })
        .catch((error) => {
          console.error("Помилка отримання даних:", error);
        });
    }
  };

  useEffect(() => {
    const defaultSizes = kebab.map(() => "L");
    setKebabSizes(defaultSizes);
  }, [kebab]);

  const kebabPrice = (size, kebab) => {
    return size === "L" ? kebab.price : kebab.productVariants[0].price;
  };

  return (
		<>
			<div className={styles.toaster}>
				<Toaster position='top-center' reverseOrder={true} />
			</div>
			{kebab.map((kebab, index) => (
				<div key={index} className={styles.card}>
					<div className={styles['img-card']}>
						<img
							className={styles['card-img']}
							src={kebab.mainImageUrl}
							alt='Комбо кебаб Стрий'
						/>
					</div>
					<div className={styles.cardText}>
						<h2 className={styles.kebabName}>{kebab.name}</h2>
						<span className={styles.kebabSpan}></span>
						<p className={styles.ingredients}>
							{' '}
							{kebab.ingredients.join(', ')}
						</p>
					</div>
					<div className={styles.footerCard}>
						<div className={styles.sizeBtn}>
							<button
								className={`${styles.btnSizeLeft} ${
									kebabSizes[index] === 'L' ? styles.active : ''
								}`}
								onClick={() => handleSizeChange(index, 'L')}
							>
								L
							</button>
							<button
								className={`${styles.btnSizeRigth} ${
									kebabSizes[index] === 'XL' ? styles.active : ''
								}`}
								onClick={() => handleSizeChange(index, 'XL')}
							>
								XL
							</button>
						</div>
						<div className={styles.footerBottom}>
							<h3 className={styles.cardFooterPrice}>
								{kebabSizes[index] === 'XL'
									? kebabPrice('XL', kebab)
									: kebabPrice('L', kebab)}{' '}
								грн
							</h3>
							<button
								className={styles.btnOrder}
								onClick={() =>
									setOrder(
										kebab.name,
										kebab.id,
										kebabPrice(kebabSizes[index], kebab),
										kebab.mainImageUrl,
										kebabSizes[index],
										index,
										toast.success(`${kebab.name} \nДодано в кошик`)
									)
								}
							>
								<img className={styles.basketImgBtn} src='корзина.png' alt='' />
							</button>
						</div>
					</div>
				</div>
			))}
			{currentPage < totalPages - 1 && (
				<button className={styles.BtnNextPage} onClick={loadMoreKebab}>
					Показати ще
				</button>
			)}
		</>
	)
};

export default FuncKebab;
