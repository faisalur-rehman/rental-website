import Header from "./header";
import Products from "./products";
import Footer from "./footer";
import Head from "./signUpIN/head";
import Dashboard from "./dashboard";
import Foot from "./signUpIN/foot";
// import SignIn from "./signUpIN/SignInForm";
import ProductDetails from "./productsDetails";
import CheckOut from "./checkOut";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./signUpIN/SignUp/SignUp";
import SignIn from "./signUpIN/SignIn/SignIn";
import Profile from "./Profile/Profile";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/landing">
            <Header />
            <Products />
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
          <Route exact path="/ProductDetails">
            <ProductDetails />
            <Footer />
          </Route>
          <Route exact path="/ProductDetails/CheckOut">
            <Head />
            <CheckOut />
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
