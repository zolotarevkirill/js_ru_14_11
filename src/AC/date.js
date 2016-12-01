import { SET_DATE_FILTER } from '../constants'
//лучше объеденить эти 2 AC в один файл
export function dateRange ({from, to}) {
    return {
        type: SET_DATE_FILTER,
        payload: {
            from,
            to
        }
    }
}
