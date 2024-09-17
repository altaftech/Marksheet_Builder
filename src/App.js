import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  operation(e) {
    var a = this.state.input1;
    var b = this.state.input2;
    var c;
    switch (e.target.value) {
      case "➕":
        c = parseFloat(a) + parseFloat(b);

        break;
      case "➖":
        c = parseFloat(a) - parseFloat(b);

        break;
      case "✖️":
        c = parseFloat(a) * parseFloat(b);

        break;
      case "➗":
        c = parseFloat(a) / parseFloat(b);

        break;

      default:
        c = parseFloat(a) / parseFloat(b);

        break;
    }
    this.setState({ ans: 'Ans is : '+ c })
  }

  onChangeData(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div className="App">
        <p>Calculator</p>
        <div className='side'>
          <div>
            <input type="text" id='wid' name="input1" onChange={this.onChangeData.bind(this)} placeholder='Enter number' /><br />
            <input type="text" id='wid' name="input2" onChange={this.onChangeData.bind(this)} placeholder='Enter number' /><br />
          </div>
          <input type="text" id='' value={this.state.ans} placeholder='Ans' /><br />
        </div>

        <p></p>
        <input type="button" value="➕" onClick={this.operation.bind(this)} />&nbsp;&nbsp;
        <input type="button" value="➖" onClick={this.operation.bind(this)} />&nbsp;&nbsp;
        <input type="button" value="✖️" onClick={this.operation.bind(this)} />&nbsp;&nbsp;
        <input type="button" value="➗" onClick={this.operation.bind(this)} />

      </div>
    );
  }
}

export default App;
