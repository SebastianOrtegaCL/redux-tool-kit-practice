import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { getPokemon } from "./store/slices/pokemon/index.js";

export const PokemonApp = () => {

    const dispatch = useDispatch();
    const { isLoading, page, pokemons = [] } = useSelector( state => state.pokemon );

    useEffect(() => {
        dispatch(getPokemon());
    }, []);

    return (
        <>
            <h1>
                Pokemon App
            </h1>
            <hr />
            <span>Loading... { isLoading ? 'True' : 'False' } </span>
            <ul>
                {
                    pokemons.map( ({ name }) => (
                        <li key={ name }>{name}</li>
                    ))
                }
            </ul>

            <button
                disabled={ isLoading }
                onClick={ () => dispatch(getPokemon(page)) }
            >
                Next
            </button>
        </>
    )
}
