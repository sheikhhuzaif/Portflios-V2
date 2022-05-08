import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Tooltip from '@mui/material/Tooltip';
import { Grid } from '@mui/material';
import { useMutation, useQuery, gql } from "@apollo/client";

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
            id
            templateName
            paid
            imagePath
    }
}
`

    const GET_USERNAME = gql`
query getUsername{
    userData{
        username
}
}
`
    const SET_TEMPLATE = gql`
mutation setTemplate($templateId: UUID){
setTemplate(
    templateId: $templateId,
)
{
  success
}
}
`
    const [setTemplate, { data1 }] = useMutation(SET_TEMPLATE, {
        variables: {}
    });

    const { data: userData } = useQuery(GET_USERNAME);
    const { data } = useQuery(GET_PORTFOLIOS);
    const userData1 = userData && userData.userData;
    const username = userData1 && userData1.username;
    const portfolios = data && data.portfolios;

    const handleMutation = (templateId) => {
        setTemplate({
          variables: {
            templateId: templateId,
          }
        });
      }

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <p className='font-extrabold text-2xl text-center pb-10'>Select Template</p>
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
                                    <Link to={{
                                        pathname: `/view/${username}`
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
