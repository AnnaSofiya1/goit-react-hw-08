import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations.js';
import { selectUser } from '../../redux/auth/selectors.js';
import css from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={css.container}>
            <p className={css.text}>Welcome, {user.name}!</p>
            <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
}