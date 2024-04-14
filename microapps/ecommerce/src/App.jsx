import React from 'react'
import { Routes, Route } from 'react-router-dom'

import '@ecommerce/App.css'
import AppProvider from '@ecommerce/AppProvider'

const App = () => {
	return (
		<AppProvider>
			<Routes>
				<Route
					index
					element={
						<h1 class='text-3xl font-bold underline text-center'>
							Hello, Ecommerce Microapp!
						</h1>
					}
				/>
			</Routes>
		</AppProvider>
	)
}

export default App
