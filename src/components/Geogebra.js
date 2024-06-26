import React, { useEffect } from 'react'
import GGBApplet from './deployggb.js'
import $ from 'jquery'

let defaultparameters = {
  id: 'ggbApplet',
  width: 800,
  height: 600,
  showToolBar: true,
  borderColor: null,
  showMenuBar: true,

  allowStyleBar: true,
  showAlgebraInput: true,
  enableLabelDrags: false,
  enableShiftDragZoom: true,
  capturingThreshold: null,
  showToolBarHelp: false,
  errorDialogsActive: true,
  showTutorialLink: true,
  showLogging: true,
  useBrowserForJS: false,
  perspective: 'AG'
}
export default function Geogebra (props) {
  let ref = React.createRef()
  let id = 'GGB' + props.id
  useEffect(() => {
    let parameters = {
      ...defaultparameters,
      ...props,
      material_id: props.id
    }
    var ggbApp = new GGBApplet(parameters, '5.0')
    ggbApp.inject(id)
    console.log(parameters)
  }, [props])
  return <div ref={ref} id={id} width={1024} height={900} />
}
