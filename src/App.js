import { Suspense, lazy } from 'react';
import { useGlobalContext } from './context/Context';
import './App.scss';

//Pages
import Slider from "./page/Slider"
const Search = lazy(() => import('./page/Search'))
const SingleMovie = lazy(() => import('./page/SingleMovie'))

// Components//
import Footer from './component/Footer'
import Error from './component/Error'
import Header from './component/Header';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const { query, dispatch, getSearchMovie } = useGlobalContext()
  return (
    <>
      <div className="app">
        <HashRouter>
          <Header query={query} dispatch={dispatch} getSearchMovie={getSearchMovie} />
          <Suspense fallback={<h1>LOADING...</h1>}>
            <Routes>
              <Route index element={<Slider />} />
              <Route path='/movie/:id' element={<SingleMovie />} />
              <Route path='/search/:routerQuery' element={<Search />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </Suspense>
          <Footer />
        </HashRouter>
      </div >
    </>
  );
}

export default App;