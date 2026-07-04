import { motion } from "framer-motion";

const testimonials=[

{
name:"Rahul Sharma",
hotel:"Mountain Stay Resort",
review:"GuestVoice helped us understand guest feedback much faster. We improved our ratings within two months."
},

{
name:"Ananya Verma",
hotel:"Lake View Homestay",
review:"The dashboard is clean and the insights are incredibly useful for daily operations."
},

{
name:"Rohit Kapoor",
hotel:"Royal Heritage Hotel",
review:"Managing reviews from multiple properties has become much easier."
}

];

function Testimonials(){

return(

<section className="bg-slate-900 py-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center text-white">

What Hospitality Businesses Say

</h2>

<div className="grid lg:grid-cols-3 gap-8 mt-16">

{testimonials.map((item,index)=>(

<motion.div

key={index}

whileHover={{scale:1.05}}

className="bg-slate-800 rounded-3xl p-8 border border-white/10"

>

<p className="text-gray-300 leading-8">

"{item.review}"

</p>

<div className="mt-8">

<h3 className="text-white font-semibold">

{item.name}

</h3>

<p className="text-sky-400">

{item.hotel}

</p>

</div>

</motion.div>

))}

</div>

</div>

</section>

);

}

export default Testimonials;