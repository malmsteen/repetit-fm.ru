import React, { useContext } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Divider from '@material-ui/core/Divider'
import { myContext } from '../MathPage'

// @material-ui/icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
//mailchimp
//API key
//0e1ed720fd787d91e2cc2f1ed7e83029-us1
//list id
//81e777fc60
import { ReactComponent as expertIcon } from '../../../einstein.svg'
import FileListEkonomicheskieZadachiNaEge from 'components/FileList/FileListEkonomicheskieZadachiNaEge.js'
import FileListUravnenijaNaEge from 'components/FileList/FileListUravnenijaNaEge.js'
import FileListTematicheskiePodborki from 'components/FileList/FileListTematicheskiePodborki.js'
import FileListStereometrijaNaEge from 'components/FileList/FileListStereometrijaNaEge.js'
import FileListPrezentatsii from 'components/FileList/FileListPrezentatsii.js'
import FileListPlanimetrijaNaEge from 'components/FileList/FileListPlanimetrijaNaEge.js'
import FileListNeravenstvaNaEge from 'components/FileList/FileListNeravenstvaNaEge.js'
import FileListZadachiSParametramiNaEge from 'components/FileList/FileListZadachiSParametramiNaEge.js'
import FileListZadachiPoTeoriiChiselNaEge from 'components/FileList/FileListZadachiPoTeoriiChiselNaEge.js'
import FileListEge2021 from 'components/FileList/FileListEge2021.js'
import FileListDviMgu from 'components/FileList/FileListDviMgu.js'

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'

// import $ from 'jquery'
// import Geogebra from "components/Geogebra.js";
// import fileList from "fileList.js"

import styles from 'assets/jss/material-kit-react/views/mathPageSections/mathSectionStyle.js'
import Problems from './Problems.js'
// import Geogebra from 'components/Geogebra'

const useStyles = makeStyles(styles)
const accordStyles = makeStyles({
  root: {
    boxShadow: 'none',
    backgroundColor: '#fdf6e3',
    paddingBottom: '0px'
  }
})

// var params = {
//   appName: 'graphing',
//   width: 800,
//   height: 600,
//   showToolBar: true,
//   showAlgebraInput: true,
//   showMenuBar: true
// }
// var ggbApplet = new GGBApplet(params, true)
// window.addEventListener('load', function () {
//   ggbApplet.inject('ggb-element')
// })

export default function MathSection (props) {
  const accordSty = accordStyles()
  // console.log(props.filteredProblems)
  const [isSearch] = useContext(myContext)
  return (
    <div>
      {isSearch ? (
        <GridContainer>
          <GridItem>
            <Problems problems={props.filteredProblemList} />
          </GridItem>
        </GridContainer>
      ) : (
        <GridContainer>
          {[
            ['Уравнения на ЕГЭ', <FileListUravnenijaNaEge />],
            ['Стереометрия на ЕГЭ', <FileListStereometrijaNaEge />],
            ['Неравенства на ЕГЭ', <FileListNeravenstvaNaEge />],
            ['Планиметрия на ЕГЭ', <FileListPlanimetrijaNaEge />],
            [
              'Экономические задачи на ЕГЭ',
              <FileListEkonomicheskieZadachiNaEge />
            ],
            [
              'Задачи с параметрами на ЕГЭ',
              <FileListZadachiSParametramiNaEge />
            ],
            [
              'Задачи по теории чисел на ЕГЭ',
              <FileListZadachiPoTeoriiChiselNaEge />
            ],
            ['Презентации', <FileListPrezentatsii />],
            ['Дополнительные вступительные испытания МГУ', <FileListDviMgu />]
          ].map(item => (
            <GridItem xs={12} sm={12} md={4}>
              <Accordion className={accordSty.root}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  {item[0]}
                </AccordionSummary>
                <AccordionDetails>{item[1]}</AccordionDetails>
              </Accordion>
            </GridItem>
          ))}
          <GridItem xs={12} sm={12} md={4}>
            <Accordion className={accordSty.root} expanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Тематические подборки
              </AccordionSummary>
              <AccordionDetails>
                <FileListTematicheskiePodborki />
              </AccordionDetails>
            </Accordion>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} style={{ marginBottom: '160px' }}>
            <Accordion className={accordSty.root} expanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                ЕГЭ 2021
              </AccordionSummary>
              <AccordionDetails>
                <FileListEge2021 />
              </AccordionDetails>
            </Accordion>
          </GridItem>
          {/* <GridItem>
          <div id='ggb-element'></div>
          <Geogebra />
        </GridItem> */}
        </GridContainer>
      )}
    </div>
  )
}
