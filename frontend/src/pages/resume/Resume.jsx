import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { Grid } from '@mui/material';
import { useMutation, useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

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

const SET_RESUME = gql`
mutation setResume($resumeId: UUID){
setResume(
    resumeId: $resumeId,
)
{
  success
}
}
`
    const [setResume, { data1 }] = useMutation(SET_RESUME, {
        variables: {}
    });


    const { data } = useQuery(GET_RESUMES);
    const resumes = data && data.resumes;


    const handleMutation = (resumeId) => {
        setResume({
          variables: {
            resumeId: resumeId,
          }
        });
      }

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <p className='font-extrabold text-2xl text-center pb-10'>Select Template</p>
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
                                    <Link to={{
                                        pathname: `/resume`
                                    }}
                                        target="_blank">
                                    <Button size="small" onClick={() => handleMutation(item.id)}>Use this Template</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Box>
    );
}
