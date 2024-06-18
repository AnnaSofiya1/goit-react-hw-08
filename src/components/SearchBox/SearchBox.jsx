import css from './SearchBox.module.css'
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter } from '../../redux/filters/selectors.js';
import { changeFilter } from '../../redux/filters/slice.js'

const SearchBox = () => {

    const dispatch = useDispatch();

    const filter = useSelector(selectNameFilter);

    return (
        <div className={css.container}>
            <p className={css.text}>Find contacts <br /> by name or number</p>
            <input
                className={css.input}
                type="text"
                value={filter}
                onChange={(e) => dispatch(changeFilter(e.target.value))}
            />
        </div>
    );
}

export default SearchBox;