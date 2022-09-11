import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {LoginPage} from './pages/LoginPage';
import {EmployeePage} from './pages/EmployeePage';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/employee'} element={<EmployeePage/>}/>
                <Route path={'*'} element={<Navigate to={'/login'} replace/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
