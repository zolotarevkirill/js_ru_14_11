import { SET_DATE_FILTER } from '../constants'

export function dateRange ({from, to}) {
    return {
        type: SET_DATE_FILTER,
        payload: {
            from,
            to
        }
    }
}
