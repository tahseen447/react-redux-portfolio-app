import React, { Component} from 'react';

class TeacherInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name:'',
      gender: '',
      age: '',
      bio: '',
      image: ''
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
    this.props.addTeacher({ teacher: this.state} )
    this.setState({
        name:'',
        gender: '',
        age: '',
        bio: '',
        image: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
        <h2>Add New Teacher </h2>
        <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
            <label>Age:</label>
              <input
                type="text"
                name="age"
                value={this.state.age}
                onChange={(event) => this.handleOnChange(event)} />
                    <label>Gender:</label>
                      <input
                        type="text"
                        name="gender"
                        value={this.state.gender}
                        onChange={(event) => this.handleOnChange(event)} />
                <label>Bio:</label>
                  <input
                    type="text"
                    name="bio"
                    value={this.state.bio}
                    onChange={(event) => this.handleOnChange(event)} />
                    <label>Image:</label>
                    <input
                        type="text"
                        name="image"
                        value={this.state.image}
                        onChange={(event) => this.handleOnChange(event)} />

          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default TeacherInput;
