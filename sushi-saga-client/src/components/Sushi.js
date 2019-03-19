import React, { Fragment, Component } from 'react'

class Sushi extends Component {
  constructor(){
    super()
    this.state = {
      eaten: false
    }
  }

  handle = () => {
    this.props.addPlates()
    this.props.chargeMoney(this.props.sushi.price)
    this.setState({eaten: true})
  }
  render(){
    return (
      <div className="sushi">

        <div className="plate"
             onClick={this.handle}>
          {
            this.state.eaten == true ? null : <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }

}

export default Sushi
