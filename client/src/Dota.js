import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'

const style = {
  backgroundImage: "url('https://lh6.ggpht.com/iByYk3ChZ3bdgNIhNi8hdrr9t0THKBJXQyrtLr0ZJ_NHU3i5MuAW43gdUv5GL1b5j5V_=h900')"
}

class Dota extends React.Component {
  constructor () {
    super ()
  }

  render () {
    return (
      <div>
        <h1>HERO DETAILS :   {this.props.match.params.heroName}</h1>
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
        <tbody>
            <tr>
              <td>{JSON.stringify(this.props.location.state.hero.ID)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.Name)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.HP)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.Mana)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.Armor)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.MaxDmg)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.MinDmg)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.Range)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.Legs)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.BaseStr)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.BaseAgi)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.BaseInt)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.Movespeed)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.HPRegen)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.CastPoint)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.CastSwing)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.DayVision)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.IntGain)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.Alignment)}</td>
              <td>{JSON.stringify(this.props.location.state.hero.PrimaryStat)}</td>
            </tr>
        </tbody>
      </table>
      </div>
    )
  }
}


export default Dota
