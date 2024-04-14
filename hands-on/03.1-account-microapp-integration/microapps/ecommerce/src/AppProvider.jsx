import React, { createContext, useState } from 'react'

export const AppContext = createContext({})

const AppProvider = ({ children }) => {
	const [cartCount, setCartCount] = useState(0)

	const addItemToCart = () => {
		setCartCount((count) => count + 1)
	}

	const values = {
		cartCount,
		addItemToCart,
	}

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export default AppProvider
