import './App.css';
import Pages from "./pages/pages";
import Category from "./components/category";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Category/>
                <Pages/>
            </div>
        </BrowserRouter>
    );
}

export default App;


