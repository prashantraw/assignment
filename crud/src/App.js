import React, { useState } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { initialData } from './initialData';



export default function App() {

  const [form, setform] = useState(initialData);
  const [successfull, setSuccessfull] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null)

  const checkValidationErrors = () => {
    let hasError = false;
    let ErrorMsg = [];
    if (form.password.length < 5) {
      hasError = true
      ErrorMsg.push("Password must be greater than 5 digits!")
    }
    if (form.password !== form.confirmPassword) {
      hasError = true
      ErrorMsg.push("Password does not match!")
    }
    setValidationErrors(ErrorMsg)
    return hasError
  }


  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setform({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkValidationErrors()) {

      let myurl = "http://localhost:5000/api/users"
      axios.post(myurl, form).then(res => {
        console.log(res.data)
        setSuccessfull(true)
      })

      setform(initialData)
      setSelectedImage(null)
    }

  }

  const handleFileInput = (e) => {
    const file = e.target.files[0]
    const imageFormData = new FormData();
    imageFormData.append("profileImage", file, file.name)
    setSelectedImage(URL.createObjectURL(file))
    axios.post("http://localhost:5000/api/imageupload", imageFormData)
      .then(res => {
        setform({ ...form, profileImage: res.data.data._id })
      })
  }

  if (successfull) {
    return (<div class="bg-blue-600 bg-opacity-75 h-screen text-center justify-center" >

      <Container maxWidth="m">
        <CssBaseline />

        <Box className="rounded-lg shadow-lg pt-6" sx={{ bgcolor: '#ffff', height: '80vh' }} >
          <header className=" text-2xl font-extrabold">Registration Form</header>
          <div class=" justify-center mt-8 content-center">
            User Registered Successfully
            <input type="button" value="Create Another User" onClick={() => setSuccessfull(false)} />
          </div>
        </Box>
      </Container>
    </div>)
  }

  return (

    <div class="bg-ghostwhite-600 bg-opacity-75 h-screen text-center justify-center" >

      <Container maxWidth="sm">
        <CssBaseline />

        <Box className="rounded-lg shadow-lg p-6 mt-10" sx={{ bgcolor: '#ffff' }} >
          <header className=" text-3xl font-extrabold text-blue-900">Registration Form</header>
          <div class=" justify-center mt-8 content-center ">
            {selectedImage && <img src={selectedImage} />}
            <input type="file" name="profileImage" onChange={handleFileInput} />
            <form onSubmit={handleSubmit}>
              <div className=" mt-2">
                <br />
                <TextField
                  required
                  size="small"
                  type="username"
                  label="username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                />
              </div><br />
              <div >

                <TextField
                  required
                  type="name"
                  size="small"
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div><br />
              <div>

                <TextField
                  required
                  size="small"
                  type="Password"
                  label="Password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div><br />
              <div>

                <TextField
                  required
                  size="small"
                  type="Password"
                  label="ConfirmPassword"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              {validationErrors.map(error => <div >{error}</div>)}

              <br />
              <div>

                <TextField
                  required
                  size="small"
                  type="Number"
                  label="Zip Code"
                  name="zipCode"
                  value={form.zipCode}
                  onChange={handleChange}
                />
              </div><br />
              <Button className="shadow-xl hover:bg-blue-700" variant="outlined" type="submit" color="secondary" > Submit </Button>
            </form>
          </div>
        </Box>
      </Container>
    </div>
  )
}