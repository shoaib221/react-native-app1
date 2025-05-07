import { createContext } from "react"

export const TestContext = createContext();

const fun = () => {
    return (
        <></>
    )
}

export const TestProvider1 = ( { children } ) => {
    
    return(
        <TestContext.Provider value={{ fun }} >
            { children }
        </TestContext.Provider>
    )
}

export const TestProvider2 = ( { children } ) => {
    return(
        <TestContext.Provider value={{ fun }} >
            { children }
        </TestContext.Provider>
    )
}