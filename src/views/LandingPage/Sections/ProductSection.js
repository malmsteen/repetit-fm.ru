import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import Chat from '@material-ui/icons/Chat'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import Fingerprint from '@material-ui/icons/Fingerprint'
import { ReactComponent as MathIcon } from '../../../fx.svg'
import { ReactComponent as physicsIcon } from '../../../pendulum.svg'
import { ReactComponent as expertIcon } from '../../../einstein.svg'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'

import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js'

const useStyles = makeStyles(styles)

export default function ProductSection () {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>О проекте</h2>
          <h5 className={classes.description}>
            За время подготовки к занятиям у меня накопилось большое количество
            материалов - статей и подборок задач, которые я собираю и составляю
            сам, литература которую я использую и рекомендую учащимся. На этом
            сайте я буду рад ими с вами поделиться. Возможно вам их будет
            достаточно, если вы предпочитаете заниматься самостоятельно. Либо вы
            можете записаться ко мне на занятия. Работаю я как онлайн, так и
            оффлайн.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Математика'
              description='Подготовка к олимпиадам, к ЕГЭ и ОГЭ, к дополнительным вступительным испытаниям в МГУ, повышение уровня'
              icon={MathIcon}
              iconColor='rose'
              vertical
            />
            {/* <MathIcon/> */}
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='Физика'
              description='Подготовка к олимпиадам, к ЕГЭ и ОГЭ, повышение уровня'
              icon={physicsIcon}
              iconColor='success'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title='занятия с экспертом ЕГЭ'
              description='Разбор основных ошибок, приемы решения задач, контрольные работы и обратная связь'
              icon={expertIcon}
              iconColor='success'
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
