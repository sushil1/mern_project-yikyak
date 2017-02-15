import React, { Component } from 'react'

class Comment extends Component{
  render(){
    return(
      <div style={{marginBottom:16}}>
      <p style={{fontSize:20, fontWeigth:400}}>{this.props.currentComment.body}</p>
      <br />
      <span style={{fontWeigth: 200}}>Author :{this.props.currentComment.username}</span>
      <span style={{marginLeft:12, marginRight:12}}>| </span>
      <span>{this.props.currentComment.timestamp}</span>
      <hr />
      </div>
    )
  }
}

export default Comment
