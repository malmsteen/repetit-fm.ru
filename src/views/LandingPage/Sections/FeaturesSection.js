import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'

import { ReactComponent as physicsIcon } from '../../../pendulum.svg'
import expoVideo from 'assets/video/MovingFrame.mp4'
import styles from './featuresStyle.js'
import { List, ListItem } from '@material-ui/core'
const useStyles = makeStyles(styles)

export default function FeaturesSection () {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Как проходит обучение</h2>
      <GridContainer className={classes.studyGrid} justify='center'>
        <GridItem xs={12} sm={12} md={4}>
          <List>
            {[
              [
                '/ Определение уровня',
                'С первых занятий мы определим уровень и наметим индивидуальную программу занятий.'
              ],
              [
                '/ Индивидуальные занятия',
                'Для тех, кто хочет понять математику глубже, подготовиться к экзаменам, индивидуальные занятия в дополнение к самостоятельной работе будут самым подходящим форматом.'
              ],
              [
                '/ Домашние задания',
                'Будет много в том числе самостоятельной работы. Я буду проверять, давать советы и рекомендации, оценивать решения с точки зрения эксперта.'
              ],
              [
                '/ Доказываем и пользуемся',
                'За редким исключением доказываем все факты и теоремы, всплывающие в задачах. Так постепенно становится ясно, что откуда берется и как работает, из деталей строится картина, понимание структуры предмета становится все шире и полнее, развивается системное и критическое мышление.'
              ]
            ].map(item => (
              <ListItem>
                <div>
                  <h4 className={classes.aboutStudy}>{item[0]}</h4>
                  <p className={classes.description}>{item[1]}</p>
                </div>
              </ListItem>
            ))}
          </List>
        </GridItem>
        <GridItem xs={12} sm={12} md={4} className={classes.centerVideo}>
          <div className={classes.videoBG}></div>
          <video
            className={classes.featuresVideo}
            src={expoVideo}
            type='video/mp4'
            width='100%'
            // autoplay
            // playsinline
            controls
            muted
            loop
          ></video>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <List>
            {[
              [
                '/ Большая подборка задач ',
                'Решим из наработанного списка около 200 задач, собранных по всем темам ЕГЭ прошлых лет, по возможности не однотипных для демонстрации различных идей и методов.'
              ],
              [
                '/ Решение различными способами',
                'Такой подход развивает мышление и умение решать задачи в принципе, расширяет арсенал ученика, учит подходить к задаче с разных сторон.'
              ],
              [
                '/ Оформление решения',
                'Учу оформлять решения задач согласно критериям проверки, исчерпывающие и достаточно подробные.'
              ],
              [
                '/ Прочее и не менее важное',
                'Если вы студент и готовитесь к экзаменам в ВУЗе, если вы счастливый взрослый, имеющий возможность избирательно подходить к обучению и, например, сдаете GMAT, повышаете квалификацию или просто хотите понять математику глубже, буду рад с вами заниматься.'
              ]
            ].map(item => (
              <ListItem>
                <div>
                  <h4 className={classes.aboutStudy}>{item[0]}</h4>
                  <p className={classes.description}>{item[1]}</p>
                </div>
              </ListItem>
            ))}
          </List>
        </GridItem>
      </GridContainer>
    </div>
  )
}
