import { motion } from "framer-motion";

import {
Brain,
BarChart3,
Bot,
ShieldCheck,
Building2,
MessageSquareMore
} from "lucide-react";

const features=[

{
icon:<Brain size={36}/>,
title:"AI Sentiment Analysis",
desc:"Automatically identifies positive, neutral and negative guest reviews."
},

{
icon:<BarChart3 size={36}/>,
title:"Business Analytics",
desc:"Monitor ratings, review trends and overall guest satisfaction."
},

{
icon:<Bot size={36}/>,
title:"AI Reply Suggestions",
desc:"Generate professional responses for guest reviews."
},

{
icon:<ShieldCheck size={36}/>,
title:"Spam Detection",
desc:"Detect fake or suspicious reviews automatically."
},

{
icon:<Building2 size={36}/>,
title:"Multi-Hotel Support",
desc:"Manage reviews from multiple hotels in one dashboard."
},

{
icon:<MessageSquareMore size={36}/>,
title:"Review Insights",
desc:"Find common complaints and appreciation themes instantly."
}

];

function Features(){

return(

<section className="bg-slate-950 py-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl text-white font-bold text-center">

Everything You Need

</h2>

<p className="text-center text-gray-400 mt-5">

Powerful tools designed for hospitality businesses.

</p>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

{features.map((item,index)=>(

<motion.div

key={index}

whileHover={{
scale:1.04,
y:-8
}}

className="bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-xl"

>

<div className="text-sky-400">

{item.icon}

</div>

<h3 className="text-white text-2xl font-semibold mt-6">

{item.title}

</h3>

<p className="text-gray-400 mt-4 leading-8">

{item.desc}

</p>

</motion.div>

))}

</div>

</div>

</section>

);

}

export default Features;