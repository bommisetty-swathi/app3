import React from "react";
import "./App.css";

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false,
    };
}
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        items:json,
        DataisLoaded:true,
      });
    });
  }
  render(){
    const{DataisLoaded,items}=this.state;
    if(!DataisLoaded)
      return(
    <div>
      <h1>need some time to load the page</h1>
    </div>
    );
    return(
      <div className="app3">
        <h1 className="geek">Geeks for Geeks</h1>
        <h3>welcome to geeks for geeks</h3>
        <div className="container">
          {items.map((items)=>(
            <div className="items">
              <ol key={items.id}>
                <div>
                  <strong>
                    {"userName:"},
                  </strong>
                  {items.username},
                </div>
                <div>
                  Full_name:{items.name},
                </div>
                <div>
                  user_email:{items.email}
                </div>
              </ol>
            </div>

          

          ))}
        </div>
      </div>
    );
  }
}
export default App;