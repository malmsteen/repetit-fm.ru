import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// import Carousel from 'react-bootstrap/Carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

// import 'bootstrap/dist/css/bootstrap.min.css'
import styles from 'assets/jss/material-kit-react/views/landingPageSections/testimonialsStyle.js'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'

import { IconButton } from '@material-ui/core'

const useStyles = makeStyles(styles)

// import Carousel from 'nuka-carousel'

// export default function Testimonials () {
//     return (
//       <Carousel>
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
//       </Carousel>
//     );
//   }

// export default function Testimonials () {
//   const classes = useStyles()
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <h2 className={classes.description}>
//           My dog used to be so lonely, but with TinDog's help, they've found the
//           love of their life. I think.
//         </h2>

//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className='d-block w-100' src={bg2} alt='Second slide' />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className='d-block w-100' src={bg3} alt='Third slide' />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   )
// }

export default function Testimonials () {
  const classes = useStyles()
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    // width: 30,
    // height: 30,
    cursor: 'pointer'
  }
  const indicatorStyles = {
    background: '#fff',
    width: 8,
    height: 8,
    boxShadow:
      '0 1px 1px 1px rgba(0, 0, 0, 0.14), 0 2px 2px 2px rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.2)',
    display: 'inline-block',
    margin: '0 8px'
  }
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Отзывы</h2>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        useKeyboardArrows
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <IconButton
              type='button'
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
            >
              <ArrowBackIos />
            </IconButton>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <IconButton
              type='button'
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15 }}
            >
              <ArrowForwardIos />
            </IconButton>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{ ...indicatorStyles, background: '#000' }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            )
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role='button'
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          )
        }}
      >
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
          <div className={classes.testimonial}>
            <h5 className={classes.description}>{item[0]}</h5>
            <p className={classes.name}>{item[1]}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
