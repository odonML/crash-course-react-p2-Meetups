import {useContext} from 'react';
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
const MainNavigation = () => {
    const favoriteCtx = useContext(FavoritesContext);
    let count = favoriteCtx.totalFavorites;
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorite'>Favorite
                    <span className={classes.badge}>{count}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;