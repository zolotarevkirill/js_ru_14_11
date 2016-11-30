import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { dateRange } from '../AC/date'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    static propTypes = {
        date: PropTypes.shape({
            from: null,
            to: null
        }),
        dateRange: PropTypes.func.isRequired
    }

    handleDayClick = (e, day) => {
        const { dateRange, date } = this.props
        dateRange(DateUtils.addDayToRange(day, date))
    }

    render() {
        const { from, to } = this.props.date;
        const selectedRange = from && to && `${from.toLocaleDateString()} - ${to.toLocaleDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, this.props.date) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    date: state.date
}), {
    dateRange
})(DateRange)
