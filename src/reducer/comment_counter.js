import { COUNT_COMMENTS } from '../constants'

export default () => {
    const { type, payload } = action

    switch (type) {
        case COUNT_COMMENTS: return payload
    }

    return counterState
}