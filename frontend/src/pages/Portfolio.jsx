import { Box, Button, Card, CardActions, CardContent, CardMedia, Fab, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
export default function Portfolio() {

    return (<>
        <Box sx={{ textAlign: "center", marginTop: 5 }}>
            <h1>PORTFOLIO</h1>
            <p className='textstyle'>You can check out my portfolio for some of my recent work, and feel free to send me a message.</p>
        </Box>

        <Grid container align="center"
            sx={{ marginLeft: { md: 10, sm: 10, xs: 8, lg: 10 }, rowGap: 2 }}
        >

            <Grid lg={4} sm={6} md={6}  >
                <Card sx={{ maxWidth: 345, marginTop: 4, }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9kbyUyMGxpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            ToDo List
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt odit blanditiis nam, officiis fuga ab consectetur veritatis!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Stack direction='row' >
                            <Button size="small">Web Design<span className='spanstyle'> /18 Sep. 2018</span></Button>
                            <Fab sx={{ marginLeft: 12, }} color="primary" size="medium" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Stack>


                    </CardActions>
                </Card>
            </Grid>
            <Grid lg={4} sm={6} md={6} >
                <Card sx={{ maxWidth: 345, marginTop: 4, }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Blog Application
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt odit blanditiis nam, officiis fuga ab consectetur veritatis!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Stack direction='row' >
                            <Button size="small">Web Design<span className='spanstyle'> /18 Sep. 2018</span></Button>
                            <Fab sx={{ marginLeft: 12, }} color="primary" size="medium" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Stack>

                    </CardActions>
                </Card>
            </Grid>
            <Grid lg={4} sm={6} md={6}  >
                <Card sx={{ maxWidth: 345, marginTop: 4, }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://plus.unsplash.com/premium_photo-1661774910035-05257f7d73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            E-commerce Application
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt odit blanditiis nam, officiis fuga ab consectetur veritatis!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Stack direction='row' >
                            <Button size="small">Web Design<span className='spanstyle'> /18 Sep. 2018</span></Button>
                            <Fab sx={{ marginLeft: 12, }} color="primary" size="medium" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Stack>

                    </CardActions>
                </Card>
            </Grid>
            <Grid lg={4} sm={6} md={6} >
                <Card sx={{ maxWidth: 345, marginTop: 4, }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGVtcGxveWVlJTIwbWFuYWdlbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Employee Management
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt odit blanditiis nam, officiis fuga ab consectetur veritatis!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Stack direction='row' >
                            <Button size="small">Web Design<span className='spanstyle'> /18 Sep. 2018</span></Button>
                            <Fab sx={{ marginLeft: 12, }} color="primary" size="medium" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Stack>

                    </CardActions>
                </Card>
            </Grid>
            <Grid lg={4} sm={6} md={6}  >

                <Card sx={{ maxWidth: 345, marginTop: 4, }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJEoLbxAOhlAz2JjsfJZKm5bjVucN7hJ8Lg&usqp=CAU" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Tic Tac Toe
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt odit blanditiis nam, officiis fuga ab consectetur veritatis!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Stack direction='row' >
                            <Button size="small">Web Design<span className='spanstyle'> /18 Sep. 2018</span></Button>
                            <Fab sx={{ marginLeft: 12, }} color="primary" size="medium" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Stack>

                    </CardActions>
                </Card>
            </Grid>
            <Grid lg={4} sm={6} md={6} >
                <Card sx={{ maxWidth: 345, marginTop: 4, }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1579621970343-21c491b3f363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9uZXklMjBtYW5hZ2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Money Manager
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt odit blanditiis nam, officiis fuga ab consectetur veritatis!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Stack direction='row' >
                            <Button size="small">Web Design<span className='spanstyle'> /18 Sep. 2018</span></Button>
                            <Fab sx={{ marginLeft: 12, }} color="primary" size="medium" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Stack>

                    </CardActions>
                </Card>
            </Grid>











            {/* <Grid xl={4} lg={4} md={6} sm={6} xs={12} > */}
            {/* <Grid container sx={{ marginX: { lg: 15, md: 22, sm: 25, xs: 8 } }}></Grid> */}
            {/* </Grid> */}




            {/* <Grid lg={6} md={6} sm={12} xs={12}>
                <Grid container>
                    <Card sx={{ maxWidth: 345, marginTop: 4,   }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGVtcGxveWVlJTIwbWFuYWdlbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Employee Management
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt odit blanditiis nam, officiis fuga ab consectetur veritatis!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Stack direction='row' >
                                <Button size="small">Web Design<span className='spanstyle'> /18 Sep. 2018</span></Button>
                                <Fab sx={{ marginLeft: 12, }} color="primary" size="medium" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Stack>

                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, marginTop: 4,   }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJEoLbxAOhlAz2JjsfJZKm5bjVucN7hJ8Lg&usqp=CAU" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tic Tac Toe
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt odit blanditiis nam, officiis fuga ab consectetur veritatis!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Stack direction='row' >
                                <Button size="small">Web Design<span className='spanstyle'> /18 Sep. 2018</span></Button>
                                <Fab sx={{ marginLeft: 12, }} color="primary" size="medium" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Stack>

                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, marginTop: 4,   }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://images.unsplash.com/photo-1579621970343-21c491b3f363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9uZXklMjBtYW5hZ2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Money Manager
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora incidunt odit blanditiis nam, officiis fuga ab consectetur veritatis!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Stack direction='row' >
                                <Button size="small">Web Design<span className='spanstyle'> /18 Sep. 2018</span></Button>
                                <Fab sx={{ marginLeft: 12, }} color="primary" size="medium" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Stack>

                        </CardActions>
                    </Card>
                </Grid>

            </Grid> */}


        </Grid>
        {/* </Grid> */}





    </>
    )
}
