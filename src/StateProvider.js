import react, {createContext, useContext, useReducer} from 'react';

export const StatesContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StatesContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StatesContext.Provider>
);

export const useStateValue = () => useContext(StatesContext)