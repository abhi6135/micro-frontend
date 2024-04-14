import React from 'react'
import { Routes, Route } from 'react-router-dom'

import '@account/App.css'
import MyAccount from '@account/components/MyAccount'
import AppProvider from '@account/AppProvider'

const App = () => {
	return (
		<AppProvider>
			<Routes>
				<Route index element={<MyAccount />} />
			</Routes>
		</AppProvider>
	)
}

export default App
