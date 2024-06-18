import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
    return (
        <div className={css.container}>
            <NavLink className={css.register} to="/register">
                Register
            </NavLink>
            <NavLink to="/login">
                Log In
            </NavLink>
        </div>
    );
}