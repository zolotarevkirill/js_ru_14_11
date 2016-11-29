import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'

import { connect } from 'react-redux'
import { changeSelectFilter } from '../AC/filters'

class App extends Component {

    state = {
        selected: null
    }

    render() {
        const { articles, ...rest } = this.props
        
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi = {true}/>
            </div>
        )
    }

    handleChange = selected => {
        this.props.changeSelectFilter(selected.map(option => option.value))

        this.setState({ selected })
        

        console.log('000---',selected);
         console.log('!!!---',this.props);
        console.log('---',store.getState().filters);
        console.log('--!!3332-',store.getState().filters.length);
    }
}





export default connect(state => {
    const { articles, filters } = state
    return { articles, filters }
}, {
    changeSelectFilter
})(App)
