import React, { useState } from 'react'

// import { MathComponent } from 'mathjax-react'
// import fipimath from './fipiMathProf_copy.js'
// import math_fipi_old from './fipi_old_math_problems_upg.js'

import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
import { Block, Textsms } from '@material-ui/icons'
import planeGeometry from './problem16.js'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem } from '@material-ui/core'
import { Paper } from '@material-ui/core'

import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
// import 'katex/dist/katex.css'
// import styles from './problemsSection.js'

const Mathml2latex = require('mathml-to-latex')

const mathitStyles = makeStyles({
  root: {
    marginRight: '-10px'
  },
  problem: {
    marginBottom: '10px',
    padding: '10px 10px 10px 10px',
    paddingLeft: '30px',
    '@media (max-width: 768px)': {
      paddingLeft: '5px'
    }
  },
  ol: {
    margin: '0 0 .5em',
    padding: '0',
    counterReset: 'item'
  },
  li: {
    margin: '0',
    padding: '0 0 0 .5em',
    textIndent: '-1.7em',
    listStyleType: 'none',
    counterIncrement: 'item',
    '&:before': {
      display: 'inline-block',
      width: '1em',
      paddingRight: '0.5em',
      fontWeight: 'bold',
      textAlign: 'right',
      content: 'counter(item) "."'
    }
  },
  post__tag: {
    padding: '0 6px',
    borderRadius: '5px',
    backgroundColor: 'orange',
    color: 'white',
    fontSize: 'small'
  },
  post__tagContainer: {
    marginLeft: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px'
  }
})
function delEnumerate (text) {
  var re = new RegExp('\\.*?({.*?}|item)', 'g')
  const tmp = text.replace(/\\(begin|end|item)/g, '')
  return tmp.replace(/\{.*?\}/g, '')
  // return text.replace(/\\.*?(\{.*?\}|item)/g, '')
}

