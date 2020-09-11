import React ,{createContext, useState} from "react"

export const ResturantsContext = createContext();


export const ResturantsContextProvider = props => {
    const [resturants,setResturants] = useState([])
    return(
        <ResturantsContext.Provider value={{resturants,setResturants}}>
            {props.children}
        </ResturantsContext.Provider>
    );
}