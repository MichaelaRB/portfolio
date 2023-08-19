// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  return (
    <>
    <navbar class="navbar navbar-expand-lg navbar-light bg-dark text-light">
        <h1>Michaela</h1>
        <section class="navbar-nav mx-auto">
        <Nav />
        </section>

    </navbar>

      <main className="mx-3 d-flex justify-content-center">
        <Outlet />
      </main>
    </>
  );
}

export default App;
