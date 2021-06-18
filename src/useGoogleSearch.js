import {useState, useEffect} from 'react';
import API_KEY from './Keys';

const CONTEXT_KEY="db48ed0e4052ddc93";

 //creating custom-hooks

//passing term as the value in the custom-hook
const useGoogleSearch = (term) => {
   
    const[data, setData] = useState(null);

    useEffect(() => {
        //fires up the following given code when term changes...
        
        //whenever you have to use useEffect when something changes you bascically need to 
        //create a function which is the async function

        //creating an async function

        const fetchData = async() =>{
            fetch(
                //end-point
                //key=api_key where the api key is passed
                //cx=context_key where the context key is passed
                //q=query
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`

            )
                //if i get a response back then get the json from response
                .then(response => response.json())

                .then(result =>{
                    setData(result)
                })
              


            
        }
        fetchData();
    }, [term])
    
    //here term is the dependency...
    return{ data }
};

export default useGoogleSearch
