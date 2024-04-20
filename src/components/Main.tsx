import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from '../appRedux/store/index';
import { persistor } from '../appRedux/store/index';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages/Home';
import ProductDetails from './ProductDetails';
import About from '../pages/About';
import Signup from '../pages/Signup';
import SignIn from '../pages/SignIn';
import { AuthProvider } from '../Auth/useAuth';
import Cart from './Cart';
import Wishlist from './WishList';
import Contact from '../pages/Contact';
import { CheckOut } from '../pages/CheckOut';
import OrderHistory from '../pages/OrderHistory';
import Shop from '../pages/shop';




const queryClient = new QueryClient();
const Main = () => {
  return (
    <Provider store={store}>
    <AuthProvider>
      <PersistGate loading={null} persistor={persistor}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/signin"
            element={<SignIn />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/shop"
            element={<Shop />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />
          {/* <Route
            path="/userProfile"
            element={<UserProfile/>}
          /> */}
          <Route
            path="/cart"
            element={<Cart/>}
          />
          <Route
            path="/checkout"
            element={<CheckOut/>}
          />
          <Route
            path="/orderhistory"
            element={<OrderHistory/>}
          />
           <Route
            path="/wishlist"
            element={<Wishlist/>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
    </PersistGate>
    </AuthProvider>
    </Provider>
  );
};

export default Main;
