import { motion } from "framer-motion";
import {
BarChart3,
TrendingUp,
Star,
MessageSquare
} from "lucide-react";

function DashboardPreview(){

return(

<section className="bg-slate-950 py-24">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">

<h2 className="text-5xl font-bold text-white">

Business Analytics Dashboard

</h2>

<p className="text-gray-400 mt-5">

Monitor guest experience with real-time AI powered insights.

</p>

</div>

<motion.div

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{duration:.8}}

className="mt-20 bg-slate-900 rounded-3xl border border-white/10 shadow-2xl p-10"

>

<div className="grid lg:grid-cols-4 gap-6">

<div className="bg-sky-500/20 rounded-2xl p-6">

<Star className="text-yellow-400"/>

<h3 className="text-white mt-4">

Overall Rating

</h3>

<p className="text-4xl text-white font-bold mt-2">

4.8

</p>

</div>

<div className="bg-green-500/20 rounded-2xl p-6">

<TrendingUp className="text-green-400"/>

<h3 className="text-white mt-4">

Positive Reviews

</h3>

<p className="text-4xl text-white font-bold mt-2">

92%

</p>

</div>

<div className="bg-purple-500/20 rounded-2xl p-6">

<MessageSquare className="text-purple-400"/>

<h3 className="text-white mt-4">

Reviews

</h3>

<p className="text-4xl text-white font-bold mt-2">

25K

</p>

</div>

<div className="bg-orange-500/20 rounded-2xl p-6">

<BarChart3 className="text-orange-400"/>

<h3 className="text-white mt-4">

Growth

</h3>

<p className="text-4xl text-white font-bold mt-2">

+18%

</p>

</div>

</div>

<div className="mt-12 bg-slate-800 rounded-2xl h-72 flex items-center justify-center">

<p className="text-gray-400 text-xl">

📈 Review Analytics Chart (Week-6)

</p>

</div>

</motion.div>

</div>

</section>

);

}

export default DashboardPreview;