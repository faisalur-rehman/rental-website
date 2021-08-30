import Header from "./header";
import Footer from "./footer";
import Head from "./signUpIN/head";
import Dashboard from "./dashboard";
import Foot from "./signUpIN/foot";
// import CheckOut from "./checkOut";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./signUpIN/SignUp/SignUp";
import SignIn from "./signUpIN/SignIn/SignIn";
import Profile from "./Profile/Profile";
import SingleProduct from "./productsDetails/SingleProduct/SingleProduct";
import Checkout from "./checkOut/Checkout";

import StripeContainer from "./Stripe/StripeContainer";
import "./App.css";
import Transfer from "./Transfer/Transfer";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/landing">
            <Header />
            {/* <Products /> */}
            <Footer />
          </Route>
          <Route exact path="/">
            <Head />
            <SignIn />
            <Foot />
          </Route>
          <Route exact path="/SignUp">
            <Head />
            <SignUp />
            <Foot />
          </Route>
          <Route exact path="/profile">
            <Head />
            <Profile />
            <Foot />
          </Route>
          <Route exact path="/ProductDetails/:id" component={SingleProduct} />

          <Route exact path="/ProductDetails/CheckOut/:id">
            <Head />
            {/* <CheckOut /> */}
            <Checkout />
            <Footer />
          </Route>
          <Route exact path="/dashboard/admin">
            <Dashboard type="admin" />
          </Route>
          <Route exact path="/dashboard/vender">
            <Dashboard type="vender" />
          </Route>
          <Route exact path="/dashboard/rent">
            <Dashboard type="renting" />
          </Route>
          <Route exact path="/stripe">
            <Head />
            <StripeContainer />
          </Route>
          <Route exact path="/transfer">
            <Head />
            <Transfer />
            {/* <StripeContainer /> */}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
