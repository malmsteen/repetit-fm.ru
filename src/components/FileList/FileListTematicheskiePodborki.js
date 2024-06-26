import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/mathPageSections/mathSectionStyle.js";

import file0 from "assets/docs/Тематические подборки/Экономические задачи на ЕГЭ.pdf";
import file1 from "assets/docs/Тематические подборки/Уравнения с модулем.pdf";
import file2 from "assets/docs/Тематические подборки/Неравенства с модулем.pdf";
import file3 from "assets/docs/Тематические подборки/Метод рационализации.pdf";
import file4 from "assets/docs/Тематические подборки/Метод интервалов.pdf";
import file5 from "assets/docs/Тематические подборки/Логарифмы.pdf";
import file6 from "assets/docs/Тематические подборки/Иррациональные уравнения и неравенства.pdf";


const useStyles=makeStyles(styles);

export default function FileListTematicheskiePodborki() {

const classes=useStyles();
return(
    <ul className={classes.uList} > 
    
    <li>
        {" "}
        <a href={ file0 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Экономические задачи на ЕГЭ
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file1 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Уравнения с модулем
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file2 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Неравенства с модулем
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file3 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Метод рационализации
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file4 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Метод интервалов
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file5 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Логарифмы
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file6 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Иррациональные уравнения и неравенства
        </a>
    </li>
    </ul>
        );
    }
        