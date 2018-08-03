class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind(this);
  }

  state = {
    list : [],
    word : ""
  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
  }

  addToList(event){
    var listArr = this.state.list
    var userInput = this.state.word

    listArr.push(userInput)

    this.setState({
      list: listArr,
      word: ''
    })
  }

  

  render() {

    var toDo = this.state.list.map( (item) => {
      return <li><p>{item}</p></li>
    })
      // render the list with a map() here
      console.log("rendering");
      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={()=>this.addToList(this.state.word)}>add item</button>
          <ul>{toDo}</ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);

