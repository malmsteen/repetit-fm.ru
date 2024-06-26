import regex as re
import mmap
import codecs
import json

file_to_read = 'fipi_old_math_problems_upg.json'
with codecs.open(file_to_read, 'r', 'utf-8') as fr:
  content = fr.read()
  
replaced = re.sub('(?<=mix.*?)\\"(left|true|false)\\"', '"\\1"', content)
replaced = re.sub('(?<=mix": )"(.*)"', '\\1', replaced)
replaced = re.sub('(?<=mix.*?>)\{', '&#123;', replaced)
replaced = re.sub('(?<!: )null,?','', replaced)

replaced =f"""import React from 'react'

const math_old_fipi = {replaced}

export default math_old_fipi
"""

with codecs.open('fipi_old_math_problems_upg.js', 'bw', 'utf-8') as fw:
  content = fw.write(replaced)