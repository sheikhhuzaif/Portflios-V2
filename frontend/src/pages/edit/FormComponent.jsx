import React, { Component } from "react";
import "./FormComponent.css"
import {
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import Step1 from "./Steps/step1";
import Step2 from "./Steps/step2";
import Step3 from "./Steps/step3";
import Step4 from "./Steps/step4";
import Step5 from "./Steps/step5";
import Step6 from "./Steps/step6";
import FinalStep from "./Steps/FinalStep";
import { styled } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


class FormComponent extends Component {

  state = {
    steps: [
      { label: "Personal Details" },
      { label: "Address" },
      { label: "Qualifications" },
      { label: "Skills" },
      { label: "Work Experience" },
      { label: "Social" },
    ],
    stepCount: 0,
  };
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("form submitted");
    };

    const handleNextStep = () => {
      let { stepCount } = this.state;
      console.log("stepCount", stepCount);
      stepCount = stepCount + 1;
      this.setState({ stepCount });
    };
    const handleBackStep = () => {
      let { stepCount } = this.state;
      stepCount = stepCount - 1;
      this.setState({ stepCount });
    };

    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return (
            <Step1
              state={this.state}
              handleNext={handleNextStep}
            />
          );
        case 1:
          return (
            <Step2
              state={this.state}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
            />
          );
        case 2:
          return (
            <Step3
              state={this.state}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
              handleSubmit={handleSubmit}
            />
          );
        case 3:
          return (
            <Step4
              state={this.state}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
              handleSubmit={handleSubmit}
            />
          );
        case 4:
          return (
            <Step5
              state={this.state}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
              handleSubmit={handleSubmit}
            />
          );
        case 5:
          return (
            <Step6
              state={this.state}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
              handleSubmit={handleSubmit}
            />
          );
        case 6:
          return <FinalStep data={this.state.data} />;
        default:
          return (
            <Step1
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
            />
          );
      }
    };

    return (
      // <Box className="formContainer" component="main" sx={{ flexGrow: 1, p: 3 }}>
      // <DrawerHeader />
      <div className="head">
         <DrawerHeader />
        <div className="formContainer" >
          

          <div className="form">
            <div className="formHead " component={Box} mb={1}>
              <div className="heading" pt={2} style={{ marginBottom: "10px" }}>
                Enter your details
              </div>
              <Stepper className="borderRadius " activeStep={this.state.stepCount} alternativeLabel>
                {this.state.steps.map((item) => (
                  <Step key={item.label}>
                    <StepLabel>{item.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            {getStepContent(this.state.stepCount)}
            {/* <Step6/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default FormComponent;