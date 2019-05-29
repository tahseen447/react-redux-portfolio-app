import React, { Component} from 'react';

class StudentInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
        lesson: ''
    };
  };

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.updateStudent({ student: this.props.student, lesson: this.state.lesson} )
    this.setState({
      student: {
        lesson: ''
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
        <label>Enter lesson </label>
          <input
            type="text"
            name="lesson"
            value={this.state.lesson}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default StudentInput
