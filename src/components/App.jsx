import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormList from './FormList/FormList';
import GlobalTitle from './Layout/Title';
import ContactList from './ContatList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <div>
      <GlobalTitle title="Phonebook" />
      <FormList />
      <GlobalTitle title="Contacts" />
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
};

export default App;
