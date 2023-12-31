const { Route, Routes } = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;
const { Provider } = ReactRedux;
import { AppHeader } from './cmps/AppHeader.jsx';
import { ContactDetails } from './views/ContactDetails.jsx';
import { ContactEdit } from './cmps/ContactEdit.jsx';
import { Home } from './views/Home.jsx';
import { ContantIndex } from './views/ContactIndex.jsx';
import { store } from './store/store.js';

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="main-layout app">
          <span></span>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact/:contactId" element={<ContactDetails />} />
            <Route path="/edit/:contactId" element={<ContactEdit />} />
            <Route path="/contact" element={<ContantIndex />} />
          </Routes>
        </section>
      </Router>
    </Provider>
  );
}
