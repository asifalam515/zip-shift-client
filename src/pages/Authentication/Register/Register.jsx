import { p } from "framer-motion/client";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
              password must be 4 character
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
