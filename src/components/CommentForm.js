import React, { Component, PropTypes  } from 'react'




class CommentForm extends Component {

   state = {
        user: '',
        text: '',
    }

    handleChange = vlues => ev => this.setState({
        [vlues]: ev.target.value
    })

   render() {
    return (
      <form action="" method="">
      <br/>
          <div>
            <label>USER NAME</label><br/>
            <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/><br/>
          </div>
          <br/>
          <div>
            <label>COMMENT</label><br/>
            <textarea value={this.state.text} onChange = {this.handleChange('text')}/>
          </div>
          <br/>
          <div>
            <button>ADD COMMENT</button>
          </div>
      </form>
    )
   }

   
}




export default CommentForm