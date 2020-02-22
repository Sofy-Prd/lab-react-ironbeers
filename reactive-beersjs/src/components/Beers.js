import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
import SearchBar from './Search'

import { Link } from 'react-router-dom';


class Beers extends Component {
    state = {
        listOfBeers :[],
        query: ''
    }

    handleQuery = (ev) => {
      this.setState({
        query: ev.target.value    
      })

      
    }

    getAllBeers = () =>{

        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
          .then(responseFromApi => {
            this.setState({listOfBeers: responseFromApi.data})
          })
          .catch(err => console.log('Error', err))
      }

      componentDidMount() {
        this.getAllBeers();
      }
    render() {
      let query = this.state.query;
      let beers= [... this.state.listOfBeers];

      beers = beers.filter(beer => beer.name.includes(query))

      console.log("beers",beers);



        return (
            <div>
              <Header/>
              <SearchBar query={this.state.query} handleQuery={this.handleQuery}/>
                    
               
                { beers.map( beer => {
                        return (
                          <div className="beersArticle">
                              <img src={beer.image_url}/>
                           <div className="beersText">
                              <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                              <h4>{beer.tagline}</h4>
                              <p>Created by : {beer.contributed_by}</p>
                            </div>
                          </div>

                          )})
                }
            

              
            </div>
        )
    }
  }

export default Beers;