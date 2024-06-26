import codecs
import json
import pickle
import regex as re
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)


def save_obj(obj, name):
    with open(name, 'wb') as f:
        pickle.dump(obj, f, pickle.HIGHEST_PROTOCOL)


parts = {'algebra': 'Алгебра',
         'eq_ineq': 'Уравнения и неравенства',
         'functions': 'Функции',
         'calculus': 'Начала математического анализа',
         'geometry': 'Геометрия',
         'probability': 'Элементы комбинаторики, статистики и теории вероятностей'
         }

url = "http://ege.fipi.ru/os11/xmodules/qprint/openlogin.php?proj=AC437B34557F88EA4115D2F374B0A07B"
# url = "https://repetit.ru/teacher/orders.aspx"
driver.get(url)

# delay = 3 # seconds
# try:
#     element = WebDriverWait(driver, 5).until(
#         EC.presence_of_element_located((By., "myDynamicElement"))
#     )
# finally:
#     driver.quit()

# driver.get("https://techwithtim.net")

# link = driver.find_element_by_link_text("Открытый банк заданий ЕГЭ")
# print(link)
# link.click()


# prof = driver.find_element_by_css_selector('#content-tab2 > div:nth-child(2) > div.t-text.t-text_sm > ul > li:nth-child(2) > a')
# # print(prof)
# prof.click()

fipi_old_math = {}


def checktype(html):
    if re.search('Най.*все значени', html):
        ptype = 18
    elif re.search('уравнение', html):
        ptype = 13
    elif re.search('докажите|доказать', html, re.IGNORECASE) and re.search('пирамид|конус|тетр|цилиндр|призм|параллелепипед|куб', html):
        ptype = 14
    elif re.search('неравенство', html):
        ptype = 15
    elif re.search('докажите|доказать', html, re.IGNORECASE) and re.search('треуг|четырехуг|прямоугольник|квадрат|трапец|параллелограмм|окружност|ромб', html):
        ptype = 16
    elif re.search('а\\)', html) and re.search('б\\)', html) and not re.search('докажите|доказать', html, re.IGNORECASE):
        ptype = 19
    elif re.search('кредит|долг|вклад|депозит|заводов|фонд|выплат', html):
        ptype = 17
    else:
        ptype = None
    return ptype


def construct_problem_dict(elem):
    if elem.get_attribute('bgcolor') == "#F0F0F0":
        html = elem.get_attribute('innerHTML')
    else:
        return None
    if re.search('MJXp|data-mathml', html) or not re.search('<math.*?>.*?</math.*?>', html):
        html = re.sub('m:|<span .+?>.*?(</span>)+', '', html)
        html = re.sub('(<span>)+(</span>)+', '', html)

    text_str = re.findall('([ЁёА-я]+[^<]*)', html)
    mix = re.findall('<math.*?>.*?</math.*?>|(?<=>\s*)[^<]{2,}?(?=<\s*)', html)
    mix = [re.sub('\\"(true|left)\\"', '"\\1"', it) for it in mix]
    mix = [re.sub('(?<=mix.*)(?<=>)\{', '&#123;', it) for it in mix]

    ptype = checktype(html)
    formulas = elem.find_elements_by_tag_name('math')
    imgsrc = elem.find_element_by_tag_name('img').get_attribute(
        'src') if re.search('img', html) else None
    math = re.findall('<math.*?>.*?</math.*?>', html)
    if ptype in {i for i in range(13, 20)}:
        return {'type': ptype,
                #         'action': elem.text if ptype in {13, 15, 18} else None,
                # 'text':elem.get_attribute('innerHTML'),
                # 'strings': text_str,
                'math': math,
                'text': '<div>' + elem.text + '</div>',
                'mix': '<div>' + ' '.join(mix) + '</div>',
                # 'imgsrc': imgsrc,
                'html': elem.get_attribute('innerHTML') if ptype == 17 and imgsrc == None else None}
    return


for eng, rus in parts.items():
    print(rus)
    theme_link = driver.find_element_by_link_text(rus)
    theme_link.click()
    # try:
    #   WebDriverWait(driver).until(EC.presence_of_element_located((By.CLASS_NAME, 'math')))
    #   print('page is ready')
    # except:
    #   print('time out')
    problems_on_page = driver.find_elements_by_css_selector(".cell_1 td")
    problems_on_page = [construct_problem_dict(i) for i in problems_on_page]
    fipi_old_math[eng] = problems_on_page

    link_nums = [i.text for i in driver.find_elements_by_css_selector(".Walk")]
    link_nums = link_nums[:len(link_nums)//2]
    # print(link_nums[5])
    for num in link_nums:
        print(num)
        link = driver.find_element_by_link_text(num)
        # print(link)
        link.click()
        problems_on_page = driver.find_elements_by_css_selector(".cell_1 td")
        fipi_old_math[eng] += [construct_problem_dict(i)
                               for i in problems_on_page]

for key in parts:
    for li in fipi_old_math[key]:
        if li == None:
            del li
# re.sub('(,\s*null\s*)+','', d_write)
d_write = json.dumps(fipi_old_math, ensure_ascii=False,
                     indent=2).encode('utf8')
with codecs.open('fipi_old_math_problems_upg.json', 'bw', 'utf-8') as fw:
    fw.write(d_write.decode())

# for i in problem:
#   print(i.get_attribute('innerHTML'))
# select = driver.find_elements_by_link_text("Профильный уровень")
# select.click()
# search = driver.find_element_by_name('s')
# search.send_keys("test")
# search.send_keys(Keys.RETURN)

# time.sleep(5)

# driver.quit()
# driver.quit()
