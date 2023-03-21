import { renderHook } from "@testing-library/react";
import useFetch from "../../hooks/useFetch";

describe('Pruebas en useFetch', () => {

    test('Debe de regresar la información por defecto', () => {

        const { result } = renderHook(() => useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1`));

        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
      
    });

    /*test('Debe de tener la info deseada, loading false, error false', async() => {

        const { result } = renderHook(() => useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1`));
       
        await waitForNextUpdate();

        const {data, loading, error} = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
      
    });

    test('Debe de manejar el error', async() => {

        const { result } = renderHook(() => useFetch(`https://aapi.breakingbadquotes.xyz/v1/quotes/1`));
       
        await waitForNextUpdate();

        const {data, loading, error} = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');
      
    });*/
  
})
