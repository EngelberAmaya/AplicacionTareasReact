import { UserContext } from "../../../components/09-useContext/UserContext";
import {mount} from 'enzyme';
import AppRouter from "../../../components/09-useContext/AppRouter";

describe('Pruebas en <AppRouter />', () => {

   const user = {
      id: 1,
      name: 'Engelber'
   }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    );    

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
      
    });
  
})
