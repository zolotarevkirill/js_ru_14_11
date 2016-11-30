import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import SelectTitle from './SelectTitle'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'


class App extends Component {

    state = {
        selected: null
    }

    render() {
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList />
                <SelectTitle />
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
}

export default App
