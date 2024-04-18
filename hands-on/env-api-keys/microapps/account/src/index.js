import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '@account/App'

const element = document.getElementById('microFrontendApp2')
const root = createRoot(element)

root.render(
	<React.StrictMode>
		<Router basename='/microapps/account'>
			<App />
		</Router>
	</React.StrictMode>
)
