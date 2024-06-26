import pathlib
import os
from os.path import isfile, join
from jinja2 import Template
import codecs
import regex as re
from transliterate import translit, get_available_language_codes

# dirname = "../../assets/docs/" + directory

# dirname = dirname.replace("\\", "/")
#dirname = dirname.replace(" ", "\ ")
#dirname = dirname.replace("\\", "/")
# dirname = dirname.replace("c:", "/c")
# dirname = re.sub("(\w+\s\w+)", "'\\1'", dirname)

# print(filesInDir)

listTmpl = Template("""
    {% for i in range(n) %}
    <li>
        {" "}
        <a href={ {{file[i]}} } target="_blank" rel="noopener noreferrer" className={classes.anchor}>
            {{filenames[i].replace('.pdf', '')}}
        </a>
    </li>
    {% endfor %}
""")

def genFileList(dirname):
    mypath = f'../../assets/docs/{dirname}'
    filesInDir = [f for f in reversed(os.listdir(mypath))
              if isfile(join(mypath, f))]
    # print(dirname, filesInDir)

    toImport = []
    JSfilename = 'FileList' + re.sub(' ', '', translit(dirname, reversed=True).title())
    with codecs.open(f'{JSfilename}.js', 'w', 'utf-8') as fw:
        fw.write("""import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/mathPageSections/mathSectionStyle.js";\n\n""")
        for i, name in enumerate(filesInDir):
            toImport.append(f'file{i}')
            fw.write(f'import file{i} from \"assets/docs/{dirname}/{name}\";\n')
        fw.write("""

const useStyles=makeStyles(styles);

export default function """ + JSfilename + """() {

const classes=useStyles();
return(
    <ul className={classes.uList} > """)
        fw.write(listTmpl.render(
            file=toImport,
            filenames=filesInDir,
            n=(len(filesInDir))
        ))
        fw.write("""</ul>
        );
    }
        """)

with codecs.open('../../views/MathPage/Sections/Mathsection.js', 'r', 'utf-8') as fr:
    data = fr.readlines()

for k, dirname in enumerate(os.listdir("../../assets/docs/")):
    # print(dirname)
    genFileList(dirname)
    trans = 'FileList' + re.sub(' ', '', translit(dirname, reversed=True).title())
    data.insert(17, f'import {trans} from \"components/FileList/{trans}.js\";\n' )

with codecs.open('../../views/MathPage/Sections/Mathsection.js', 'w', 'utf-8') as fw:
    fw.writelines(data)
