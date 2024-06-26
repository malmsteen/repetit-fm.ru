import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/mathPageSections/mathSectionStyle.js";

import file0 from "assets/docs/Презентации/Задание 17. Вклады и кредиты.pdf";
import file1 from "assets/docs/Презентации/Задание 16. Планиметрия. Презентация.pdf";
import file2 from "assets/docs/Презентации/Задание 15. Показательные и логарифмические неравенства.pdf";


const useStyles=makeStyles(styles);

export default function FileListPrezentatsii() {

const classes=useStyles();
return(
    <ul className={classes.uList} > 
    
    <li>
        {" "}
        <a href={ file0 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задание 17. Вклады и кредиты
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file1 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задание 16. Планиметрия. Презентация
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file2 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задание 15. Показательные и логарифмические неравенства
        </a>
    </li>
    </ul>
        );
    }
        