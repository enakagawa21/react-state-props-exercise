import "./App.css";
import { Component } from "react";
import Box from "./components/box";

class App extends Component {
  constructor(props) {
    super(props);

    let boxes = []
    let numBoxes = 52
    

    
    for(let i = 1; i <= numBoxes; i++){
      boxes.push({
 id: i,
 color:`rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
})
}
this.state = {boxes}
}



getRandomColor(){
  return Math.round(Math.random()*255)
}



  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{this.state.boxes.map((box)=>{
return <Box key= {box.id} color= {box.color}/>
        })
        }</div>
      </main>
    );
  }
}

export default App;
