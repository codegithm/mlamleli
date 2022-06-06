import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography,
} from "@mui/material";

const validationSchema = yup.object({
  fname: yup
    .string("Enter your full name")
    .min(2, "Full name should be of minimum 2 characters length")
    .required("Full name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your message")
    .min(8, "Message should be of minimum 8 characters length")
    .required("Password is required"),
  number: yup
    .string("Enter cellphone number")
    .min(9, "Cellphone number should be of minimum 10 characters length")
    .required("Number is required"),
});

function SignUpForm() {
  const [plan, setPlan] = useState("");
  const [planSelected, setPlanSelected] = useState(true);
  const form = useRef();

  const handleChange = (event) => {
    setPlan(event.target.value);
    setPlanSelected(true);
  };
  const formik = useFormik({
    initialValues: {
      fname: "",
      email: "",
      password: "",
      number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (plan !== "") {
        setPlanSelected(true);
        const signIn = {
          email: values.email,
          password: values.password,
        };
        const toDB = {
          name: values.fname,
          number: values.number,
          plan: plan,
        };
        console.log(signIn);
        console.log(toDB);
      } else {
        setPlanSelected(false);
      }
    },
  });
  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
      <TextField
        id='name'
        label='Name'
        name='fname'
        variant='standard'
        sx={{
          marginTop: "17px",
        }}
        color='primary'
        value={formik.values.fname}
        onChange={formik.handleChange}
        error={formik.touched.fname && Boolean(formik.errors.fname)}
        helperText={formik.touched.fname && formik.errors.fname}
      />
      <TextField
        id='email'
        label='Email'
        variant='standard'
        name='email'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{
          marginTop: "17px",
        }}
        color='primary'
      />
      <TextField
        type='password'
        id='password'
        label='Password'
        name='password'
        variant='standard'
        sx={{
          marginTop: "17px",
        }}
        color='primary'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <TextField
        id='number'
        label='Number'
        variant='standard'
        type='number'
        value={formik.values.number}
        onChange={formik.handleChange}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
        // InputLabelProps={{
        //   shrink: true,
        // }}
        sx={{
          marginTop: "17px",
        }}
        color='primary'
      />
      <FormControl variant='standard' sx={{ marginTop: "17px" }}>
        <InputLabel id='demo-simple-select-standard-label'>
          Select a plan
        </InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={plan}
          onChange={handleChange}
          label='Select a plan'
          color='primary'
        >
          <MenuItem value={"1+5 Casket Funeral Plan"}>
            1+5 Casket Funeral Plan
          </MenuItem>
          <MenuItem value={"1+9 Casket Funeral Plan"}>
            1+9 Casket Funeral Plan
          </MenuItem>
          <MenuItem value={"Plan A 3 Tier Coffin Funeral Plan"}>
            Plan A 3 Tier Coffin Funeral Plan
          </MenuItem>
          <MenuItem value={"Plan B Family Casket Funeral Plan"}>
            Plan B Family Casket Funeral Plan
          </MenuItem>
          <MenuItem value={"Plan C Family Casket Funeral Plan"}>
            Plan C Family Casket Funeral Plan
          </MenuItem>
        </Select>
      </FormControl>
      <Typography
        variant='p'
        sx={{
          display: `${planSelected ? "none" : "block"}`,
          fontSize: "12px",
          color: "red",
        }}
      >
        Please select a plan
      </Typography>

      <Button
        variant='contained'
        type='submit'
        sx={{
          marginTop: "17px",
          backgroundColor: "primary",
        }}
      >
        SIGN UP
      </Button>
    </form>
  );
}

export default SignUpForm;
