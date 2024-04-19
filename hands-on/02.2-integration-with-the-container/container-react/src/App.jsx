import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/Home'

import Ecommerce from 'EcommerceApp/Ecommerce'

const App = () => {
	const history = createBrowserHistory()
	const [state, setState] = React.useState({
		action: history.action,
		location: history.location,
	})

	React.useLayoutEffect(() => history.listen(setState), [history])

	return (
		<>
			<Header />
			<Router
				basename='/'
				location={state.location}
				navigationType={state.action}
				navigator={history}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/products/*' element={<Ecommerce />} />
				</Routes>
			</Router>
			<Footer />
		</>
	)
}

export default App
