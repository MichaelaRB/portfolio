// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  return (
    <>
    <navbar class="navbar navbar-expand navbar-light bg-dark text-light">
        <h1>Michaela</h1>
        <section class="navbar-nav mx-auto text-light">
        <Nav />
        </section>

    </navbar>

      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
