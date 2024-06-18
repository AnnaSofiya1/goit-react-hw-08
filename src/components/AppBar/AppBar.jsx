import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import { useSelector } from 'react-redux';
import css from './AppBar.module.css'

export default function AppBar() {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={css.head}>
            <p className={css.text}>Contacts App</p>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}