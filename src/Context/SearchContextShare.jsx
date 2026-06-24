import React, { createContext, useState } from 'react'




export const searchContext = createContext(" ") //create context
function SearchContextShare({children}) {
// 2) create global state , so that can access to any components

const[searchKey,setSearchKey] = useState("")


  return (
    <searchContext.Provider value ={{searchKey,setSearchKey}}>
        {children}
    </searchContext.Provider>
  )
}

export default SearchContextShare
