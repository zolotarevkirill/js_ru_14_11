import {FILTER_BY_DATE, FILTER_BY_NAME} from '../constants'

export function filterByDate(selectedRange) {
    return {
        type: FILTER_BY_DATE,
        payload:{
            selectedRange
        }
    }
}

export function filterByName(name) {
    return {
        type: FILTER_BY_NAME,
        payload:{
            name
        }
    }
}