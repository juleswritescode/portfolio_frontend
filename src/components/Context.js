import React, { createContext, useReducer } from 'react';

var initialState = {
    showProjects: false,
    showPosts: false,
    showContact: false,
};
export var Context = createContext(initialState);

export function ContextProvider({ children }) {
    const store = useReducer(reducer, initialState);

    return <Context.Provider value={store}>{children}</Context.Provider>;
}

function reducer(state = initialState, action = {}) {
    if (action.type == 'togglePosts') {
        return Object.assign({}, state, {
            showPosts: !state.showPosts,
            showProjects: false,
            showContact: false,
        });
    } else if (action.type == 'toggleProjects') {
        return Object.assign({}, state, {
            showPosts: false,
            showProjects: !state.showProjects,
            showContact: false,
        });
    } else if (action.type == 'toggleContact') {
        return Object.assign({}, state, {
            showPosts: false,
            showProjects: false,
            showContact: !state.showContact,
        });
    } else {
        return state;
    }
}
