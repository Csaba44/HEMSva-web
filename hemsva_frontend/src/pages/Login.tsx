import React from "react";
import Widget from "../components/Widget";
import Layout from "../components/Layout";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type LoginFormInputs = {
  email: string;
  password: string;
};

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const logInUser = async () => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        return resolve("logged in");
      }, 1000);
    });
  };

  const submitLoginForm = (data: LoginFormInputs) => {
    toast.promise(logInUser(), {
      loading: "Logging you in...",
      success: <span>Logged in</span>,
      error: <span>Invalid credentials</span>,
    });
    console.log(data);
  };

  return (
    <Layout navbar={false}>
      <div className="w-full h-full flex items-center justify-center">
        <Widget title="Bejelentkezés" iconClass="fa-classic fa-solid fa-key">
          <form onSubmit={handleSubmit(submitLoginForm)} className="flex flex-col py-10 px-25 gap-3 justify-center items-center">
            <Controller
              name="email"
              rules={{
                required: "Az e-mail megadása kötelező!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Érvénytelen e-mail cím!",
                },
              }}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <TextInput
                    {...field}
                    errorMessage={errors.email && errors.email.message}
                    textClass="w-[60px]"
                    text="E-mail"
                    placeholder="gipsz.jakab@gmail.com"
                    type="email"
                    addClass="w-full"
                  />
                </>
              )}
            />

            <Controller
              name="password"
              rules={{
                required: "A jelszó megadása kötelező!",
                minLength: {
                  value: 8,
                  message: "A jelszónak legalább 8 karakter hosszúnak kell lennie!",
                },
              }}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <TextInput
                    {...field}
                    errorMessage={errors.password && errors.password.message}
                    textClass="w-[60px]"
                    text="Jelszó"
                    placeholder="••••••••"
                    type="password"
                    addClass="w-full"
                  />
                </>
              )}
            />

            <Button addClass="mt-10 px-10" text="Bejelentkezés" />
          </form>
        </Widget>
      </div>
    </Layout>
  );
}

export default Login;
