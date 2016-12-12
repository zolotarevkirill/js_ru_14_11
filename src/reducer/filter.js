import {FILTER_BY_NAME, FILTER_BY_DATE} from '../constants'

export default(action) => {
    const {type, payload} = action;

    switch (type) {
        case FILTER_BY_DATE:
            console.log('this is me---', payload)
            return payload;
        case FILTER_BY_NAME:
            return payload
    }
}