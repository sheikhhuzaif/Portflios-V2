import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Grid, Input } from '@mui/material';
import "./FormComponent.css"
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
};

const Popup = ({parsedResume, setParsedResume}) => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [uploadFile, setUploadFile] = React.useState();
    
    const getResumeData = () => {
    const data = new FormData();
    data.append('file_uploaded', uploadFile)
    axios({
        method: 'POST',
        url: '/parse_resume/',
        xsrfHeaderName: "X-CSRFToken",
        headers:{
                'Content-Type': 'multipart/form-data',
            },
        data }).then((response) => {
            setParsedResume(response.data);}).catch((error) => {
            console.log("failure");
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        getResumeData();
        handleClose();
        console.log("parsed resume", parsedResume)
    };
    return (
        <div >
            <Modal
                open={open}
                onClose={(_, reason) => {
                    if (reason !== "backdropClick") {
                        handleClose();
                    }
                }}
            >
                <Box sx={style}>
                    <div className='border-4'></div>
                    <Grid className='pt-10' container spacing={2} justifyContent="center">
                        <Grid item md={5} >
                            <div className='heading'>
                                Do you wish to upload your old resume for autofill
                            </div>
                            <form className="" onSubmit={handleSubmit} >
                                <Input className="border-2"
                                    type="file"
                                    name="upload"
                                    label="Upload your Resume"
                                    onChange={(e) => setUploadFile(e.target.files[0])}
                                />
                            </form>
                        </Grid>
                        <Grid className='text-2xl text-center' item md={2} >
                            <p className='pt-10'>OR</p>
                        </Grid>
                        <Grid item md={5}>
                            <div className='heading'>
                                Do you wish to enter details yourself
                            </div>

                        </Grid>

                    </Grid>


                    <Grid className='pt-10 pb-10' container spacing={2} justifyContent="center">
                        <Grid item md={4} >
                            <Button
                                variant="outlined"
                                color="primary"
                                key="upload"
                                onClick={handleSubmit}
                            >
                                Upload resume
                            </Button>
                        </Grid>
                        <Grid md={3} >
                        </Grid>
                        <Grid item md={4}>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={handleClose}
                            >
                                Enter Manually
                            </Button>
                        </Grid>

                    </Grid>
                    <div className='border-4'></div>

                </Box>
            </Modal>

        </div>
    );
}
export default Popup;
// export {parsed_data};
