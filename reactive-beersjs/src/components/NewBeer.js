import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'

class NewBeer extends Component {
  state = {name :"", tagline :"", description :"", first_brewed :"", brewers_tips :"", attenuation_level :"" }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    
    //
    // AJAX request below
    //
    
    const name = this.state.name;
    const tagline = this.state.tagline; 
    const description = this.state.description; 
    const first_brewed = this.state.first_brewed;
    const brewers_tips = this.state.brewers_tips;
    const attenuation_level = this.state.attenuation_level;
    
    axios.post("https://ih-beer-api.herokuapp.com/beers/new", { name, tagline, description, first_brewed, brewers_tips, attenuation_level})
      .then(() => {
         
          
          // Reset form
          this.setState({name :"", tagline :"", description :"", first_brewed :"", brewers_tips :"", attenuation_level :""});
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({
          [name]: value,
          

        });
  }

  render(){
    return(
      <div>
          <Header/>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>Tagline:</label>
          <input type="text" name="tagline" value={this.state.tagline} onChange={ e => this.handleChange(e)}/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          <label>first_brewed:</label>
          <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={ e => this.handleChange(e)}/>
          <label>Brewers_tips:</label>
          <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={ e => this.handleChange(e)}/>
          <label>Brewers_tips:</label>
          <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={ e => this.handleChange(e)}/>
          <input className="blueButton" type="submit" value="Submit" />

        </form>
      </div>
    )
  }
}

export default NewBeer;