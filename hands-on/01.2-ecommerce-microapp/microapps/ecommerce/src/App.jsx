import React from 'react'
import { Routes, Route } from 'react-router-dom'

import '@ecommerce/App.css'
import Products from '@ecommerce/components/Products'
import ProductDetail from '@ecommerce/components/ProductDetail'
import AppProvider from '@ecommerce/AppProvider'

const App = () => {
	return (
		<AppProvider>
			<Routes>
				<Route index element={<Products />} />
				<Route path='/:id' element={<ProductDetail />} />
			</Routes>
		</AppProvider>
	)
}

export default App
