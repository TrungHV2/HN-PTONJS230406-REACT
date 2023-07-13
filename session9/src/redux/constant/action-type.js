export const actionType = {
    PRO_ADD: "PRO_ADD",
    PRO_EDIT: "PRO_EDIT",
    PRO_REMOVE: "PRO_REMOVE",

    CUR_INIT: "CUR_INIT",
}

export const productAction = {
    add: (data) => {
        return {
            type: actionType.PRO_ADD,
            payload: data
        }
    },
    edit: (data) => {
        return {
            type: actionType.PRO_EDIT,
            payload: data
        }
    },
    remove: (data) => {
        return {
            type: actionType.PRO_REMOVE,
            payload: data
        }
    }
}

export const currentAction = {
    init: (data) => {
        return {
            type: actionType.CUR_INIT,
            payload: data
        }
    }
}