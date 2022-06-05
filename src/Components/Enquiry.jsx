import React, { useRef, useContext } from "react";
import { Paper, Button, TextField, Box } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { AppContext } from "../AppContext";

const responsivePaper = {
  minWidth: 245,
  width: "auto",

  height: "auto",
  maxWidth: "329.83px",
  maxHeight: 480,
  borderRadius: 7,
  display: "flex",
  flexDirection: "column",
  padding: "2rem 2rem",
  marginTop: "2rem",
  marginRight: "10px",
};

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup
    .string("Enter your message")
    .min(8, "Message should be of minimum 8 characters length")
    .required("Password is required"),
});

function Enquiry() {
  const { modalLoad, modalSuccess } = useContext(AppContext);
  const [open, setOpen] = modalLoad;
  const [openSuccess, setOpenSuccess] = modalSuccess;
  const handleOpen = () => setOpen(true);
  const handleOpenSuccess = () => setOpenSuccess(true);
  const handleClose = () => setOpen(false);
  const form = useRef();

  const sendEmail = () => {
    handleOpen();
    emailjs
      .sendForm(
        "service_uz3xe7v",
        "template_538lqvo",
        form.current,
        "6KiQB5SL_rMZaujzX"
      )
      .then(
        (result) => {
          handleClose();
          handleOpenSuccess();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendEmail();
    },
  });
  return (
    <Paper elevation={4} sx={responsivePaper}>
      <form ref={form} onSubmit={formik.handleSubmit}>
        <TextField
          name='email'
          type='email'
          placeholder='Email'
          multiline
          sx={{
            marginTop: "17px",
          }}
          color='primary'
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name='message'
          type='text'
          multiline
          rows={4}
          placeholder='Your Message'
          sx={{
            marginTop: "17px",
          }}
          color='primary'
          fullWidth
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button
          type='submit'
          variant='contained'
          sx={{
            marginTop: "17px",
            backgroundColor: "primary",
          }}
          fullWidth
        >
          SEND
        </Button>
      </form>
    </Paper>
  );
}

export default Enquiry;
