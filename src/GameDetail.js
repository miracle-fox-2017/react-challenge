import React, { Component } from 'react';

export default class GameDetail extends Component {
  render() {
    return(
      <div>
      <p className="title">Game Detail</p>
      <div className="content">
          <h1>Hello World</h1>
          <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
          <figure>
            <img src="https://bulma.io/images/placeholders/256x256.png"/>
            <img src="https://bulma.io/images/placeholders/256x256.png"/>
            <figcaption>
              Figure 1: Some beautiful placeholders
            </figcaption>
          </figure>
          <h6>Sixth level</h6>
          <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
      </div>
      </div>
    )
  }
}