import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Content = () => (
	<div style={{ textAlign: 'center' }}>
		<header>
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
				Learn React
			</a>
		</header>
	</div>
)

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Content />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
