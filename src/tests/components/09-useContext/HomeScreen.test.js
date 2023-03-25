import HomeScreen from "../../../components/09-useContext/HomeScreen";
import {mount} from 'enzyme';
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Engelber',
        email: 'engelberamaya@gmail.com'
    }
    
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
      
    });
  
})
