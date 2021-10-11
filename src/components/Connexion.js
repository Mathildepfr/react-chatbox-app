import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Connexion.css'
import illuPseudo from '../assets/illu.png';

class Connexion extends Component {
  state = {
    pseudo: '',
    goToChat: false
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ goToChat: true })
  }

  render () {
    if (this.state.goToChat) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    return (
      <div className='pseudoBox'>
        <img src={illuPseudo} alt='A man with a computer' />
        <div className='connexionBox'>
          <form className='connexion' onSubmit={this.handleSubmit}>
            <input
              value={this.state.pseudo}
              onChange={this.handleChange}
              placeholder='Pseudo'
              type='text'
              required />
            <button type='submit'>GO</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Connexion
