import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, Input } from '@mui/material';
import "./FormComponent.css"

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

export default function Popup() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [uploadFile, setUploadFile] = React.useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Resume Uploadedf");
        console.log(uploadFile);
        handleClose();
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
                                    onChange={(e) => setUploadFile(e.target.files)}
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
