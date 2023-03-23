import {shallow} from 'enzyme';
import  MultipleCustomHook from '../../../components/03-examples/MultipleCustomHook';
//import { useCounter } from '../../../hooks/useCounter';
import useFetch from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
//jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHook />', () => {

    /*useCounter.mockReturnValue({
        counter: 1,
        increment: () => {}
    })*/

    test('Debe de mostrar el componente correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        
        const wrapper = shallow(<MultipleCustomHook />);
        expect(wrapper).toMatchSnapshot();
      
    });

    test('Debe mostrar la información', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Engelber',
                quote: 'Hola Mundo'
            }],
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHook />);

        expect(wrapper.find('.alert').exists()).toBe(true);
        //expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        //expect(wrapper.find('footer').text().trim()).toBe('Engelber');
        //console.log(wrapper.html());
      
    })
        
  
})
