const { Route, Routes } = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;

import { AppHeader } from './cmps/AppHeader.jsx';
import { contactDetails } from './views/ContactDetails.jsx'; 
import { Home } from './views/Home.jsx';
import { MailIndex } from './apps/mail/views/MailIndex.jsx';
import { NoteIndex } from './apps/note/views/NoteIndex.jsx';
import { ContantIndex } from './cmps/ContactIndex.jsx';

export function App() {
  return (
    <Router>
      <section className="app">
        {/* <AppHeader /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact:contactId" element={<ContactDetails />} />
          <Route path="/edit:contactId" element={<ContactEdit />} />
          <Route path="/contact" element={<ContantIndex />} />
        </Routes>
      </section>
    </Router>
  );
}
