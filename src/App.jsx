// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import git from './assets/github-mark-white.png';
import linkedIn from './assets/LI-In-Bug.png';

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

    <footer class="d-flex justify-content-center">
      <a href = "https://github.com/MichaelaRB"><img src={git} alt="A link to my GitHub profile"></img></a>
      <a href = "https://www.linkedin.com/in/michaela-brown-b89544281/"><img src={linkedIn} alt="A link to my linkedIn profile"></img></a>
    </footer>
    </>
  );
}

export default App;
