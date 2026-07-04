import { motion } from "framer-motion";

const steps=[

"Collect Guest Reviews",

"AI Processes Reviews",

"Identify Sentiment & Themes",

"Generate Business Insights",

"Improve Guest Experience"

];

function HowItWorks(){

return(

<section className="bg-slate-900 py-24">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-center text-white text-5xl font-bold">

How GuestVoice Works

</h2>

<p className="text-center text-gray-400 mt-4">

A simple workflow to transform guest feedback into actionable insights.

</p>

<div className="grid md:grid-cols-5 gap-8 mt-20">

{steps.map((step,index)=>(

<motion.div

key={index}

whileHover={{scale:1.05}}

className="text-center"

>

<div className="w-16 h-16 mx-auto rounded-full bg-sky-500 flex items-center justify-center text-white text-2xl font-bold shadow-xl">

{index+1}

</div>

<h3 className="text-white mt-6 font-semibold">

{step}

</h3>

</motion.div>

))}

</div>

</div>

</section>

);

}

export default HowItWorks;