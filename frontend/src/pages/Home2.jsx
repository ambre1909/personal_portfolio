import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import wave from './wave.svg'
import Typewriter from 'typewriter-effect';
import kate from './kate.jpg'

export default function Home2() {
    return <>

        <Grid container sx={{ display: "flex", justifyContent: "space-between" }} >
            <Grid xs={12} lg={4} >
                <Box className="homebgnew" sx={{}}></Box>

            </Grid>
            <Grid xs={12} lg={7} sx={{ marginRight: { md: 8, } }}  >
                {/* <Box direction="column" spacing={2} sx={{ sm: { padding: '0px  50px 100px 50px' }, lg: { paddingTop: "100px" } }}> */}
                <Box direction="column" spacing={2}
                    // sx={{ width: [100, 200, 300] }}
                    sx={{
                        padding: {
                            xs: '0px  50px 50px 100px',
                        },
                        marginTop: {
                            md: 10,
                        },


                    }}


                // top padding is 25px
                // right padding is 50px
                // bottom padding is 75px
                // left padding is 100px

                >

                    <Typography

                        className='hi'
                        variant="h5" gutterBottom>
                        Hiii there !
                    </Typography>

                    <Typography variant="h3" className='about'>
                        <Typewriter
                            options={{
                                strings: "I am Akanksha Ambre.",
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Typography>
                    <Typography variant="h5" className='about' >
                        I am a frontend developer with a strong foundation in HTML, CSS, JavaScript  and React-Js  based in India, I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design. </Typography>


                    <Stack direction={"row"} marginTop={5} spacing={1}
                        sx={{ marginLeft: { md: 12, sm: 20 } }}
                    >
                        <Link to="/contact" style={{ textDecoration: "none " }}>
                            <Button variant="contained" size="large" >
                                Get In Touch
                            </Button>
                        </Link>

                        <a href='./images/Resume.pdf' download="Resume" style={{ textDecoration: "none " }}  >
                            <Button variant="contained" size="large" >

                                DOWNLOAD CV
                            </Button>
                        </a>

                    </Stack>

                </Box>
            </Grid>

        </Grid>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ marginTop: "-15%" }}>
            <path fill="#1976D2" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,181.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    </>
}
