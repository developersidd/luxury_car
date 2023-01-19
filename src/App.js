import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import MongoFirebaseProvider from './Context/MongoFirebaseProvider';
import Dashboard from './Pages/Dashboard';
import ExploreProducts from './Pages/ExploreProducts';
import FaqPage from './Pages/FaqPage';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import RegisterLogin from './Pages/RegisterLogin';
import PrivateRoute from './Private/PrivateRoute';


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <MongoFirebaseProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={
              <Home />
            } />

            <Route path="/register" element={
              <RegisterLogin />
            } />

            <Route path="/explore_cars" element={
              <ExploreProducts />
            } />

            <Route path="/reviews" element={
              <Reviews />
            } />

            <Route path="/faq" element={
              <FaqPage />
            } />

            {/*  Private Route Starts */}
            <Route path="/*" element={<PrivateRoute />}>
              <Route path="dashboard/*" element={<Dashboard />} />
              <Route path="products_details/:id" element={<ProductDetails />} />
            </Route>
            {/*  Private Route Ends */}

            <Route path="*"
              element={
                <NotFound />
              }
            />

          </Routes>
          <Footer />
        </Router>
      </div>
    </MongoFirebaseProvider>

  );
}

export default App;
