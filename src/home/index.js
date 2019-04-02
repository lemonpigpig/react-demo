import React, { Component } from 'react'
import Button from 'antd/lib/button'
import { DatePicker, Input } from 'antd'
import ReactDOM from 'react-dom'

// import '../spread/gcspread.sheets.all.8.40.20151.5.min.js'
import {
  //   BrowserRouter as Router,
  //   Route,
  Link
  // NavLink
  //   Switch,
  //   Redirect
} from 'react-router-dom'

let dateInstance = null
let spread = null
let sheet = null
let range = null
let spreadjsRowColumn = {
  row: 0,
  col: 0
}
class Home extends Component {
  onChange = (date, dateString) => {
    // debugger
    // console.log('----onChange----', date, dateString)
    // alert('-----setState-----')
    // console.log('22222222')
    dateInstance.data = dateString
    const { row, col } = spreadjsRowColumn
    sheet.setValue(row, col, dateString)
    this.setState({
      date: dateString
    })
  }
  // change = function(e) {
  //   alert('change')

  //   console.log(e, e.target.value)
  // }
  static defaultProps = {
    a: 11,
    default: 'default value'
  }
  state = {
    state1: 'state1',
    date: null,
    isupdate: false
  }
  editorDom = null

  componentDidMount() {
    var ns = window.GC.Spread.Sheets
    console.log(ns)
    const GC = window.GC
    const that = this
    function DatePickerCellType() {}
    DatePickerCellType.prototype = new GC.Spread.Sheets.CellTypes.Base()
    DatePickerCellType.prototype.data = ''
    DatePickerCellType.prototype.createEditorElement = function() {
      // Create input presenter.
      var input = document.createElement('div')
      return input
    }
    DatePickerCellType.prototype.activateEditor = function(editorContext, cellStyle, cellRect) {
      // Initialize input editor.
      if (editorContext) {
        //   $editor = $(editorContext)
        // console.log('---DatePicker---:', DatePicker)
        GC.Spread.Sheets.CellTypes.Base.prototype.activateEditor.apply(this, arguments)
        ReactDOM.render(<Input value={that.state.date} />, editorContext)
        ReactDOM.render(<DatePicker onChange={that.onChange} />, editorContext)
        // console.log('----DatePicker---:', DatePicker)
        // ReactDOM.render(<input type="date" onChange={that.change} />, editorContext)
      }
    }

    DatePickerCellType.prototype.deactivateEditor = function(editorContext) {
      // Remove input editor when end editor status.
      if (editorContext) {
        // var element = editorContext
        //   $(element).datepicker('hide')
        //   $(element).datepicker('destroy')
      }
      GC.Spread.Sheets.CellTypes.Base.prototype.deactivateEditor.apply(this, arguments)
    }
    DatePickerCellType.prototype.setEditorValue = function(editor, value) {
      // Sync value from Cell value to editor value.
      // $(editor).datepicker('setDate', value)
      console.log('----setEditorValue-----:', value)
      that.setState({ date: value })
    }
    DatePickerCellType.prototype.getEditorValue = function(editor) {
      console.log('11111111')
      // console.log('----getEditorValue----:', editor.querySelector('input').value)
      that.editorDom = editor
      console.log('----editor----:', editor)
      console.log('this.datathis.datathis.data', this)
      return this.data
      // return that.state.date
    }
    DatePickerCellType.prototype.updateEditor = function(editorContext, cellStyle, cellRect) {
      // alert('----updateEditor----')
      if (editorContext) {
        //   $editor = $(editorContext)
        //   $editor.css('width', cellRect.width - 1)
        //   $editor.css('height', cellRect.height - 3)
      }
    }
    // debugger
    dateInstance = new DatePickerCellType()
    spread = new GC.Spread.Sheets.Workbook(this.refs.spreadJs, { sheetCount: 1 })
    sheet = spread.getActiveSheet()
    sheet.suspendPaint()
    sheet.setValue(0, 1, 'DatePicker', GC.Spread.Sheets.SheetArea.colHeader)
    range = sheet.getRange(-1, 1, -1, 1)
    range.width(100)
    range.formatter('yyyy年MM月dd日')
    range.cellType(dateInstance)
    sheet.resumePaint()

    sheet.bind(window.GC.Spread.Sheets.Events.CellClick, function(sender, args) {
      let { col, row } = args
      spreadjsRowColumn.row = row
      spreadjsRowColumn.col = col
      console.log('The column index before moving: ' + args.col)
      console.log('The row index before moving: ' + args.row)
    })
  }
  componentWillUpdate() {
    // alert('----componentwillupdate---')
    console.log('--componentWillUpdate---', this.state.date)
  }
  componentDidUpdate() {
    // alert('----componentwillupdate---')
    console.log('--componentDidUpdate---', this.state.date)
  }
  render() {
    console.log('------i am rendering ------')
    return (
      <div className="home">
        {this.state.state1}
        <div ref="spreadJs" style={{ width: '800px', height: '500px', border: '1px solid gray' }} />
        <Link to="/user/1">user1</Link>
        <Button type="primary">Button</Button>
        <div>home:{this.props.default ? this.props.default : 'lalal'}</div>
      </div>
    )
  }
}

export default Home
