import TodoApp from "../../../components/08-useReducer/TodoApp";
import {shallow, mount} from 'enzyme';
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";

describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn(() => {});

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
      
    });

    test('Debe de agregar un TODO', () => {

        const wrapper = mount(<TodoApp />);
        
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        
    });

    test('Debe de eliminar un TODO', () => {

        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
      
    });        
  
})
