from bs4 import BeautifulSoup
import requests
import regex as re
import codecs
import json
import pickle

url = 'https://ege.sdamgia.ru/methodist'
url = 'http://ege.fipi.ru/os11/xmodules/qprint/index.php?proj=AC437B34557F88EA4115D2F374B0A07B'
# url = 'http://ege.fipi.ru/os11/xmodules/qprint/index.php?proj_guid=AC437B34557F88EA4115D2F374B0A07B&theme_guid=5267eafa9441e311a707001fc68344c9&md=qprint&groupno=1'
page = requests.get(url)
print(page.status_code)
soup = BeautifulSoup(page.text, "html.parser")
links = soup.find_all('a')

print(soup)



# for link in no15:
#     page = requests.get(probsInYear[link])
#     soup = BeautifulSoup(page.text, "html.parser")
#     egeNo = re.findall('\\b\d{2}\\b', soup.find('h3').string)[0]
#     year = re.findall('\d{4}', soup.find('h3').string)[0]
#     arr = soup.find_all(class_="pbody")
#     probList = soup.select(".prob_list a")
#     alts = soup.find_all(alt=True)
#     for j, item in enumerate(arr):
#         problems.append({'year': int(year),
#                          'link': probList[j].get('href'),
#                          #  'src': [alts[2*j]['src'], alts[2*j+1]['src']],
#                          #  'alt': [alts[2*j]['alt'], alts[2*j+1]['alt']]
#                          #  'alt': item.img['alt'],
#                          'text': str(item.contents[0].text)}
#                         )
#     number_of_problems +=len(arr)
#     print(number_of_problems, len(arr), probsInYear[link])
# problems = {no2topic[str(position)]: problems}
# print(probList)
# problems['economy'][] =

# print(type(problems))

# outFileName = f'Problem {egeNo}tmp.json'
# with open(outFileName, 'w', encoding='utf-8') as ff:
#     j = json.dumps(problems, ensure_ascii=False)
#     ff.write(j)


# print(f'\'{outFileName}\' has been written ')
