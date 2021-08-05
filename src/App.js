/** @format */

import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import marked from 'marked'
import {initialState} from './initialState'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editor: initialState}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      editor: e.target.value,
    })
  }

  render() {
    const editor = this.state.editor
    const markdown = marked(editor, {breaks: true})
    return (
      <div>
        <h2 className="text-center m-4 text-white"> Markdown Previewer</h2>
        <br></br>
        <div className="row">
          <div className="col-6">
            <h4 className="text-center text-white">Enter your text</h4>
            <textarea
              className="form-control p-2"
              id="editor"
              value={editor}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6">
            <h4 className="text-center text-white">Markdown</h4>
            <div
              className="preview rounded p-2"
              dangerouslySetInnerHTML={{__html: markdown}}
              id="preview"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
