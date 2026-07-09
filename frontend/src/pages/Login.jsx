import { useAuth } from "../context/AuthContext";

function Login() {

const { loginWithGoogle } = useAuth();

return (

<button
onClick={loginWithGoogle}
className="w-full py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
>

Continue with Google

</button>

);

}

export default Login;