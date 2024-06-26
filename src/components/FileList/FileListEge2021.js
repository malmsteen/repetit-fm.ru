import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/mathPageSections/mathSectionStyle.js";

import file0 from "assets/docs/ЕГЭ 2021/Задачи ЕГЭ 2021.pdf";


const useStyles=makeStyles(styles);

export default function FileListEge2021() {

const classes=useStyles();
return(
    <ul className={classes.uList} > 
    
    <li>
        {" "}
        <a href={ file0 } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            Задачи ЕГЭ 2021
        </a>
    </li>
    </ul>
        );
    }
        