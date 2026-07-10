import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function CompleteProfile() {

  const { dbUser } = useAuth();

  const navigate = useNavigate();

  const [form, setForm] = useState({

    role: "",

    phone: "",

    homestayName: "",

    city: "",

    state: "",

  });

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.put(

      `http://localhost:5000/api/auth/profile/${dbUser._id}`,

      form

    );

    navigate("/dashboard");

  };

  return (

    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <form

        onSubmit={handleSubmit}

        className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-8"

      >

        <h1 className="text-3xl font-bold mb-6">

          Complete Your Profile

        </h1>

        <select

          name="role"

          value={form.role}

          onChange={handleChange}

          className="w-full border rounded-xl p-3 mb-4"

          required

        >

          <option value="">Select Role</option>

          <option value="owner">Homestay Owner</option>

          <option value="guest">Guest</option>

        </select>

        <input

          name="phone"

          placeholder="Phone Number"

          className="w-full border rounded-xl p-3 mb-4"

          onChange={handleChange}

        />

        {form.role === "owner" && (

          <input

            name="homestayName"

            placeholder="Homestay Name"

            className="w-full border rounded-xl p-3 mb-4"

            onChange={handleChange}

          />

        )}

        <input

          name="city"

          placeholder="City"

          className="w-full border rounded-xl p-3 mb-4"

          onChange={handleChange}

        />

        <input

          name="state"

          placeholder="State"

          className="w-full border rounded-xl p-3 mb-6"

          onChange={handleChange}

        />

        <button

          className="w-full bg-blue-600 text-white py-3 rounded-xl"

        >

          Save Profile

        </button>

      </form>

    </div>

  );

}

export default CompleteProfile;