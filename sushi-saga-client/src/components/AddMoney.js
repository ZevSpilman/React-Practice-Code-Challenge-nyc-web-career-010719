import React, {Component} from 'react'

class AddMoney extends Component {
  constructor(){
    super()
    this.state = {
      formValue: ""
    }
  }


   handle = (e) => {
     this.setState({formValue: e.target.value})
     console.log(this.state.formValue);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMoney(this.state.formValue)
  }

  render(){
    return <div>
              <form onSubmit={this.handleSubmit}>
              <input type="number" name="AddMoney" onChange={this.handle} />
              <input type="submit" value="ADD THAT CASH!"/>
            </form>
          </div>
  }

}

export default AddMoney
