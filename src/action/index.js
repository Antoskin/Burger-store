
export function addBurg(da) {
    console.log(da)
    return {
        type: 'ADD',
        payload: {da}
    }
}

export function getCard(gamb, id) {
    return {
        type: 'GET',
        payload: [gamb, id]
    }
}


export function deleteBurg(i) {
    return {
        type: 'DEL',
        payload: i
    }
}


export function addIngredient(i, j) {
    let ingrObj = {
        item: i,
        price: j
    }
    return {
        type: 'ADD_ING',
        payload: ingrObj
    }
}

export function delIngredient(i) {
    return {
        type: 'DEL_ING',
        payload: i
    }
}