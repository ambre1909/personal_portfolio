import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import kate from './kate.jpg'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
export default function About() {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));
    return (<>



        <Grid container >
            <Grid sm={12} md={6} lg={6} >
                <Stack>

                    <Stack direction="row" gap={2} >
                        <Paper elevation={3} sx={{ marginLeft: 10, height: 100, marginTop: 4 }}>
                            <img src={kate} alt="" srcset="" height={150} width={150} />
                        </Paper>
                        <Box sx={{ height: 10, marginTop: 7, gap: 10, }} >
                            <span className='spanposition'>Name:<span className="textstyle "> Akanksha Ambre</span></span>
                            <br />
                            <span>Profile:<span className="textstyle"> Frontend Devloper</span></span>
                            <br />
                            <span><span className="textstyle">ambreakanksha586@gmail.com</span></span>
                            <br />
                            <span>Phone:<span className="textstyle">+917798195334</span></span>


                        </Box>
                    </Stack>
                    <Box paddingRight={3} >
                        <Stack direction="column" sx={{ marginTop: 8, marginLeft: 10 }}>
                            <h3>Skills</h3>
                            <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText" }}>
                                HTML
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={85} sx={{ marginBottom: 1 }} />
                            <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText" }}>
                                CSS3
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={70} sx={{ marginBottom: 1 }} />
                            <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText" }}>
                                Javascript
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={80} sx={{ marginBottom: 1 }} />
                            <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText" }}>
                                React Js
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={85} sx={{ marginBottom: 1 }} />
                            <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText" }}>
                                Node-js
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={50} sx={{ marginBottom: 1 }} />
                            <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText" }}>
                                Bootstrap
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={70} />
                        </Stack>
                    </Box>
                </Stack>
            </Grid>
            <Grid sm={12} md={6} lg={6} xs={12}
                sx={{ padding: { xs: 6, md: 4, sm: 5, lg: 0 } }}
            >
                <Typography variant="h4" sx={{
                    fontWeight: 'bold',
                    marginBottom: 1,
                    marginLeft:

                        { xs: 20, md: 20, sm: 30, lg: 30 },

                    marginTop: { md: 4, xs: 1 },
                }}>
                    About me
                </Typography>

                <Box
                    sx={{ paddingRight: { md: 4, } }}
                >
                    <p className='textstyle'>
                        Hello, my name is Akanksha Gorakh Ambre and I am a frontend developer. I have recently graduated from Deogiri Institute Of Engineering And Management Studies with a degree in Civil Engineering.
                        Completed an internship as a frontend developer at SKILLHUB IT Solutions Company, where I worked on creating responsive web pages  and developing user interfaces using ReactJS.
                        Developed a personal portfolio website using ReactJS and Material UI deployed it on GitHub pages. Also created a responsive  e-commerce website using React-js ,Node-js and Material UI and Clone of Blah Blah car using React-js ,and Node-js
                    </p>
                    {/* <br /> */}
                    {/* <p className='textstyle' >
                        Ever since I was introduced to coding, I have been fascinated by the ability to create something from scratch using just a few lines of code. Over the years, I have honed my skills in HTML, CSS, and JavaScript,React-js Node-js  and I am constantly exploring new technologies and frameworks to stay on top of the latest trends in web development.
                        In my free time, I like to work on personal projects and experiment with different design patterns and coding techniques. I believe that the key to becoming a great developer is to always be curious and never stop learning. I am always looking for new challenges and opportunities to improve my skills and make an impact.

                    </p> */}
                    {/* <br /> */}
                    <p className='textstyle'>
                        Ever since I was introduced to coding, I have been fascinated by the ability to create something from scratch using just a few lines of code. Over the years, I have honed my skills in HTML, CSS, and JavaScript,React-js Node-js  and I am constantly exploring new technologies and frameworks to stay on top of the latest trends in web development.
                        <br />
                        If you are looking for a dedicated and hardworking frontend developer who is passionate about building elegant and user-friendly web applications, then I would love to hear from you.</p>
                </Box>

            </Grid>


        </Grid>





















        {/* <Stack direction="row" gap={3} sx={{ marginTop: 4 }}>
            <Stack direction="column">
                <Stack direction="row" >
                    <Paper elevation={3} sx={{ marginLeft: 10, height: 100, marginTop: 4 }}>
                        <img src={kate} alt="" srcset="" height={150} width={150} />
                    </Paper>
                    <Box sx={{ marginLeft: 10, height: 10, marginTop: 7, gap: 10, }} >
                        <span className='spanposition'>Name:<span className="textstyle "> Akanksha Ambre</span></span>
                        <br />
                        <span>Profile:<span className="textstyle"> Frontend Devloper</span></span>
                        <br />
                        <span>Email:<span className="textstyle">ambreakanksha586@gmail.com</span></span>
                        <br />
                        <span>Phone:<span className="textstyle">+1 5589 55488 55</span></span>


                    </Box>
                </Stack>
                <Stack direction="column" sx={{ marginTop: 8, marginLeft: 10 }}>
                    <h3>Skills</h3>
                    <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText" }}>
                        HTML 85%
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={85} sx={{ marginBottom: 1 }} />
                    <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText" }}>
                        CSS3 70%
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={70} sx={{ marginBottom: 1 }} />
                    <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText" }}>
                        Javascript 85%
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={85} sx={{ marginBottom: 1 }} />
                    <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText" }}>
                        React Js 80%
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={80} sx={{ marginBottom: 1 }} />
                    <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText" }}>
                        Node-js 50%
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={50} sx={{ marginBottom: 1 }} />
                    <Typography className='' variant="h6" gutterBottom sx={{ color: "GrayText" }}>
                        Bootstrap 70%
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={70} />
                </Stack>
            </Stack>




            <Stack direction="column">
                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 1, marginLeft: 30, marginTop: 4 }}>
                    About me
                </Typography>


                <p className='textstyle' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque obcaecati praesentium nemo recusandae, repudiandae necessitatibus placeat eveniet pariatur odit alias cupiditate nisi ipsum quos ea fuga, iusto magni consequatur? Quaerat optio beatae hic quisquam similique!</p>
                <br />
                <p className='textstyle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque obcaecati praesentium nemo recusandae, repudiandae necessitatibus placeat eveniet pariatur odit alias cupiditate nisi ipsum quos ea fuga, iusto magni consequatur? Quaerat optio beatae hic quisquam similique!</p>
                <br />
                <p className='textstyle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque obcaecati praesentium nemo recusandae, repudiandae necessitatibus placeat eveniet pariatur odit alias cupiditate nisi ipsum quos ea fuga, iusto magni consequatur? Quaerat optio beatae hic quisquam similique!</p>
            </Stack>
        </Stack> */}




    </>

    )
}
