"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { data } from "autoprefixer";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
type Varient = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [varient, setVarient] = useState<Varient>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const toggleVarient = useCallback(() => {
    if (varient === "LOGIN") {
      setVarient("REGISTER");
    } else {
      setVarient("LOGIN");
    }
  }, [varient]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSumbit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (varient === "REGISTER") {
      //axios.post("/api/auth/register", data);
      axios
        .post("/api/register", data)
        .catch((err) => {
          toast.error("Something went wrong");
        })
        .finally(() => setIsLoading(false));
    }
    if (varient === "LOGIN") {
      //axios.post("/api/auth/login", data);
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid Credentials");
          }
          if (callback?.ok && !callback?.error) {
            toast.success("Logged in successfully");
          }
        })
        .finally(() => setIsLoading(false));
    }
    console.log(data);
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    //axios.get("/api/auth/google");
    signIn(action, {
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Something went wrong");
        }
        if (callback?.ok && !callback?.error) {
          toast.success("Logged in successfully");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
      <div className=" py-8 px-4 sm:px-10 shadow sm:rounded-lg bg-white">
        <form className="space-y-6" onSubmit={handleSubmit(onSumbit)}>
          {varient === "REGISTER" && (
            <Input
              label="Name"
              id="name"
              disabled={isLoading}
              register={register}
              errors={errors}
            />
          )}
          <Input
            label="Email"
            id="email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <Button type="submit" disabled={isLoading} fullWidth>
              {varient === "LOGIN" ? "Login" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div
              className="relative
               flex
                justify-center 
                 text-sm"
            >
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>

          <div className="mt-6 flex justify-center text-sm">
            <button
              type="button"
              onClick={toggleVarient}
              className="font-medium text-gray-400 hover:text-sky-500"
            >
              {varient === "LOGIN"
                ? "Don't have an account? Register"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
