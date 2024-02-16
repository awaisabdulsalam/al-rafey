import CallToAction from "./components/CallToAction"
import Cart from "./components/Cart"
import Categories from "./components/Categories"
import Checkout from "./components/Checkout"
import Favourites from "./components/Favourites"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import MobilePhones from "./components/MobilePhones"
import Purchase from "./components/Purchase"
import Order from "./components/Order"
import Profile from "./components/Profile"
import NewAddress from "./components/NewAddress"
import CreditCard from "./components/CreditCard"
import OrderHistory from "./components/OrderHistory"
import Addresses from "./components/Addresses"
import PaymentMethods from "./components/PaymentMethods"


function App() {

  return (
    <>
    <Header />
    {/* <Profile /> */}
    {/* <PaymentMethods /> */}
    {/* <Addresses /> */}
    {/* <OrderHistory /> */}
    {/* <CreditCard /> */}
    {/* <NewAddress /> */}
    <Profile />
    <Order />
    <Purchase />
    <Favourites />
    <Checkout />
    <Categories />
    <Cart />
    <HomePage />
    <MobilePhones />
    <CallToAction />
    <Footer />
    </>
  )
}

export default App
