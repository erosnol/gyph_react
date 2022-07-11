import { Component } from "react"

class App extends Component {

  constructor(){
      super()
     this.state = {
         giphy: []
     }
  }

  componentDidMount(){

      fetch('https://api.giphy.com/v1/gifs/trending?api_key=EdYC5AXIBfRR0PVUmOIhoTZ4HIrMZfOj&limit=25&rating=g')
      .then(response => response.json()) // parse the request
      // .then(json => console.log(json));
       .then(giphyData => this.setState({giphy: giphyData.data})) // get the data
  }

  componentDidUpdate(){
      console.log('Hello from component did update')
  }

  render() {
      console.log('Hello from Render')
      return(
          <div>
              <h1>Giphy API</h1>
              {
              this.state.giphy.map(g => (
                <div key={g.id}>
                 <img src={g.images.original.url} alt={g.title}/>
                 <h3>{g.title}</h3>
                 </div>
                 ))
              }
          </div>
      )
  }
}

export default App;








