// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  return (
    <>
    <navbar class="navbar navbar-expand-lg navbar-light bg-light">
        <h1>Michaela Brown</h1>
        <section class="navbar-nav mx-auto">
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
