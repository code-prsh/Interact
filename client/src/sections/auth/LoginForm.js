import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../components/hook-forms/FormProvider';
import RHFTextField from '../../components/hook-forms/RHFTextField';
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from '@mui/material';
import { Eye, EyeSlash } from 'phosphor-react';
import {Link as RouterLink} from "react-router-dom"

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Email must be a valid email address"),
        password: Yup.string().required("Password is required"),
      });
    
      const defaultValues = {
        email: "",
        password: "",
      };
    
      const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
      });
    
      const {
        reset,
        setError,
        handleSubmit,
        formState: { errors },
      } = methods;
    
      const onSubmit = async (data) => {
        try {
          //submit data to backend
    
        } catch (error) {
          console.log(error);
          reset();
          setError("afterSubmit", {
            ...error,
            message: error.message,
          });
        }
      };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField name="email" label="Email Address"/>

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack alignItems={"flex-end"} sx={{ my: 2 }}>
        <Link
          variant="body2"
          color="inherit"
          underline="always"
          to="/auth/reset-password"
          component={RouterLink}
        >
          Forgot Password?
        </Link>
      </Stack>
      <Button
        fullWidth
        color="inherit"
        size="medium"
        type="submit"
        variant="contained"
      >
        Login
      </Button>
    </FormProvider>
  )
}

export default LoginForm