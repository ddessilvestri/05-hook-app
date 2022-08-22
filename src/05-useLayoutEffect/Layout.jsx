import {useCounter,useFetch} from '../hooks';
import { LoadingQuote,Quote } from './components';


export const Layout = () => {


    const { counter, increment} = useCounter(3);
    const {data,isLoading,hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const {author,quote} = !!data && data[0];


    return (
        <>
            <h1>Layout</h1>
            <hr />

            {
                (isLoading)
                    ? (<LoadingQuote/>) 
                    : (
                       <Quote author={author} quote={quote} />
                    )
            }
          
            <button 
                className="btn btn-primary" 
                disabled={isLoading}
                onClick={()=>increment(1)}>
                Next quote
            </button>
       
         
            
        </>
    )
}
