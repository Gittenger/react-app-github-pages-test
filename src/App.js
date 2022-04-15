import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Content = () => (
	<div style={{ textAlign: 'center' }}>
		<header>
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<Link to="/about">About Link</Link>
			<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
				Learn React
			</a>
		</header>
	</div>
)

const About = () => <div style={{ textAlign: 'center' }}>ABOUT PAGE</div>

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Content />} />
				</Route>
				{/* <Route path="/about">
					<Route index element={<About />} />
				</Route> */}
			</Routes>
		</BrowserRouter>
	)
}

export default App
