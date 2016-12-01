import { SET_DATE_FILTER } from '../constants'
//лучше объеденить эти 2 AC
export function dateRange ({from, to}) {
    return {
        type: SET_DATE_FILTER,
        payload: {
            from,
            to
        }
    }
}
