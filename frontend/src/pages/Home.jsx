import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ReviewList from "../components/ReviewList";

import useReviews from "../hooks/useReviews";

function Home(){

const{

reviews,

loading,

error

}=useReviews();

if(loading){

return <h2>Loading...</h2>;

}

if(error){

return <h2>{error}</h2>;

}

return(

<>

<Navbar/>

<Hero/>

<section className="max-w-6xl mx-auto py-12">

<h2 className="text-3xl font-bold mb-8">

Latest Guest Reviews

</h2>

<ReviewList

reviews={reviews}

/>

</section>

<Footer/>

</>

);

}

export default Home;