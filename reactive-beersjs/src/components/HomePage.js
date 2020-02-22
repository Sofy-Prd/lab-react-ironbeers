import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class HomePage extends Component {
    render(){
        return (
            <div>
                
                     <article>
                         <img src="img/beers.png" alt="beers"/>
                         <div className="articleText">
                             <h2><Link to="/beers" style={{ textDecoration: 'none' }}>All Beers</Link></h2>
                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis alias vel fuga nihil iure nemo, consequuntur quis magnam doloribus quo, totam officia beatae, inventore officiis veritatis. Aspernatur perspiciatis et labore.</p>
                        </div>
                    </article>
                         
                    <article>
                         <img src="img/random-beer.png" alt="random beer"/>
                         <div className="articleText">
                             <h2><Link to="/random-beer" style={{ textDecoration: 'none' }}>Random Beer</Link></h2>
                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis alias vel fuga nihil iure nemo, consequuntur quis magnam doloribus quo, totam officia beatae, inventore officiis veritatis. Aspernatur perspiciatis et labore.</p>
                        </div>
                    </article>
                         
                    <article>
                         <img src="img/new-beer.png" alt="new beer"/>
                         <div className="articleText">
                             <h2><Link to="/new-beer" style={{ textDecoration: 'none' }}>New Beer</Link></h2>
                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis alias vel fuga nihil iure nemo, consequuntur quis magnam doloribus quo, totam officia beatae, inventore officiis veritatis. Aspernatur perspiciatis et labore.</p>
                        </div>
                    </article>

                      
             
            </div>
        )
    }
}

export default HomePage