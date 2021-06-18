import React from 'react';
import './SearchPage.css';
import {useStateValue} from './pages/StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import LOGO from './pages/images/images.png';
import { Link } from 'react-router-dom';
import Search from './pages/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';

function SearchPage() {
    const[{term}, dispatch] = useStateValue();
    
    //Live Api Call
    const{ data } = useGoogleSearch(term);

    //mocking API Call
    //const data=Response;

    console.log(data);

    return (
        <div className="searchpage">
            
            <div className="searchpage__header">
                <Link to="/">
                    <img className="searchpage__headerLogo" src={LOGO} alt="" />

                </Link> 
                
            
                <div className="searchpage__headerBody">
                    <Search hideButtons />
                   
                    <div className="searchpage__options">
                        <div className="searchpage__optionsLeft">
                            <div className="searchpage__option">
                                <SearchIcon />
                                <Link to="/all">All </Link>
                            </div>
                            <div className="searchpage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link> 
                            </div>
                            <div className="searchpage__option">
                                <PlayCircleOutlineIcon />
                                <Link to="/videos">Videos</Link>
                            </div>
                            <div className="searchpage__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchpage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchpage__optionsRight">
                            <div className="searchpage__option">
                                
                                <Link to="/settings">Setings</Link>
                            </div>
                            <div className="searchpage__option">
                               
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                    <div className="searchpage__results">
                        <p className="searchpage__resultCount">
                              About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
                              for {term}
                        </p>

                        {data?.items.map(item => (
                            <div className="searchpage__results">
                                <a href={item.link}>
                                        {item.pagemap?.cse_image?.length > 0 && 
                                        item.pagemap?.cse_image
                                        [0]?.src && (
                                            <img className="searchpage__resultsImage"
                                                src={
                                                    item.pagemap?.cse_image?.length > 0 && item.pagemap?.
                                                    cse_image[0]?.src
                                                }
                                                alt=""
                                            
                                            />

                                            
                                        )}

                                    {item.displayLink}
                                </a>

                                <a className="searchpage__resultsTitle" href={item.link}>
                                    <h2>{item.title}</h2>
                                </a>
                                <p className="searchpage__resultsSnippets">{item.snippet}</p>
                            </div>
                        ))}
                    </div>
            )}
           
        </div>
    )
}

export default SearchPage;

