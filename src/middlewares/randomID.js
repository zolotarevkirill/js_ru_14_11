export default store => next => action => {

	console.log('rand'); 


    const { withRandomId, ...rest} = action


   	console.log('LOGER',action);


    if (!withRandomId) return next(action)

    next({
        ...rest,
        randomId: Date.now() + Math.random()

    })
}