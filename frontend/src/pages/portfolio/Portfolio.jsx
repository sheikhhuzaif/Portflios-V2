import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';

import Tooltip from '@mui/material/Tooltip';
import { Grid } from '@mui/material';
import { useQuery, gql } from "@apollo/client";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export default function Portfolio() {

    const GET_PORTFOLIOS = gql`
    query getPortfolios{
        portfolios{
            templateName
            paid
            imagePath
    }
}
`

    const { data } = useQuery(GET_PORTFOLIOS);
    console.log(data);
    const portfolios = data && data.portfolios;
    console.log(portfolios);

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <div className='portfolio '>
                <Grid container spacing={2} className='p-6'>
                    {portfolios && portfolios?.map((item) => (
                        <Grid item md={4} className='p-5 pb-20'>
                            <Card className='cardStyle' sx={{ maxWidth: 700 }}>
                                <Tooltip title={item.templateName} followCursor>
                                    <CardMedia
                                        component="img"
                                        alt={item.templateName}
                                        height="140"
                                        image={item.imagePath}
                                    />
                                </Tooltip>
                                <CardActions >
                                    <Button size="small">Demo</Button>
                                    <Button size="small">Use this Template</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Box>
    );
}
