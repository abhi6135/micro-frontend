import React, { createContext } from 'react'

export const AppContext = createContext({})

const AppProvider = ({ children }) => {
	const values = {}

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export default AppProvider
