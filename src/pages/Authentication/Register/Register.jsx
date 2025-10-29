import { p } from "framer-motion/client";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };
  return (
    <div>
      <h1 className="text-5xl">Create An Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email Address is Required" })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-400">{errors.email.message}</p>
          )}

          <label className="label">Password</label>
          <input
            {...register("password", { required: true, minLength: 4 })}
            type="password"
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500" role="alert">
              password is required
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500" role="alert">
              password must be 4 character or longer
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn btn-primary text-black mt-4">Login</button>
        </fieldset>
        <p>
          {" "}
          <small>
            Already have an account?{" "}
            <Link className="btn btn-link" to="/login">
              Login
            </Link>{" "}
          </small>
        </p>
      </form>
    </div>
  );
};

export default Register;
