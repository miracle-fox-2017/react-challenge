import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Hero extends React.Component {
  constructor () {
    super ()

  }

  render () {
    return (
      <tbody>
        <tr>
         <td>{this.props.hero.ID}</td>
         <td><Link to={`/dota/${this.props.hero.Name}`}>{this.props.hero.Name}</Link></td>
         <td>{this.props.hero.HP}</td>
         <td>{this.props.hero.Mana}</td>
         <td>{this.props.hero.Armor}</td>
         <td>{this.props.hero.MaxDmg}</td>
         <td>{this.props.hero.MinDmg}</td>
         <td>{this.props.hero.Range}</td>
         <td>{this.props.hero.Legs}</td>
         <td>{this.props.hero.BaseStr}</td>
         <td>{this.props.hero.BaseAgi}</td>
         <td>{this.props.hero.BaseInt}</td>
         <td>{this.props.hero.Movespeed}</td>
         <td>{this.props.hero.HPRegen}</td>
         <td>{this.props.hero.CastPoint}</td>
         <td>{this.props.hero.CastSwing}</td>
         <td>{this.props.hero.DayVision}</td>
         <td>{this.props.hero.IntGain}</td>
         <td>{this.props.hero.Alignment}</td>
         <td>{this.props.hero.PrimaryStat}</td>
       </tr>
     </tbody>
    )
  }
}

export default Hero
