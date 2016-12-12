import React, {Component} from 'react'

class AddCommentForm extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
        };

    }

    static defaultProps = {
        //ок, но я говорил для автора тоже поле сделать
        username: 'Anonimus',
    };

    handleChange = field => event => this.setState({
        [field]: event.target.value
    });

    render() {
        const author = <label>{this.props.username}</label>;
        return (
            <form method="" action="">
                <hr/>
                <div>Author : <strong>{author}</strong></div>
                <div>
                    <textarea name="comment" rows="10" cols="30" value={this.state.content} onChange = {this.handleChange('content')}/>
                </div>
                <button>Submit</button>
            </form>
        )
    }

}

export default AddCommentForm