export default function Problems (props) {
  const classes = mathitStyles()
  // console.log(props.problems)

  function displayProblem (text) {
    const inilineTex = text.matchAll(/\$(.*?)\$/g)
    // const displayTex = text.matchAll(/\\[(.*?)\\]/g)
    for (var i in inilineTex) {
      console.log(i)
    }

    // console.log(inilineTex)
    const splitText = delEnumerate(text).split(/\$.*?\$/)

    const texs = Array.from(inilineTex).map(t => t[1])

    const out = []
    for (let i = 0; i < texs.length; i++) {
      out.push(splitText[i])
      out.push(texs[i])
    }
    out.push(splitText[splitText.length - 1])
    // if (displayTex) {
    //   return out.map((t, ind) => (
    //     <span>{ind % 2 == 0 ? t : <BlockMath>{t}</BlockMath>}</span>
    //   ))
    // } else {
    return out.map((t, ind) => (
      <span>{ind % 2 === 0 ? t : <InlineMath math={t} />}</span>
    ))
  }
  return (
    <div style={{ color: 'black' }}>
      {/* Очень любим книжки
      <InlineMath math='\text{ некоторый текст} \int_0^\infty x^2 dx  p_1 V_1 = p_2 V_2' />
      <InlineMath math='\log_5^2(25-x^2)-3\log_5(25-x^2) + 23 \ge 0' />
      Очень любим книжки
      <BlockMath>
        {String.raw`\text{еще текст, но он бл жирный} \int_0^\infty x^2 dx \int_0^\infty x^2 dx`}
      </BlockMath>
      <BlockMath>\log_5^2(25-x^2)-3\log_5(25-x^2) + 23 \geqslant 0</BlockMath>
      <BlockMath>
        {String.raw`\begin{cases}
        \frac{1}{x^2} \log_5^2(25-x^2)-3\log_5(25-x^2) + 23 \geqslant 0, \\
        \frac{1}{x^3} \log_5^2(25-x^2)-3\log_5(25-x^2) + 23 == 0
        \end{cases}`}
      </BlockMath>
      {String.raw` When Когда \(a \ne 0 \Delta ABC\), there are two solutions to \(ax^2 + bx + c = 0\) and they are \(x = \pm \frac{1}{2}\) \(x^3-4x^2 - \sqrt{x^2-1} \cdot 3^x \geqslant \frac{1}{x} \)`}
      {String.raw`\(\int_0^1 \frac{x^2}{\sqrt{x^3-1}}\ dx\)`}
      <math>
        <mi>a</mi>
        <msup>
          <mi>x</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo> <mi>b</mi>
        <mi>x</mi>
        <mo>+</mo> <mi>c</mi> <mo>=</mo> <mn>0</mn>
      </math>
      <BlockMath>
        {Mathml2latex.convert(
          '<math><mstyle> <semantics> <mrow> <msubsup> <mrow> <mi>\\log</mi> </mrow> <mn>365</mn> <mn>2</mn> </msubsup> <mrow><mo>(</mo> <mrow> <mn>25</mn><mo>&#x2212;</mo><msup> <mi>x</mi> <mn>2</mn> </msup> </mrow> <mo>)</mo></mrow><mo>&#x2212;</mo><mn>3</mn><msubsup> <mrow> <mi>\\log</mi> </mrow> <mn>5</mn> <mn></mn> </msubsup> <mrow><mo>(</mo> <mrow> <mn>25</mn><mo>&#x2212;</mo><msup> <mi>x</mi> <mn>2</mn> </msup> </mrow> <mo>)</mo></mrow><mo>+</mo><mn>2</mn><mo>&#x2265;</mo><mn>0</mn> </mrow>  </semantics> </mstyle></math>'
        )}
      </BlockMath>
      <p>'Хоп хей лалалей' </p>
      <BlockMath>
        {Mathml2latex.convert(
          '<math><mstyle> <semantics> <mrow> <msubsup> <mrow> <mi>\\log</mi> </mrow> <mn>5</mn> <mn>2</mn> </msubsup> <mrow><mo>(</mo> <mrow> <mn>25</mn><mo>&#x2212;</mo><msup> <mi>x</mi> <mn>2</mn> </msup> </mrow> <mo>)</mo></mrow><mo>&#x2212;</mo><mn>3</mn><msubsup> <mrow> <mi>\\log</mi> </mrow> <mn>5</mn> <mn></mn> </msubsup> <mrow><mo>(</mo> <mrow> <mn>25</mn><mo>&#x2212;</mo><msup> <mi>x</mi> <mn>2</mn> </msup> </mrow> <mo>)</mo></mrow><mo>+</mo><mn>2</mn><mo>&#x2265;</mo><mn>0</mn> </mrow>  </semantics> </mstyle></math>'
        )}
      </BlockMath>
      <MathComponent
        tex={String.raw`\log_5^2(25-x^2)-3\log_5(25-x^2) + 2333 \geq 0`}
      />
      Треугольник <MathComponent tex={String.raw`ABC`} />
      треугольник $\Delta ABC$ с вершиной <InlineMath math='C' /> а вот{' '}
      <InlineMath math='\int_0^\infty x^2 dx' /> молодец
      {[`\\log_5^2(25-x^2)`, `\\sqrt{x}`].map(t => (
        <span>
          {' '}
          Супер Текст <InlineMath math={t} />
        </span>
      ))} */}
      <ol className={classes.ol}>
        {props.problems.map(problem => (
          <Card className={classes.problem}>
            <div className={classes.post__tagContainer}>
              <span className={classes.post__tag}>{problem.tag}</span>
            </div>
            <CardBody>
              <li className={classes.li}>{displayProblem(problem.text[0])}</li>
            </CardBody>
          </Card>
        ))}
      </ol>
      {/* {String.raw`В прямоугольном треугольнике $ ABC $ точка $ M $ лежит на катете $ AC$, а точка $ N $ лежит на продолжении катета $ BC $ за точку $ C $ причем $ CM= BC $ и $ CN= AC$. $\log_5^2(25-x^2)-3\log_5(25-x^2) + 2 \geqslant 0$. Отрезки $ CH $ и $ CF$ — высоты треугольников $ ACB $ и $ NCM $ соответственно. Докажите, что прямые $ CH $ и $ CF $ перпендикулярны. Прямые $ BM $ и $ AN $ пересекаются в точке $ L$. Найдите $ LM $ если $ BC=4$, а $ AC= 8$.`}
      <p>
        <span>Найдите наименьшее значение функции</span>
      </p>
      <p>
        <span>
          <math>
            <mstyle displaystyle='true'>

              <semantics>

                <mrow>

                  <mi>y</mi>
                  <mo>=</mo>
                  <mn>14</mn>
                  <mi>tg</mi>
                  <mi>x</mi>
                  <mo>&#x2212;</mo>
                  <mn>28</mn>
                  <mi>x</mi>
                  <mo>+</mo>
                  <mn>7</mn>
                  <mtext>&#x03C0;</mtext>
                  <mo>&#x2212;</mo>
                  <mtext>2</mtext>
                </mrow>
              </semantics>
            </mstyle>
          </math>
        </span>
        <span></span>
      </p>
      <p>
        <span>
          на отрезке
          <math>
            <mstyle displaystyle='true'>

              <semantics>

                <mrow>

                  <mrow>
                    <mo>[</mo>
                    <mrow>

                      <mo>&#x2212;</mo>
                      <mtext>&#x2009;</mtext>
                      <mfrac>

                        <mtext>&#x03C0;</mtext> <mn>3</mn>
                      </mfrac>
                      <mo>;</mo>
                      <mtext>&#x2009;</mtext>
                      <mfrac>

                        <mtext>&#x03C0;</mtext> <mn>3</mn>
                      </mfrac>
                    </mrow>
                    <mo>]</mo>
                  </mrow>
                </mrow>
              </semantics>
            </mstyle>
          </math>
          .
        </span>
        <span></span>
      </p>
      Установка для демонстрации адиабатического сжатия представляет собой сосуд
      с поршнем, резко сжимающим газ. При этом объём и давление связаны
      соотношением {String.raw`\(p_1 V_1 = p_2 V_2^{1,4}\)`}
      <InlineMath math='p_1 V_1 = p_2 V_2^{1,4}' />, где
      {String.raw`\(p_1, p_2\)`}
      &nbsp;давление газа (в атмосферах) в начальном и конечном состояниях,
      <math>
        <mstyle displaystyle='true'>

          <semantics>

            <mrow>

              <msub>

                <mi>V</mi> <mn>1</mn>
              </msub>
            </mrow>
          </semantics>
        </mstyle>
      </math>
      &nbsp;и
      <math>
        <mstyle displaystyle='true'>

          <semantics>

            <mrow>

              <msub>

                <mi>V</mi> <mn>2</mn>
              </msub>
            </mrow>
          </semantics>
        </mstyle>
      </math>
      &nbsp;
      <math>
        <mstyle displaystyle='true'>

          <semantics>

            <mo>&#x2014;</mo>
          </semantics>
        </mstyle>
      </math>
      &nbsp;объём газа (в литрах) в начальном и конечном состояниях. Изначально
      объём газа равен 316,8&nbsp;л, а давление газа равно одной атмосфере. До
      какого объёма нужно сжать газ, чтобы давление в сосуде стало 128 атмосфер?
      Ответ дайте в литрах.
      <p>
        <span>Найдите наименьшее значение функции</span>
      </p>
      <p>
        <span>
          <math>
            <mstyle displaystyle='true'>
              <semantics>
                <mrow>
                  <mi>y</mi>
                  <mo>=</mo>
                  <mn>14</mn>
                  <mi>tg</mi>
                  <mi>x</mi>
                  <mo>&#x2212;</mo>
                  <mn>28</mn>
                  <mi>x</mi>
                  <mo>+</mo>
                  <mn>7</mn>
                  <mtext>&#x03C0;</mtext>
                  <mo>&#x2212;</mo>
                  <mtext>2</mtext>
                </mrow>
              </semantics>
            </mstyle>
          </math>
        </span>
        <span></span>
      </p>
      <p>
        <span>
          на отрезке
          <math>
            <mstyle displaystyle='true'>
              <semantics>
                <mrow>
                  <mrow>
                    <mo>[</mo>
                    <mrow>
                      <mo>&#x2212;</mo>
                      <mtext>&#x2009;</mtext>
                      <mfrac>
                        <mtext>&#x03C0;</mtext> <mn>3</mn>
                      </mfrac>
                      <mo>;</mo>
                      <mtext>&#x2009;</mtext>
                      <mfrac>
                        <mtext>&#x03C0;</mtext> <mn>3</mn>
                      </mfrac>
                    </mrow>
                    <mo>]</mo>
                  </mrow>
                </mrow>
              </semantics>
            </mstyle>
          </math>          .
        </span>
        <span></span>
      </p>
      {String.raw`$x^2$`}
      <p>
        Дана равнобедренная трапеция
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mrow>
                <mi>A</mi>
                <mi>B</mi>
                <mi>C</mi>
                <mi>D</mi>
              </mrow>
            </semantics>
          </mstyle>
        </math>
        &nbsp;с основаниями
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mrow>
                <mi>A</mi>
                <mi>D</mi>
              </mrow>
            </semantics>
          </mstyle>
        </math>
        &nbsp;и
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mrow>
                <mi>B</mi>
                <mi>C</mi>
              </mrow>
            </semantics>
          </mstyle>
        </math>
        . Окружность с центром
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mi>O</mi>
            </semantics>
          </mstyle>
        </math>
        , построенная на боковой стороне
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mrow>
                <mi>A</mi>
                <mi>B</mi>
              </mrow>
            </semantics>
          </mstyle>
        </math>
        &nbsp;как на диаметре, касается боковой стороны
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mrow>
                <mi>C</mi>
                <mi>D</mi>
              </mrow>
            </semantics>
          </mstyle>
        </math>
        &nbsp;и второй раз пересекает большее основание
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mrow>
                <mi>A</mi>
                <mi>D</mi>
              </mrow>
            </semantics>
          </mstyle>
        </math>
        &nbsp;в точке
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mi>H</mi>
            </semantics>
          </mstyle>
        </math>
        , точка
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mi>Q</mi>
            </semantics>
          </mstyle>
        </math>
        &nbsp;
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mo>&#x2014;</mo>
            </semantics>
          </mstyle>
        </math>
        &nbsp;середина
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mrow>
                <mi>C</mi>
                <mi>D</mi>
              </mrow>
            </semantics>
          </mstyle>
        </math>
        .
      </p>
      а)&nbsp;Докажите, что четырёхугольник
      <math>
        <mstyle displaystyle='true'>
          <semantics>
            <mrow>
              <mi>D</mi>
              <mi>Q</mi>
              <mi>O</mi>
              <mi>H</mi>
            </mrow>
          </semantics>
        </mstyle>
      </math>
      &nbsp;
      <math>
        <mstyle displaystyle='true'>
          <semantics>
            <mo>&#x2014;</mo>
          </semantics>
        </mstyle>
      </math>
      &nbsp;параллелограмм.
      <p>
        б)&nbsp;Найдите
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mrow>
                <mi>A</mi>
                <mi>D</mi>
              </mrow>
            </semantics>
          </mstyle>
        </math>
        , если
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mrow>
                <mo>&#x2220;</mo>
                <mi>B</mi>
                <mi>A</mi>
                <mi>D</mi>
                <mo>=</mo>
                <mn>75</mn>
                <mi>&#x00B0;</mi>
              </mrow>
            </semantics>
          </mstyle>
        </math>
        &nbsp;и
        <math>
          <mstyle displaystyle='true'>
            <semantics>
              <mrow>
                <mi>B</mi>
                <mi>C</mi>
                <mo>=</mo>
                <mn>1</mn>
              </mrow>
            </semantics>
          </mstyle>
        </math>
        .<span></span>
      </p> */}
      <p>Решите систему неравенств</p>
      <BlockMath>{String.raw`\begin{cases} 3 \cdot 9^{- \text{ } x} - 28 \cdot 3^{- \text{ } x} + 9 \leq 0, \\ \left(\log\right)_{x^{2}} \left(\left(\right. x + 1 \left.\right)\right)^{2} \leq 1. \end{cases}`}</BlockMath>
      <p>
        {Mathml2latex.convert(
          "<math>  <semantics>  <mrow>  <mrow> <mo>&#123;</mo> <mtable ctex=olumnalign='left'>  <mtr>  <mtd>  <mn>3</mn> <mo>&#x22C5;</mo> <msup>  <mn>9</mn> <mrow>  <mo>&#x2212;</mo> <mtext>&#x2009;</mtext> <mi>x</mi> </mrow> </msup> <mo>&#x2212;</mo> <mn>28</mn> <mo>&#x22C5;</mo> <msup>  <mn>3</mn> <mrow>  <mo>&#x2212;</mo> <mtext>&#x2009;</mtext> <mi>x</mi> </mrow> </msup> <mo>+</mo> <mn>9</mn> <mo>&#x2264;</mo> <mn>0,</mn> </mtd> </mtr> <mtr>  <mtd>  <msub>  <mi>log</mi> <mrow>  <msup>  <mi>x</mi> <mn>2</mn> </msup> </mrow> </msub> <msup>  <mrow> <mo>(</mo> <mrow>  <mi>x</mi> <mo>+</mo> <mn>1</mn> </mrow> <mo>)</mo> </mrow> <mn>2</mn> </msup> <mo>&#x2264;</mo> <mn>1.</mn> </mtd> </mtr> </mtable> </mrow> </mrow> </semantics> </math>"
        )}
      </p>
      {/* <ol style={{ color: 'black' }}>
        {fipimath.map(item =>
          item.levelName != 'Базовый' ? <li>{item.taskText}</li> : null
        )}
      </ol> */}
      {/* <ol style={{ color: 'black' }}>
        {Object.keys(math_fipi_old).map(function (key) {
          return math_fipi_old[key].map(item => <li>{item.mix}</li>)
        })}
      </ol> */}
      {/* <ol style={{'color':'black'}}>
        {Object.keys(math_fipi_old).forEach( function(key) {
          return math_fipi_old[key].map(item => <li>{item.text}</li>)
          }
        )}
        </ol>
         <ol style={{'color':'black'}}>
        {math_fipi_old.algebra.map(function(item){
          return <li>{item.mix}</li>}
        )}
        {math_fipi_old.eq_ineq.map(item =>
          return <li>{item.mix}</li>
        )}
        {math_fipi_old.functions.map(item =>
          return <li>{item.mix}</li>
        )}
        {math_fipi_old.calculus.map(item =>
          return <li>{item.mix}</li>
        )}
        {math_fipi_old.geometry.map(item =>
          return <li>{item.mix}</li>
        )}
        </ol> */}
    </div>
  )
}
