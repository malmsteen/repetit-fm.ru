from os import listdir
from os.path import isfile, join
from jinja2 import Template
import codecs

onlyfiles = [f for f in listdir("../../assets/docs")
             if isfile(join('../../assets/docs', f))]
n = (len(onlyfiles))

tmpl = Template("""
    {% for i in range(n) %}
    <li>
        {" "}
        <a href={ {{varnames[i]}} } target="_blank" className={classes.anchor}>
            {{filenames[i].replace('.pdf', '')}}
        </a>
    </li>
    {% endfor %}
""")

filenames = []
with codecs.open('FileList.js', 'w', 'utf-8') as fw:
    fw.write("""import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/mathPageSections/mathSectionStyle.js";

""")
    for i in range(len(onlyfiles)):
        filenames.append('file' + str(i))
        text = onlyfiles[i] + '";' + '\n'
        fw.write('import file' + str(i) + ' from "assets/docs/' + text)
    fw.write("""

const useStyles = makeStyles(styles);
            
export default function  FileList() {

const classes = useStyles();
return(
    <ul className={classes.uList}>
    """)
    fw.write(tmpl.render(
        varnames=filenames,
        filenames=onlyfiles,
        n=n
    ))
    fw.write("""</ul>
    );
}
    """)
