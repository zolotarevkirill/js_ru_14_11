import { CHANGE_SELECT_FILTER } from '../constants'



export function changeSelectFilter(ids) {
	console.log('AC-FILTER');
    return {
        type: CHANGE_SELECT_FILTER,
        payload: { ids }
    }
}