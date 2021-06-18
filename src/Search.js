import React,{useState} from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {useStateValue} from './StateProvider';
import { useHistory } from 'react-router-dom';
import {actionTypes} from './reducer';

function Search({ hideButtons = false}) {

    const[{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();


    const search = e =>{
        e.preventDefault();
        console.log("your input is:", input);

        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term: input
        });

        //redirecting to the search page
        history.push("/search");
    }
    return (
        <form className="search">
            
                    <div className="search__Input">
                        <SearchIcon />
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" name="text" placeholder="Search Google or type a Url" />
                        <MicIcon />
                    </div>

                    {!hideButtons ? (
                                 <div className="search__buttons">
                                    <button type='submit' onClick={search}>Google Search</button>
                                    <button>I'm Feeling Lucky</button>
                          
                                </div>
                                 
                    ) : (
                        <div className="search__buttons">
                            <button className="search__buttonsHidden" type='submit' onClick={search}>Google Search</button>
                            <button className="search__buttonsHidden">I'm Feeling Lucky</button>
                
                        </div>
                     
                    )}

                   
                    
        </form>
    )

}

export default Search
