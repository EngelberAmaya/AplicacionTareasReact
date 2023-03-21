import { renderHook, act } from "@testing-library/react";
import useForm from "../../hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Engelber',
        email: 'engelberamaya@gmail.com'
    }

    test('Debe de regresar un formulario por defecto', () => {

        const {result} = renderHook(() => useForm(initialForm));
        const [ values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
      
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {

        const {result} = renderHook(() => useForm(initialForm));
        const [ , handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Alberto'
                }
            });
        });

        const [values] = result.current;
        expect(values).toEqual({...values, name: 'Alberto'})
      
    });

    test('Debe de reestablecer el formulario con Reset', () => {

        const {result} = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Alberto'
                }
            });

            reset();
        });

        const [values] = result.current;
        expect(values).toEqual(initialForm)
      
    });
  
})
