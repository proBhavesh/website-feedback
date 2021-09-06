import Header from "../components/Header";
import Meta from "../components/Meta";

import { Navbar } from "../components/Navbar.js";

import Team from "../components/Team";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
//page comonent
export default function index() {
  return (
    <>
      <div className="flex flex-col">
        <Meta />
        <Navbar />
        <Header />

        <Pricing />
        <Team />
        <Footer />
      </div>
    </>
  );
}
