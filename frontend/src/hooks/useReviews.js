import { useEffect, useState } from "react";
import API from "../services/api";

function useReviews() {

    const [reviews, setReviews] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchReviews();

    }, []);

    async function fetchReviews() {

        try {

            const response = await API.get("/reviews");

            setReviews(response.data);

        } catch (err) {

            setError("Unable to load reviews.");

        }

        setLoading(false);

    }

    return {

        reviews,

        loading,

        error

    };

}

export default useReviews;