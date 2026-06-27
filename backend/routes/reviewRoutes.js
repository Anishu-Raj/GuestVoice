import express from "express";
const router = express.Router();
import reviews from "../data/reviews.js";

router.get("/", (req, res) => {

    res.json(reviews);

});
router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const review = reviews.find(r => r.id === id);

    if (!review) {

        return res.status(404).json({
            message: "Review not found"
        });

    }

    res.json(review);

});
router.post("/", (req, res) => {

    const newReview = {

        id: reviews.length + 1,

        ...req.body

    };

    reviews.push(newReview);

    res.status(201).json({

        message: "Review Added Successfully",

        review: newReview

    });

});
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const review = reviews.find((r) => r.id === id);

    if (!review) {

        return res.status(404).json({
            message: "Review not found",
        });

    }

    review.guest = req.body.guest;
    review.hotel = req.body.hotel;
    review.rating = req.body.rating;
    review.sentiment = req.body.sentiment;
    review.review = req.body.review;

    res.json({

        message: "Review Updated Successfully",

        review,

    });

});
router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = reviews.findIndex((r) => r.id === id);

    if (index === -1) {

        return res.status(404).json({

            message: "Review not found",

        });

    }

    const deletedReview = reviews.splice(index, 1);

    res.json({

        message: "Review Deleted Successfully",

        review: deletedReview[0],

    });

});
export default router;