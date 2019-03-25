import React, { Component } from 'react';
import './App.css';
class palindromeTextArea extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write statement wth space and Palnidromes',
            palindromeString :[]
          };
          
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault();
        let palindromestring = this.state.value
        let StringsArray = palindromestring.split(" ");
        var palindromeStringArray = [];
        for (let i=0;i<StringsArray.length; i++){
           let string = StringsArray[i];
           console.log("string",string);
          if(string && string===string.split().reverse().join().trim()){
            palindromeStringArray.push(string);
          }
        }
        console.log("palindromeStringArray",palindromeStringArray);
        this.setState({
          palindromeString : palindromeStringArray
        })
      }
     
      render(){
          return(
              <div>
                  <textarea value={this.state.value} onChange={this.handleChange} cols={40} rows={10} />
                  <input type="button" value="display palindromens" onClick={this.handleSubmit} />
                  <div className="preview">
                    <h1>Preview</h1>
                    {this.state.palindromeString.map(item => <div> {item} </div>)} 
                </div>
              </div>
              
          );
      }
}
export default palindromeTextArea;