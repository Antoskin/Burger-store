

export default ( st = 0, action ) => {
    const { type, payload } = action
    switch(type) {
        case 'GET':
            return payload;
        default:
            return st 
    }
}
