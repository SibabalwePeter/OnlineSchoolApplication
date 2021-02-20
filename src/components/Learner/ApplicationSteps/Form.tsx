import * as React from 'react';
import { Container } from 'reactstrap';
import { FormControl, InputLabel, MenuItem, Select, TextField,   } from '@material-ui/core';

export const Learner=()=>{
    return (
        <Container>
            <form  noValidate autoComplete="off">
                <div>
                    <FormControl className="d-xl m-4 col-1">
                        <InputLabel id="genderLbl">Age</InputLabel>
                        <Select
                            labelId="genderLbl"
                            id="gender"
                            value="Male"
                        >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField className="d-xl m-4 col-3" label="First Name" />
                    <TextField className="d-xl m-4 col-3" label="Middle Name" />
                    <TextField className="d-xl m-4 col-3" label="Second Name" />
                    <TextField className="d-xl m-4 col-3" label="ID Number" />
                </div>
                <div>
                    <TextField className="d-xl m-4 col-2" label="Email Address" />
                    <TextField className="d-xl m-4 col-2" label="Contact Number" />
                    <TextField className="d-xl m-4 col-2" label="Contact Number 2" />
                    <TextField className="d-xl m-4 col-4" label="Home Address" />
                    <div className="input-group m-4 col-2">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input d-xl" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose your image</label>
                        </div>
                    </div>
                </div>
            </form>
        </Container>
    )
}

export const NextOfKin =()=>{
    return (
        <Container>
            <form noValidate autoComplete="off">
                <div>
                    <TextField className="d-xl m-4 col-3" label="First Name" />
                    <TextField className="d-xl m-4 col-3" label="Middle Name" />
                    <TextField className="d-xl m-4 col-3" label="Second Name" />
                    <TextField className="d-xl m-4 col-3" label="ID Number" />
                </div>
                <div>
                    <TextField className="d-xl m-4 col-2" label="Email Address" />
                    <TextField className="d-xl m-4 col-2" label="Contact Number" />
                    <TextField className="d-xl m-4 col-2" label="Contact Number 2" />
                </div>
            </form>
        </Container>
    )
}