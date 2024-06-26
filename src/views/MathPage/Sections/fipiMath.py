import regex as re
import mmap
import codecs
import json

with codecs.open('fipiMathProf_copy.json', 'r', 'utf-8') as ff:
    d = json.load(ff)
    r = ff.read()    

# out = re.findall('ShowPictureQ\([^d]*.*?\.(png|gif)', r)
# for i in out:
#     print (i)
# print(len(out))
# k=0
# for item in d:
#     if item['levelName'] != "Базовый" and not re.findall('math', item['taskText']):
#         print(item['levelName'],item['taskText'])
#         k+=1
# print(k)
    
for item in d:
    item.pop('html', None)    
    item['imgLink'] = 'http://os.fipi.ru/' + re.findall('docs.*?\.\\w{3}', item['taskText'])[0] \
        if re.findall('docs.*?\.\\w{3}', item['taskText']) else None
    item['taskText'] = re.sub('(</?span.*?>)','',item['taskText'])
    item['taskText'] = re.sub(' <p align.*?script.*?</p>  ','', item['taskText'])
    
tmp = json.dumps(d, ensure_ascii=False, indent=2).encode('utf8')
with codecs.open(f'fipiMathProf_copy.json', 'w', 'utf-8') as fw:
    fw.write(tmp.decode())
