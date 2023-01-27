import React from 'react';

// контролируемый компонент

NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

// не контролируемый компонент

// class NameForm extends React.Component {
  // constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.input = React.createRef();
//   }

//   handleSubmit(event) {
//     alert('Отправленное имя: ' + this.input.current.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Имя:
//           <input type="text" ref={this.input} />
//         </label>
//         <input type="submit" value="Отправить" />
//       </form>
//     );
//   }
// }

export default App;
