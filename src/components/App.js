import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Calendar from './Calendar'

import Select from 'react-select'
import 'react-select/dist/react-select.css'


class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        //внеси сюда selectedDay, что б сразу было понятно что у тебя в state живет
        selected: null,
    }

  


    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state;
        return (
            <div>
                
                <ArticleList articles={this.props.articles} />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi = {true}/>
                <Calendar/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
    //я так понимаю, это просто мусор остался?
    handleDayClick(e, day, { selected, disabled }) {
    if (disabled) {
      return;
    }
    if (selected) {
      this.setState({ selectedDay: null })
    } else {
      this.setState({ selectedDay: day });
    }
  }
}

export default App
