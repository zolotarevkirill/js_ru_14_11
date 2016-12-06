import { ADD_COMMENT } from '../constants'
import {  } from '../constants'
import { normalizedComments } from '../fixtures'
import { Map } from 'immutable'

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return acc.set(comment.id, comment)
}, new Map({}))




export default (comments = defaultComments, action) => {
    const { type, payload, response, error, randomId } = action

    console.log(111);
 

    switch (type) {
         case ADD_COMMENT:

         	console.log(111);
         	console.log('333',payload)
         	console.log('444',randomId)
         	console.log('777777777',normalizedComments);

         	const NewCommnts = defaultComments.setIn([randomId],{
         		id: randomId,
				text: payload.text,
				user: payload.user
         	});


            return NewCommnts

    }



    return comments
}