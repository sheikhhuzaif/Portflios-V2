import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { useParams, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Temp1 from '../../portfolioTemplates/template1/Temp1'
import Temp2 from '../../portfolioTemplates/template1/Temp2'


export default function PortfolioView() {
    const { username } = useParams();
    console.log(username);
    const GET_TEMPLATE_DATA = gql`
    query getTemplateData($username: String){
      templateData(username: $username){
        templateName
        firstName
        lastName
        basicinfo{
            gender
            dob
            phone
            picture
            profession
            about
            age
            email
        }
        address{
            address
            state
            pincode
            city
            country
        }
        educations{
            id
            courseName
            university
            startDate
            endDate
            gpa
        }
        skills{
            id
            name
        }
        # works{
        #     id
        #     title
        #     company
        #     startDate
        # }
        # socials{
        #     id
        #     userName
        #     platform
        # }
    }
  }
  `
  const {data} = useQuery(GET_TEMPLATE_DATA, {
      variables: {
          username
      }
  });
  const templateData = data && data.templateData;
  const templateName = templateData && templateData.templateName;

  const getTemplate = (templateName) => {
    switch (templateName) {
      case "Space Cadet":
        return (
          <Temp1
              data = {templateData}
          />
        );
      case "Modern Minimalist":
        return (
          <Temp2
             data = {templateData}
          />
        );

      default:
        console.log("DEFAULT")
        return (
            <Temp1
                data = {templateData}
            />
          );
    }
  };
  
    return (<div>
       {getTemplate(templateName)}
    </div>
    );
}