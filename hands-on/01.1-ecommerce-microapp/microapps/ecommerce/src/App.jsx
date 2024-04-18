import React from 'react'
import { Routes, Route } from 'react-router-dom'

import '@ecommerce/App.css'
import Products from '@ecommerce/components/Products'
import AppProvider from '@ecommerce/AppProvider'

const App = () => {
	return (
		<AppProvider>
			<Routes>
				<Route index element={<Products />} />
				<Route
					path='/:id'
					element={
						<h1 class='text-3xl font-bold underline text-center'>
							Hello, Welcome to the Product Detail Page!
						</h1>
					}
				/>
			</Routes>
		</AppProvider>
	)
}

export default App
