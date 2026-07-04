import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./config/db.js";
import Homestay from "./models/Homestay.js";
import Review from "./models/Review.js";

dotenv.config();

const guestNames = [
  "Aarav","Priya","Ananya","Rahul","Kabir",
  "Rohit","Meera","Neha","Ishita","Aditya",
  "Riya","Aman","Vikram","Sneha","Harsh",
  "Karan","Nidhi","Aditi","Yash","Simran"
];

const positiveReviews = [
  "Amazing hospitality and friendly staff.",
  "Rooms were clean and well maintained.",
  "Beautiful mountain views and peaceful environment.",
  "Food quality was excellent.",
  "Would definitely visit again.",
  "Perfect location with great service.",
  "Owner was very helpful and polite.",
  "Comfortable stay with excellent facilities.",
  "Highly recommended for family vacations.",
  "Very clean rooms and quick room service."
];

const neutralReviews = [
  "Overall stay was satisfactory.",
  "Rooms were decent but can improve.",
  "Food was okay.",
  "Location is nice but parking is limited.",
  "Average experience overall.",
  "Stay was comfortable.",
  "Everything was fine.",
  "Good property for short stays.",
  "Expected slightly better facilities.",
  "Worth the price."
];

const negativeReviews = [
  "WiFi was very slow.",
  "Bathroom cleanliness needs improvement.",
  "Breakfast options were limited.",
  "Parking space was insufficient.",
  "Staff response was slow.",
  "Room service needs improvement.",
  "AC was not working properly.",
  "Washroom maintenance should improve.",
  "Food quality was disappointing.",
  "Check-in process took too long."
];

const homestays = [
{
name:"Mountain View Homestay",
owner:"Rahul Sharma",
location:"Mussoorie",
category:"Luxury",
description:"Luxury mountain stay with valley view.",
averageRating:4.8,
totalReviews:10
},
{
name:"Lake Breeze Retreat",
owner:"Ananya Verma",
location:"Nainital",
category:"Standard",
description:"Beautiful lake facing retreat.",
averageRating:4.6,
totalReviews:10
},
{
name:"Pine Valley Stay",
owner:"Rohit Kapoor",
location:"Shimla",
category:"Budget",
description:"Affordable stay near pine forest.",
averageRating:4.3,
totalReviews:10
},
{
name:"Snow Peaks Homestay",
owner:"Neha Singh",
location:"Manali",
category:"Luxury",
description:"Premium snowy mountain experience.",
averageRating:4.9,
totalReviews:10
},
{
name:"River Stone Cottage",
owner:"Amit Joshi",
location:"Rishikesh",
category:"Standard",
description:"Peaceful riverside stay.",
averageRating:4.5,
totalReviews:10
},
{
name:"Forest Nest Homestay",
owner:"Karan Mehta",
location:"Dehradun",
category:"Budget",
description:"Nature surrounded peaceful stay.",
averageRating:4.4,
totalReviews:10
},
{
name:"Sunrise Valley Inn",
owner:"Priya Gupta",
location:"Mukteshwar",
category:"Luxury",
description:"Sunrise valley experience.",
averageRating:4.7,
totalReviews:10
},
{
name:"Green Leaf Retreat",
owner:"Harsh Verma",
location:"Kasauli",
category:"Standard",
description:"Eco-friendly retreat.",
averageRating:4.4,
totalReviews:10
},
{
name:"Hill Crest Stay",
owner:"Nidhi Sharma",
location:"Dalhousie",
category:"Luxury",
description:"Luxury hilltop stay.",
averageRating:4.8,
totalReviews:10
},
{
name:"Cloud Nine Homestay",
owner:"Aditya Singh",
location:"Auli",
category:"Luxury",
description:"Snow and mountain paradise.",
averageRating:4.9,
totalReviews:10
}
];

const generateReviews = (homestayId) => {

const reviews=[];

for(let i=0;i<10;i++){

let rating;
let sentiment;
let review;

const random=Math.random();

if(random<0.65){

rating=5;
sentiment="Positive";
review=positiveReviews[Math.floor(Math.random()*positiveReviews.length)];

}

else if(random<0.85){

rating=3;
sentiment="Neutral";
review=neutralReviews[Math.floor(Math.random()*neutralReviews.length)];

}

else{

rating=2;
sentiment="Negative";
review=negativeReviews[Math.floor(Math.random()*negativeReviews.length)];

}

reviews.push({

homestay:homestayId,

guestName:guestNames[Math.floor(Math.random()*guestNames.length)],

rating,

review,

sentiment

});

}

return reviews;

};

const importData=async()=>{

try{

await connectDB();

await Homestay.deleteMany();

await Review.deleteMany();

const insertedHomestays=await Homestay.insertMany(homestays);

let allReviews=[];

for(const homestay of insertedHomestays){

const reviews=generateReviews(homestay._id);

allReviews.push(...reviews);

}

await Review.insertMany(allReviews);

console.log("✅ 10 Homestays Inserted");

console.log("✅ 100 Reviews Inserted");

console.log("🎉 Database Seed Completed Successfully");

mongoose.connection.close();

}

catch(error){

console.log(error);

process.exit(1);

}

};

importData();