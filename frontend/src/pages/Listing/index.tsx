import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing(){

    // youtube: javascript promisses
    // use state
    /*
    Hook: useState
    Manter estado no componente
    */
    const[pageNumber, setPageNumber] = useState(0);
    const[page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    /*
    Hook: useEffect
    Executar algo na instanciação ou destruição do componente, observar estado
    */
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
        .then(response => {
            //console.log(response.data);
            const data = response.data as MoviePage;
            setPage(data);
            //setPageNumber(data.number);
        });
    }, [pageNumber]);


    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    } 


    /*NOTA: em uma renderização dinâmica de coleção, cada elemento renderizado DEVE possuir um atributo key.*/
    return(
      <>
        <Pagination page={page} onChange={handlePageChange} />

        <div className="container">
            <div className="row">
                {page.content.map(movie => (
                    <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard movie={movie} />
                    </div> 
                    )
                )}                                
            </div>
        </div>
      </>
    );

}

export default Listing;