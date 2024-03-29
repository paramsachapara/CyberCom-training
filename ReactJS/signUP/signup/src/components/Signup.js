import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
};

function Signup() {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: signUpSchema,
  });

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: "280px",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "green" };
  const inputFielsStyle = { margin: "3px 0 0 1px" };
  const SubmitButtonStyle = { margin: "15px 0 0 0 " };
  return (
    <>
      <Grid>
        <Paper elevation={4} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockIcon />
            </Avatar>
            <h1 style={{ margin: 0 }}>SignUp</h1>
            <Typography variant="caption">
              Please fill this form to add account
            </Typography>
          </Grid>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              style={inputFielsStyle}
              label="Name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name && (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            )}
            <TextField
              fullWidth
              style={inputFielsStyle}
              label="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            )}
            <FormControl style={inputFielsStyle}>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="gender"
                style={{ display: "initial" }}
                onChange={formik.handleChange}
                value={formik.values.gender}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            {formik.errors.gender && (
              <div style={{ color: "red" }}>{formik.errors.gender}</div>
            )}
            <TextField
              fullWidth
              style={inputFielsStyle}
              label="Password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            )}
            <TextField
              fullWidth
              style={inputFielsStyle}
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <div style={{ color: "red" }}>
                  {formik.errors.confirmPassword}
                </div>
              )}
            <Grid align="center">
              <Button
                type="submit"
                style={SubmitButtonStyle}
                variant="contained"
                color="primary"
              >
                SignUp
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
}

export default Signup;
