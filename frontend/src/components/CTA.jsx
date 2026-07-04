import { ArrowRight } from "lucide-react";

function CTA(){

return(

<section className="py-24 bg-gradient-to-r from-sky-700 to-indigo-700">

<div className="max-w-5xl mx-auto text-center px-6">

<h2 className="text-5xl font-bold text-white">

Because Every Review Matters.

</h2>

<p className="text-blue-100 mt-6 text-xl">

Start understanding your guests and improve every stay with GuestVoice.

</p>

<button className="mt-10 bg-white text-sky-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition flex items-center gap-2 mx-auto">

Get Started

<ArrowRight size={20}/>

</button>

</div>

</section>

);

}

export default CTA;