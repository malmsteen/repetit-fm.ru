import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/mathPageSections/mathSectionStyle.js";

import file0 from "assets/docs/Экономические задачи на ЕГЭ/Экономические задачи.pdf";
import file1 from "assets/docs/Экономические задачи на ЕГЭ/Экономические задачи 2020.pdf";
import file2 from "assets/docs/Экономические задачи на ЕГЭ/Экономические задачи 2019.pdf";
import file3 from "assets/docs/Экономические задачи на ЕГЭ/Экономические задачи 2018.pdf";
import file4 from "assets/docs/Экономические задачи на ЕГЭ/Экономические задачи 2017.pdf";
import file5 from "assets/docs/Экономические задачи на ЕГЭ/Экономические задачи 2016.pdf";
import file6 from "assets/docs/Экономические задачи на ЕГЭ/Экономические задачи 2015.pdf";


const useStyles=makeStyles(styles);

export default function FileListEkonomicheskieZadachiNaEge() {

const classes=useStyles();
return(
    <ul className={classes.uList} > 
    
    <li>
        {" "}
        <a href={ file0 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Экономические задачи
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file1 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Экономические задачи 2020
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file2 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Экономические задачи 2019
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file3 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Экономические задачи 2018
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file4 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Экономические задачи 2017
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file5 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Экономические задачи 2016
        </a>
    </li>
    
    <li>
        {" "}
        <a href={ file6 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Экономические задачи 2015
        </a>
    </li>
    </ul>
        );
    }
        