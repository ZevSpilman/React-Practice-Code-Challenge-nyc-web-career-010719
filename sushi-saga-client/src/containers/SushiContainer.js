import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


 class SushiContainer extends Component {
   constructor(){
     super()
     this.state = {
       x: 0,
       y: 4
     }
   }


   //TRIED TO DO IT WITH prevSate, DIDNT WORK
   // moreSushi = () => {
   //   this.setState((prevSate) => ({x: prevSate + 4, y: prevSate + 4 }))
   // }

   moreSushi = () => {
     this.setState({x: this.state.x + 4, y: this.state.y + 4 })
   }

   handleMap = () => {
     let allSushi = this.props.sushi.map(oneSushi => <Sushi key={oneSushi.id} sushi={oneSushi} addPlates={this.props.addPlates} chargeMoney={this.props.chargeMoney}/>)
     return allSushi.slice(this.state.x, this.state.y)
   }

   render(){
     return (
       <Fragment>
         <div className="belt">
           {
             this.handleMap()
           }
           <MoreButton  actuallFunc={this.moreSushi}/>
         </div>
       </Fragment>
     )
   }

}

export default SushiContainer
