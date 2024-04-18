import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '@ecommerce/App'

const element = document.getElementById('microFrontendApp1')
const root = createRoot(element)

root.render(
	<React.StrictMode>
		<Router basename={process.env.BASE_PATH}>
			<App />
		</Router>
	</React.StrictMode>
)
