import React from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'

import image1 from 'assets/img/bg.jpg'
import image2 from 'assets/img/bg2.jpg'
import image3 from 'assets/img/bg3.jpg'

import styles from 'assets/jss/material-kit-react/views/landingPageSections/testimonialsStyle.js'

const useStyles = makeStyles(styles)

export default function SectionCarousel () {
  const classes = useStyles()
  const settings = {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '60px',
    adaptiveHeight: true
  }
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {[
                  [
                    '"Евгений Владимирович - специалист великолепный. Он знаток своего дела. Очень быстро нашел верный подход к сыну. Сейчас у ребенка заканчивается подготовка к ЕГЭ по математике. Игорь будет сдавать профильный уровень. На пробных тестах он показал более высокий результат, чем был раньше. Так что репетитора можно смело рекомендовать всем, кому нужно толково и эффективно подготовиться к экзамену."',
                    'Максим'
                  ],
                  [
                    '"Мы всем довольны, спасибо большое Евгению Владимировичу. Была цель сдать профильную математику хотя бы на 80 баллов (получалось только на 70), сдали на 86."',
                    'Александра'
                  ],
                  [
                    '"Очень компетентный преподаватель, Егору понравилось с ним заниматься. И результат у него был, то есть все темы, которые ему были непонятны, были объяснены достаточно быстро и доступно."',
                    'Анна'
                  ],
                  [
                    '"Очень понятно объясняет человек, достаточно открытый, приятно учиться. Я начал понимать все аспекты математического анализа, которые раньше не понимал. Желаемых результатов достиг."',
                    'Петр'
                  ],
                  [
                    '"Было 1-2 занятия. Нужно было нагнать несколько тем, которые ребенок пропустил. Все рассказал, показал, объяснил, все четко, конкретно, в тему. Сын материал понял и остался очень доволен."',
                    'Людмила'
                  ],
                  [
                    '"Замечательно прошли занятия. Приятный человек, хорошо объясняет."',
                    'Евгений'
                  ],
                  [
                    '"Все было хорошо, сыну заниматься нравилось, сдал зачет."',
                    'Ирина'
                  ],
                  [
                    '"Впечатление очень хорошее. Ребенок говорит, что репетитор объясняет понятно, ему все нравится. Педагог приходит вовремя, если он задерживается, то всегда предупреждает, и потом отрабатывает это время."',
                    'Людмила'
                  ],
                  [
                    '"Отзывы только положительные, репетитор хорошо все объясняет. Ребенок доволен, оценка по предмету улучшилась."',
                    'Евгения'
                  ],
                  [
                    '"Очень компетентный преподаватель. Прекрасно находит контакт с детьми. Может заинтересовать и доходчиво объяснить материал."',
                    'Игорь'
                  ],
                  ['"Грамотный, внимательный преподаватель."', 'Юлия']
                ].map(item => (
                  <div>
                    <div className={classes.testimonial}>
                      <h5 className={classes.description}>{item[0]}</h5>
                      <p className={classes.name}>{item[1]}</p>
                    </div>
                  </div>
                ))}
                {/* <div>
                  <img src={image1} alt='First slide' className='slick-image' />
                  <div className='slick-caption'>
                    <h4>
                      <LocationOn className='slick-icons' />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt='Second slide'
                    className='slick-image'
                  />
                  <div className='slick-caption'>
                    <h4>
                      <LocationOn className='slick-icons' />
                      Somewhere Beyond, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt='Third slide' className='slick-image' />
                  <div className='slick-caption'>
                    <h4>
                      <LocationOn className='slick-icons' />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div> */}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
