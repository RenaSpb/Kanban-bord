const initialState = {
    statuses: [],
    tasks: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_STATUSES':
            return { ...state, statuses: action.payload };

        case 'FETCH_TASKS':
            action.payload.sort((a, b) =>
                a.priority - b.priority);
            return { ...state, tasks: action.payload };

        default:
            return state;
    }
};
