import { Box, Divider, Fab, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import WorkIcon from '@mui/icons-material/Work';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';


export default function Services() {
    return (<>
        <Box sx={{ textAlign: "center", marginTop: 5 }}>
            <h1>SERVICES</h1>
            <p className='textstyle'>Lorem ipsum dolor sit amet consectetur.</p>
        </Box>
        <Stack direction='row' gap={3}>

            <Stack direction="column" sx={{ marginTop: 5, marginLeft: 15 }} >
                <Stack sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 350,
                        height: 350,
                        // bgcolor: '#cfe8fc'
                    },
                }}>

                    <Paper elevation={10} sx={{ borderRadius: 4 }}>
                        <Stack direction="column">
                            <Fab color="" id='fab1' aria-label="add" sx={{ width: 100, height: 100, margin: 'auto', marginTop: 4, border: "5px solid #1976D2", }}  >
                                <WorkIcon />
                            </Fab>
                            <Typography className='' variant="h5" gutterBottom sx={{ margin: 'auto', fontWeight: 10, marginTop: 2 }}>
                                WEB DESIGN
                            </Typography>
                            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique numquam iusto delectus facere dolorem obcaecati beatae nobis animi blanditiis.</p>

                            {/* //color: "GrayText", */}
                        </Stack>
                    </Paper>
                </Stack>
            </Stack>
            <Stack direction="column" sx={{ marginTop: 5 }} >
                <Stack sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 350,
                        height: 350,
                        // bgcolor: '#cfe8fc'
                    },
                }}>

                    <Paper elevation={10} sx={{ borderRadius: 4 }}>
                        <Stack direction="column">
                            <Fab id='fab2' color="GrayText" aria-label="add" sx={{ width: 100, height: 100, margin: 'auto', marginTop: 4, border: "5px solid #1976D2" }}  >
                                <DesktopWindowsIcon />
                            </Fab>
                            <Typography className='' variant="h5" gutterBottom sx={{ margin: 'auto', fontWeight: 10, marginTop: 2 }}>
                                WEB DEVELOPMENT
                            </Typography>
                            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique numquam iusto delectus facere dolorem obcaecati beatae nobis animi blanditiis.</p>

                            {/* //color: "GrayText", */}
                        </Stack>
                    </Paper>
                </Stack>
            </Stack>
            <Stack direction="column" sx={{ marginTop: 5 }} >
                <Stack sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 350,
                        height: 350,
                        // bgcolor: '#cfe8fc'
                    },
                }}>

                    <Paper elevation={10} sx={{ borderRadius: 4 }}>
                        <Stack direction="column">
                            <Fab id='fab3' color="GrayText" aria-label="add" sx={{ width: 100, height: 100, margin: 'auto', marginTop: 4, border: "5px solid #1976D2" }}  >
                                <TabletAndroidIcon />
                            </Fab>
                            <Typography className='' variant="h5" gutterBottom sx={{ margin: 'auto', fontWeight: 10, marginTop: 2 }}>
                                RESPONSIVE DESIGN
                            </Typography>
                            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique numquam iusto delectus facere dolorem obcaecati beatae nobis animi blanditiis.</p>

                            {/* //color: "GrayText", */}
                        </Stack>
                    </Paper>
                </Stack>
            </Stack>






        </Stack>








    </>
        // <Stack sx={{ height: 100, width: 100 }} >
        //     <Paper elevation={10}  >
        //         <Stack>
        //             <Fab sx={{ color: "GrayText", justifyContent: "center", marginTop: 2 }} aria-label="add" variant='outlined'>
        //                 <WorkIcon />
        //             </Fab>
        //         </Stack>
        //         <Stack direction='column' sx={{ color: "GrayText" }}>
        //             <h5>WEB DESIGN</h5>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.</p>
        //         </Stack>

        //     </Paper>
        // </Stack>

    )
}
