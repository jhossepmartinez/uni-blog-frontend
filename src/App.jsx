import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
    return (
        <div>
            <Header />
            <div className="flex justify-center">
                <Home />
            </div>
        </div>
    )
}

export default App
