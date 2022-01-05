export const CONST = {
    TOKEN: "TOKEN",
    AUTH: "AUTH",
    POINT: "POINT",
    LOADING: "LOADING",
    DARKMODE:"DARKMODE",
    OPENMENU:"OPENMENU",
}

const { POINT, TOKEN, AUTH, LOADING,DARKMODE,OPENMENU } = CONST;

export const PointReducer = (state = 0, action) => {
    switch (action.type) {
        case POINT:
            return action.payload;
        default:
            return state

    }
}

export const LoadingReducer = (state = false, action) => {
    switch (action.type) {
        case LOADING:
            return action.payload;
        default:
            return state
    }
}

export  const DarkmodeReducer = (state = true, action) => {
    switch (action.type) {
        case DARKMODE:
            return action.payload;
        default:
            return state
    }
}

export  const OpenMenuReducer = (state = false, action) => {
    switch (action.type) {
        case OPENMENU:
            return action.payload;
        default:
            return state
    }
}