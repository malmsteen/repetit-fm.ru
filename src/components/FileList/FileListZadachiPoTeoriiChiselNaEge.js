import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/mathPageSections/mathSectionStyle.js";

import file0 from "assets/docs/Задачи по теории чисел на ЕГЭ/Задачи по теории чисел.pdf";
import file1 from "assets/docs/Задачи по теории чисел на ЕГЭ/Задачи по теории чисел 2020.pdf";
import file2 from "assets/docs/Задачи по теории чисел на ЕГЭ/Задачи по теории чисел 2019.pdf";
import file3 from "assets/docs/Задачи по теории чисел на ЕГЭ/Задачи по теории чисел 2018.pdf";
import file4 from "assets/docs/Задачи по теории чисел на ЕГЭ/Задачи по теории чисел 2017.pdf";
import file5 from "assets/docs/Задачи по теории чисел на ЕГЭ/Задачи по теории чисел 2016.pdf";
import file6 from "assets/docs/Задачи по теории чисел на ЕГЭ/Задачи по теории чисел 2015.pdf";
import file7 from "assets/docs/Задачи по теории чисел на ЕГЭ/Задачи по теории чисел 2014.pdf";
import file8 from "assets/docs/Задачи по теории чисел на ЕГЭ/Задачи по теории чисел 2013.pdf";


const useStyles=makeStyles(styles);

export default function FileListZadachiPoTeoriiChiselNaEge() {

const classes=useStyles();
return(
    <ul className={classes.uList} > 
    
    <li>
        {" "}
        <a href={ file0 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задачи по теории чисел
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file1 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задачи по теории чисел 2020
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file2 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задачи по теории чисел 2019
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file3 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задачи по теории чисел 2018
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file4 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задачи по теории чисел 2017
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file5 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задачи по теории чисел 2016
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file6 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задачи по теории чисел 2015
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file7 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задачи по теории чисел 2014
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file8 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задачи по теории чисел 2013
        </a>
    </li>
    </ul>
        );
    }
        