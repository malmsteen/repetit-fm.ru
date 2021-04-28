import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/mathPageSections/mathSectionStyle.js";

import file0 from "assets/docs/Задание 13. Уравнение.pdf";
import file1 from "assets/docs/Задание 15. Неравенства.pdf";
import file2 from "assets/docs/Задание 15. Показательные и логарифмические неравенства.pdf";
import file3 from "assets/docs/Задание 17. Вклады и кредиты.pdf";
import file4 from "assets/docs/Иррациональные ур. и нер.pdf";
import file5 from "assets/docs/Логарифмы.pdf";
import file6 from "assets/docs/Метод интервалов.pdf";
import file7 from "assets/docs/метод рационализации.pdf";

const useStyles = makeStyles(styles);

export default function FileList() {
  const classes = useStyles();
  return (
    <ul className={classes.uList}>
      <li>
        {" "}
        <a href={file0} target="_blank" className={classes.anchor}>
          Задание 13. Уравнение
        </a>
      </li>

      <li>
        {" "}
        <a href={file1} target="_blank" className={classes.anchor}>
          Задание 15. Неравенства
        </a>
      </li>

      <li>
        {" "}
        <a href={file2} target="_blank" className={classes.anchor}>
          Задание 15. Показательные и логарифмические неравенства
        </a>
      </li>

      <li>
        {" "}
        <a href={file3} target="_blank" className={classes.anchor}>
          Задание 17. Вклады и кредиты
        </a>
      </li>

      <li>
        {" "}
        <a href={file4} target="_blank" className={classes.anchor}>
          Иррациональные ур. и нер
        </a>
      </li>

      <li>
        {" "}
        <a href={file5} target="_blank" className={classes.anchor}>
          Логарифмы
        </a>
      </li>

      <li>
        {" "}
        <a href={file6} target="_blank" className={classes.anchor}>
          Метод интервалов
        </a>
      </li>

      <li>
        {" "}
        <a href={file7} target="_blank" className={classes.anchor}>
          метод рационализации
        </a>
      </li>
    </ul>
  );
}
