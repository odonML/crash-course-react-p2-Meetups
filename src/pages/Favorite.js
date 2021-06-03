import {useContext} from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

const FavoritePage = () => {
    const favoriteCtx = useContext(FavoritesContext);
    let meetups = favoriteCtx.favorites;
    let count = favoriteCtx.totalFavorites;
    let content;
    if(count === 0){
        content = <p>No Hay Meetups Favoritas</p>
    }else{
        content = <MeetupList meetups={meetups}/>
    }

    return <section>
        <h2>Favorite</h2>
    	{content}
    </section>
}
export default FavoritePage;