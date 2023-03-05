import { Box, Button, Fab, Paper, Stack, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from "react-redux";
import { AddContactData } from '../redux/contactAction';

export default function Contact() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("please enter name"),
            email: yup.string().required("please enter email").email(),
            subject: yup.string().required("please enter subject"),
            message: yup.string().required("please enter message"),

        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                dispatch(AddContactData(values))
                console.log(values);
            } catch (error) {
                console.log(error)
            }
        }
    })


    return (<>


        <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <h1>Get in Touch</h1>
            <p className='textstyle'>Send Message Us.</p>
        </Box>

        <Grid marginTop={2}>
            <Grid container smOffset={1}>
                <Grid xs={12} sm={12} md={6} lg={6}  >
                    <Stack direction="column"   >
                        <Stack sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                maxWidth: 500,
                                height: 200,
                            },
                        }}>

                            <Paper elevation={10}>
                                <ShareRoundedIcon sx={{ fontSize: 50, marginLeft: 28, marginTop: 2, color: "orange" }} />
                                <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText", marginLeft: 22, fontWeight: 'bold' }}>
                                    Social Profiles
                                </Typography>
                                <Stack direction="row" sx={{ justifyContent: "center", gap: 3 }} >
                                    <Fab color="light" aria-label="add" variant='outlined'>
                                        <TwitterIcon />
                                    </Fab>
                                    <Fab color="light" aria-label="add" variant='outlined'>
                                        <FacebookIcon />
                                    </Fab>
                                    <Fab color="light" aria-label="add" variant='outlined'>
                                        <InstagramIcon />
                                    </Fab>
                                    <a href="https://www.linkedin.com/in/akanksha-ambre-539b48223">
                                        <Fab color="light" aria-label="add" variant='outlined'  >

                                            <LinkedInIcon />
                                        </Fab>

                                    </a>
                                </Stack>
                            </Paper>




                        </Stack>
                        <Stack direction="row" gap={2}

                        >
                            <Stack sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    marginTop: 2,
                                    // marginLeft: 4,   
                                    width: 245,
                                    height: 200,
                                },
                            }}>
                                <Paper elevation={10}  >
                                    <Stack direction="column" sx={{ marginLeft: 2, alignItems: 'center', gap: 2 }}>
                                        <Stack>
                                            <Fab color="orange" sx={{ color: "orange", justifyContent: "center", marginTop: 2 }} aria-label="add" variant='outlined'>
                                                <EmailIcon />
                                            </Fab>
                                        </Stack>
                                        <Stack sx={{ color: "GrayText" }}>Email me</Stack>
                                        <h5> ambreakanksha586@gmail.com</h5>

                                    </Stack>
                                </Paper>



                            </Stack>

                            <Stack sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    marginTop: 2,
                                    // marginLeft: 4,
                                    width: 247,
                                    height: 200,
                                },
                            }}>
                                <Paper elevation={10}>
                                    <Stack direction="column" sx={{ marginLeft: 2, alignItems: 'center', gap: 2 }}>
                                        <Stack>
                                            <Fab color="orange" sx={{ color: "orange", justifyContent: "center", marginTop: 2 }} aria-label="add" variant='outlined'>
                                                <CallIcon />
                                            </Fab>
                                        </Stack>
                                        <Stack sx={{ color: "GrayText" }}>Call me</Stack>
                                        <h5> +91 7798195334</h5>

                                    </Stack>
                                </Paper>

                            </Stack>
                        </Stack>


                    </Stack>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6}  >
                    <Stack direction="column" >
                        <Stack sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                maxWidth: 500,
                                height: 420,
                                // bgcolor: '#cfe8fc'
                            },
                        }}>

                            <Paper elevation={10}>
                                <Stack direction="column">

                                    <form onSubmit={formik.handleSubmit}>
                                        <Stack direction="row" sx={{ marginTop: 4, gap: 2, marginLeft: 2 }}>
                                            <TextField
                                                id="outlined-error"
                                                label="Your Name"
                                                variant="outlined"
                                                name='name'
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                error={formik.touched.name && Boolean(formik.errors.name)}
                                                helperText={formik.touched.name && formik.errors.name}


                                            />
                                            <TextField
                                                id="outlined-basic"
                                                label="Your Email"
                                                variant="outlined"
                                                name='email'
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                            />
                                        </Stack>
                                        <Stack sx={{ marginTop: 2, mx: 2 }}>
                                            <TextField id="outlined-basic"
                                                label="Subject"
                                                variant="outlined"
                                                name='subject'
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                value={formik.values.subject}
                                                error={formik.touched.subject && Boolean(formik.errors.subject)}
                                                helperText={formik.touched.subject && formik.errors.subject}


                                            /></Stack>
                                        <Stack sx={{ marginTop: 3, mx: 2 }}>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Message"
                                                multiline
                                                rows={4}
                                                name='message'
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                value={formik.values.message}
                                                error={formik.touched.message && Boolean(formik.errors.message)}
                                                helperText={formik.touched.message && formik.errors.message}


                                            />
                                        </Stack>
                                        <Stack>
                                            <Box sx={{ margin: "auto", marginTop: 3, }}>
                                                <Button
                                                    variant="contained"
                                                    sx={{ backgroundColor: "warning" }} type='submit' size="large"
                                                    endIcon={<SendIcon />}

                                                >
                                                    Send
                                                </Button>
                                            </Box>

                                        </Stack>
                                    </form>


                                </Stack>



                            </Paper>

                        </Stack>
                    </Stack>
                </Grid>
            </Grid>

        </Grid>




























        {/* <Stack direction="row" gap={3} marginLeft={6} sx={{ display: "flex", flexWrap: "wrap" }} >

            <Stack direction="column" sx={{ marginLeft: 10, marginTop: 5, }}  >
                <Stack sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 500,
                        height: 200,
                    },
                }}>

                    <Paper elevation={10}>
                        <ShareRoundedIcon sx={{ fontSize: 50, marginLeft: 28, marginTop: 2, color: "orange" }} />
                        <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText", marginLeft: 22, fontWeight: 'bold' }}>
                            Social Profiles
                        </Typography>
                        <Stack direction="row" sx={{ justifyContent: "center", gap: 3 }} >
                            <Fab color="light" aria-label="add" variant='outlined'>
                                <TwitterIcon />
                            </Fab>
                            <Fab color="light" aria-label="add" variant='outlined'>
                                <FacebookIcon />
                            </Fab>
                            <Fab color="light" aria-label="add" variant='outlined'>
                                <InstagramIcon />
                            </Fab>
                            <Fab color="light" aria-label="add" variant='outlined'>
                                <LinkedInIcon />
                            </Fab>
                        </Stack>
                    </Paper>




                </Stack>
                <Stack direction="row" gap={2} >
                    <Stack sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            marginTop: 2,
                            // marginLeft: 4,   
                            width: 245,
                            height: 200,
                        },
                    }}>
                        <Paper elevation={10}  >
                            <Stack direction="column" sx={{ marginLeft: 2, alignItems: 'center', gap: 2 }}>
                                <Stack>
                                    <Fab color="orange" sx={{ color: "orange", justifyContent: "center", marginTop: 2 }} aria-label="add" variant='outlined'>
                                        <EmailIcon />
                                    </Fab>
                                </Stack>
                                <Stack sx={{ color: "GrayText" }}>Email me</Stack>
                                <h5> ambreakanksha586@gmail.com</h5>

                            </Stack>
                        </Paper>



                    </Stack>

                    <Stack sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            marginTop: 2,
                            // marginLeft: 4,
                            width: 247,
                            height: 200,
                        },
                    }}>
                        <Paper elevation={10}>
                            <Stack direction="column" sx={{ marginLeft: 2, alignItems: 'center', gap: 2 }}>
                                <Stack>
                                    <Fab color="orange" sx={{ color: "orange", justifyContent: "center", marginTop: 2 }} aria-label="add" variant='outlined'>
                                        <CallIcon />
                                    </Fab>
                                </Stack>
                                <Stack sx={{ color: "GrayText" }}>Call me</Stack>
                                <h5> +1 5589 55488 55</h5>

                            </Stack>
                        </Paper>

                    </Stack>
                </Stack>


            </Stack>


            <Stack direction="column" sx={{ marginTop: 5 }} >
                <Stack sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 500,
                        height: 420,
                        // bgcolor: '#cfe8fc'
                    },
                }}>

                    <Paper elevation={10}>
                        <Stack direction="column">

                            <form onSubmit={formik.handleSubmit}>
                                <Stack direction="row" sx={{ marginTop: 4, gap: 2, marginLeft: 2 }}>
                                    <TextField
                                        id="outlined-error"
                                        label="Your Name"
                                        variant="outlined"
                                        name='name'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}


                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Your Email"
                                        variant="outlined"
                                        name='email'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </Stack>
                                <Stack sx={{ marginTop: 2, mx: 2 }}>
                                    <TextField id="outlined-basic"
                                        label="Subject"
                                        variant="outlined"
                                        name='subject'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.subject}
                                        error={formik.touched.subject && Boolean(formik.errors.subject)}
                                        helperText={formik.touched.subject && formik.errors.subject}


                                    /></Stack>
                                <Stack sx={{ marginTop: 3, mx: 2 }}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        name='message'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.message}
                                        error={formik.touched.message && Boolean(formik.errors.message)}
                                        helperText={formik.touched.message && formik.errors.message}


                                    />
                                </Stack>
                                <Stack>
                                    <Box sx={{ margin: "auto", marginTop: 3, }}>
                                        <Button
                                            variant="contained"
                                            sx={{ backgroundColor: "warning" }} type='submit' size="large"
                                            endIcon={<SendIcon />}

                                        >
                                            Send
                                        </Button>
                                    </Box>

                                </Stack>
                            </form>


                        </Stack>



                    </Paper>

                </Stack>
            </Stack>
        </Stack> */}





    </>
    )
}
