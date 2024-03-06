// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { bucket } from "../../../Redux/Reducers";
import styles from '../Pizza/Pizza.module.css';
import Func from "../../../func/FuncPizza";

export default function Pizza() {

  return (
    <div className={styles.cons}>
      <div className={styles.coco}>
        <Func/>
      </div>
    </div>
  );
}
