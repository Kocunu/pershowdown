import './App.css'
import SearchSection from './components/SearchSection'

function App() {
    return (
        <>
            <header className="app-header">
                <h1>Persona Suche</h1>
            </header>

            <main>
                <div className="search-sections-container">
                    <SearchSection searchType="id" />
                    <SearchSection searchType="name" />
                </div>
            </main>

            <footer className="app-footer">
                <p>Suche nach Personas über ID oder Name</p>
            </footer>
        </>
    )
}

export default App