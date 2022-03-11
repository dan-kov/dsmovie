import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';



function Form(){
    const params = useParams();

    return(
        // params.movieId eh definido no react-router - arq App.tsx
        // aspas como tratamento caso parametro nao informado
        <FormCard movieId={`${params.movieId}`} />
    );

}

export default Form;