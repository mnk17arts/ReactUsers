import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import UserListing from './components/UserListing';
import UserDetails from './components/UserDetails';

function App() {
    
    return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" exact element={<UserListing/>} />
                    <Route path="/user/:userId" exact element={<UserDetails/>} />
                    <Route>404 Not Found!</Route>
                </Routes>
            </Router>

        </div>
    );
    }

export default App;