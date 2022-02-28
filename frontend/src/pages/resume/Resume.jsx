import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';

import temp1 from '..\\..\\images\\temp1.png';
import temp2 from '..\\..\\images\\temp2.png';
import temp3 from '..\\..\\images\\temp3.png';
import { Grid } from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export default function Resume() {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <div className='resume '>
                <Grid
                    container
                    spacing={5}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item>
                        <Card className='' sx={{ maxWidth: 700 }}>
                            <CardMedia
                                component="img"
                                alt="Template 1"
                                height="140"
                                image={temp1}
                            />
                            <CardActions >
                                <Button size="small">Demo</Button>
                                <Button size="small">Use this Template</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className='cardStyle' sx={{ maxWidth: 700 }}>
                            <CardMedia
                                component="img"
                                alt="Template 2"
                                height="140"
                                image={temp2}
                            />
                            <CardActions>
                                <Button size="small">Demo</Button>
                                <Button size="small">Use this Template</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card className='cardStyle' sx={{ maxWidth: 700 }}>
                            <CardMedia
                                component="img"
                                alt="Template 3"
                                height="140"
                                image={temp3}
                            />
                            <CardActions>
                                <Button size="small">Demo</Button>
                                <Button size="small">Use this Template</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            </div>
        </Box>
    );
}
