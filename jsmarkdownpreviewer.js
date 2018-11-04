
var renderer = new marked.Renderer();

renderer.link = function(href, title, text){
  return '<a target="_blank" href="'+href+'">'+text+'</a>';
};

marked.setOptions({
  breaks: true,
  renderer: renderer});

let defaultValue = '# This is a H1 header! \n ## This is a H2 header \n [I\'m an inline-style link with title](https://www.google.com "Google\'s Homepage") \n Here\'s some code `<div> Hello World </div>` \n Here is some more code \n\n```\njavascript var text = "Hello World"; \n``` \n1. First ordered list item \n2. Another item \n⋅⋅* Unordered sub-list. \n1. Actual numbers don\'t matter, just that it\'s a number \n⋅⋅1. Ordered sub-list \n4. And another item. \n >This is a block quote \n\n >Here\'s Another one \n\nHere is a logo ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1") \n\nSince you\'ve earned it, __some bolded text__';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: defaultValue
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    this.setState({
      input: event.target.value
    });    
  }
  
  
  render() 
  { 
    return (
      <div id="flexer">
        <div>
          <h2>Editor</h2>
          <textarea value={this.state.input} id="editor" onChange={this.handleChange} ></textarea>
        </div>
        
        <div>
          <h2>Preview</h2>
          <CreateMarked input={this.state.input} />
        </div>
      </div>
    );
  }  
}

class CreateMarked extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() 
  {
    return (
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.input)}} />
    )
    ;
  }  
}

ReactDOM.render(<App />, document.getElementById('Application'));

