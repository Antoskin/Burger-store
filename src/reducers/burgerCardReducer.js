

export default ( st = 0, action ) => {
    const { type, payload } = action
    switch(type) {
        case 'GET':
            console.log(payload)
            return payload;
        default:
            return st 
    }
}
