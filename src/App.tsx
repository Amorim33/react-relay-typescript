import { Suspense, lazy, FC } from 'react';
import { Router } from '@reach/router';
import { GlobalWrapper } from './components';
import { homepage } from '../package.json';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/404'));
const Character = lazy(() => import('./pages/Character'));
const CharacterList = lazy(() => import('./pages/CharacterList'));

/**
 * Setup Top-Level Routes for @reach/router
 */
const NavigationRoutes = () => (
  <Router basepath={homepage}>
    <NotFound default />
    <Home path='/' />
    <Character path='character/:characterId' />
    <CharacterList path='list/' />
  </Router>
);

/**
 * Since we are lazy loading for router we use Suspense as fallback
 */
const App: FC = () => (
  <GlobalWrapper>
    <Suspense fallback={<div>Loading...</div>}>
      <NavigationRoutes />
    </Suspense>
  </GlobalWrapper>
);
export default App;
