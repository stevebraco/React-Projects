import React, { Component } from "react";
import './App.css'
import { sampleText } from './sampleText';
import marked from 'marked';


class App extends Component {

  state = {
    text : sampleText
  }

  handleChange = (e) => {
    const text = e.currentTarget.value

    this.setState({ text })
  }

  renderText = text => {
    const __html = marked( text, { sanitize: true } )
    return { __html }
  }

  componentDidMount() {
    const text = localStorage.getItem('text');
    
    // if text exist
    if( text ) {
      this.setState({ text })

    } else {
      this.setState({ sampleText })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('text', this.state.text)
  }
  

  render() {
    return(
      <div className="container">
        <h1>Markdown</h1>
        <div className="row">
          <div className="col-sm-6">
            <textarea 
            className='form-control'
            rows="35"
            value={this.state.text}
            onChange={this.handleChange} 
            />
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;