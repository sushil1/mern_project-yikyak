import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'
import superagent from 'superagent'

class Comments extends Component{
  constructor(){
    super()

    this.state = {
      comment: {
        username: '',
        body: '',
        timestamp: ''
      },
      list : [],
    }
  }

  componentDidMount(){
    console.log('component did mount')
    superagent
    .get('api/comment')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response)=>{
      console.log(JSON.stringify(response.body))
      let results = response.body.results
      this.setState({
        list: results
      })
    })
  }

  submitComment(e){

    console.log('submitComment: '+JSON.stringify(this.state.comment))
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.comment)

    this.setState({
      list: updatedList
    })
  }

  updateUsername(e){
    //this.state.comment['username'] = event.target.value //WRONG!! You never mutate the state in react, you create a copy of the state and update it

    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = e.target.value
    //now we reset the state
    this.setState({
      comment: updatedComment
    })
  }

  updateBody(e){
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = e.target.value
    this.setState({
      comment: updatedComment
    })
  }

  updateTimestamp(e){
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['timestamp'] = e.target.value
    this.setState({
      comment: updatedComment
    })
  }

  render(){
    const listComments = this.state.list.map((comment, i)=>{
      return <li key={i}><Comment currentComment={comment}/></li>
    })
    return(
      <div>
        <h2>Comments: Zone1</h2>
        <div style={styles.comment.commentsBox}>
        <ul style={styles.comment.commentsList}>
          {listComments}
          </ul>

          <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" /><br />
          <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="post a comment" /><br />
          <input onChange={this.updateTimestamp.bind(this)} className="form-control" placeholder="timestamp"/><br />
          <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit</button>
        </div>
      </div>
    )
  }
}

export default Comments
