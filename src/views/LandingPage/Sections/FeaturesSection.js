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
                'Для тех, кто хочет понять математику и максимально эффективно подготовиться к экзаменам, индивидуальные занятия будут самым подходящим форматом.'
              ],
              [
                '/ Домашние задания',
                'Будет много в том числе самостоятельной работы. А буду проверять, давать советы и рекомендации, оценивать решения с точки зрения эксперта.'
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
            autoPlay
            loop
          ></video>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <List>
            {[
              [
                '/ Большая подборка задач ',
                'Решим из наработанного списка около 200 задач, собранных по всем темам ЕГЭ прошлых лет'
              ],
              [
                '/ Домашние задания',
                'Будет много в том числе самостоятельной работы. А буду проверять, давать советы и рекомендации, оценивать решения с точки зрения эксперта.'
              ],
              ['/ Решени различными способами', 'Да, это всегда заебись']
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
