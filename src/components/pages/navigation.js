import React, { Component } from 'react';


class Navigation extends Component {
    constructor(){
        super();
        this.state = {
            tweets: [],
};

}

componentDidMount(){
        // you can check the
    console.log("inputs...");

     setInterval(()=>{
      // after specific time
      fetch('https://randomuser.me/api/?results=4')
      .then(data =>{
        return  data.json();
      })
      .then(data =>{
        // extract data as array
        console.log(data.results); // should be an array
        let data1 = data.results.map((item) => {
          return (
            <div key={item.email}>
              <div>{item.name.first}</div>
              <img src={item.picture.medium} />
            </div>
          )
        });
        this.setState({tweets: data1});
      })
      .catch(err =>{
        console.log(err);
      })
    }, 5000);


  }

render() {
    return (
      <div className="item2">
      <nav className="nav1">
      <ul>
      <li ><a href="/" >Home</a></li>
      <li><a href="/Blog1">Blogs</a></li>
      </ul>
      </nav>
          {this.state.tweets}
      </div>
    );
  }
}
export default Navigation;
