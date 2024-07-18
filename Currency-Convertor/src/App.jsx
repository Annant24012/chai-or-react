import "./App.css";
import CurrencyConverter from './components/currency-convertor'

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center py-10 bg-gray-800" id="mainContainer">
            <div className="container mx-auto px-4">
                <CurrencyConverter/>
            </div>
        </div>
    );
}

export default App;
