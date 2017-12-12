import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Hero from './Hero'
import axios from 'axios'

class Home extends React.Component {
  constructor () {
    super ()
    this.state = {
      hero: []
    }
  }

  componentWillMount() {
    axios.get('http://api.herostats.io/heroes/all')
    .then(response => {
      let tampung = []
      for (var index in response.data) {
          tampung.push(response.data[index])
      }
      this.setState({
        hero: tampung
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="table-responsive" >
          <h1>TABLE HERO DOTA</h1>
           <table className="table" border="2px">
             <thead>
               <tr>
                 <th>Nomor</th>
                 <th>Name</th>
                 <th>HP</th>
                 <th>Mana</th>
                 <th>Armor</th>
                 <th>MaxDmg</th>
                 <th>MinDmg</th>
                 <th>Range</th>
                 <th>Legs</th>
                 <th>BaseStr</th>
                 <th>BaseAgi</th>
                 <th>BaseInt</th>
                 <th>Movespeed</th>
                 <th>HPRegen</th>
                 <th>CastPoint</th>
                 <th>CastSwing</th>
                 <th>DayVision</th>
                 <th>IntGain</th>
                 <th>Alignment</th>
                 <th>PrimaryStat</th>
               </tr>
             </thead>
                {this.state.hero.map((d,i) => {
                  return (<Hero hero={d} key={i}/>)
                })}
          </table>
         </div>
        </div>
       </div>)
  }
}
export default Home
