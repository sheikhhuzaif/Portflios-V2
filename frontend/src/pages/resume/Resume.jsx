import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
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

    const GET_RESUMES = gql`
    query getResumes{
        resumes{
            templateName
            paid
            imagePath
    }
}
`

    const { data } = useQuery(GET_RESUMES);
    console.log(data);
    const resumes = data && data.resumes;
    console.log(resumes);

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <div className='portfolio '>
            <Grid container spacing={2} className='p-6'>
                    {resumes && resumes?.map((item) => (
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
