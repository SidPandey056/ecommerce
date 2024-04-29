import Hero from "../components/Hero";
import NewCollections from "../components/NewCollections";
import Newsletter from "../components/Newsletter";
import Offer from "../components/Offer";
import Popular from "../components/Popular";

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <Newsletter />
    </div>
  );
};

export default Home;
