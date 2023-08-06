import './App.css';
import Pages from "./pages/pages";
import Category from "./components/category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Search/>
                <Category/>
                <Pages/>
            </div>
        </BrowserRouter>
    );
}

export default App;


