import {Suspense } from 'react'

import './App.sass'
import Footer from './components/layers/Footer/Footer'
import Header from './components/layers/Header/Header'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'

function App() {

	return (
		<div className="wrapper container">
			<Header />
			<main className="main">
			
					<Suspense fallback={<h1>Loading posts...</h1>}>
						<Routes>
							<Route path="/" element={<HomePage />} />
						</Routes>
					</Suspense>
		
			</main>
			<Footer />
		</div>
	)
}

export default App
