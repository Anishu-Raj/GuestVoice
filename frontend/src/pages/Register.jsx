import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",

    email: "",

    password: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", formData);

      toast.success("Registration Successful");

      navigate("/login");

    }

    catch (err) {

      toast.error(

        err.response?.data?.message ||

        "Registration Failed"

      );

    }

  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-pink-600">

          Register

        </h1>

        <form

          onSubmit={handleSubmit}

          className="space-y-5 mt-8"

        >

          <input

            name="name"

            placeholder="Full Name"

            value={formData.name}

            onChange={handleChange}

            className="w-full border p-4 rounded-xl"

            required

          />

          <input

            name="email"

            type="email"

            placeholder="Email"

            value={formData.email}

            onChange={handleChange}

            className="w-full border p-4 rounded-xl"

            required

          />

          <input

            name="password"

            type="password"

            placeholder="Password"

            value={formData.password}

            onChange={handleChange}

            className="w-full border p-4 rounded-xl"

            required

          />

          <button

            type="submit"

            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl"

          >

            Register

          </button>

        </form>

        <p className="text-center mt-5">

          Already have an account?

          <Link

            to="/login"

            className="text-pink-600 ml-2"

          >

            Login

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;