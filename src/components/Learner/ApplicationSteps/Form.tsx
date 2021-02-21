import * as React from 'react';
import { Container } from 'reactstrap';
import { FormControl, InputLabel, MenuItem, Select, TextField,   } from '@material-ui/core';
import * as Application from '../../../store/ApplicationForm';

export const Learner=()=>{
    return (
        <Container>
            <form  noValidate autoComplete="off">
                <div>
                    <FormControl className="d-xl m-4 col-1">
                        <InputLabel id="genderLbl">Gender</InputLabel>
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

    const updateNextOfKin = (e: { target: any; }) => {
        Application.updateNextOfKin(e.target.value, e.target.id);
    }

    return (
        <Container>
            <form noValidate autoComplete="off">
                <div>
                    <TextField className="d-xl m-4 col-3" id="firstname" label="First Name" onChange={updateNextOfKin} />
                    <TextField className="d-xl m-4 col-3" id="middlename" label="Middle Name" />
                    <TextField className="d-xl m-4 col-3" id="secondname" label="Second Name" />
                    <TextField className="d-xl m-4 col-3" id="idnumber" label="ID Number" />
                </div>
                <div>
                    <TextField className="d-xl m-4 col-2" id="emailaddress" label="Email Address" />
                    <TextField className="d-xl m-4 col-2" id="contact1" label="Contact Number" />
                    <TextField className="d-xl m-4 col-2" id="contact2" label="Contact Number 2" />
                </div>
            </form>
        </Container>
    )
}

export const CurrentSubjects = () => {
    return (
        <Container>
            <form noValidate autoComplete="off">
                <div>

                    <table className="table table-striped col-6">
                        <thead>
                            <th>Subject</th>
                            <th>%</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <FormControl className="col-8 d-flex">
                                    <Select
                                        value="Male"
                                    >
                                        <MenuItem value="---">---</MenuItem>
                                        <MenuItem value="XhosaML">IsiXhosa Home Language</MenuItem>
                                            <MenuItem value="EnglishHL">English HL</MenuItem>
                                        <MenuItem value="EnglishFAL">English FAL</MenuItem>
                                        <MenuItem value="AfrikaansHL">Afrikaans HL</MenuItem>
                                    </Select>
                                </FormControl>
                            </td>
                                <td className=""><TextField id="outlined-basic" variant="outlined" /></td>
                        </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary">Add</button>
                </div>
            </form>
        </Container>
    )
}

export const ProposedSubjects = () => {
    return (
        <Container>
            <form noValidate autoComplete="off">
                <div>

                    <table className="table table-striped col-6">
                        <thead>
                            <th>Subject</th>
                            <th>%</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <FormControl className="col-8 d-flex">
                                        <Select
                                            value="Male"
                                        >
                                            <MenuItem value="---">---</MenuItem>
                                            <MenuItem value="XhosaML">IsiXhosa Home Language</MenuItem>
                                            <MenuItem value="EnglishHL">English HL</MenuItem>
                                            <MenuItem value="EnglishFAL">English FAL</MenuItem>
                                            <MenuItem value="AfrikaansHL">Afrikaans HL</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                                <td className=""><TextField id="outlined-basic" variant="outlined" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary">Add</button>
                </div>
            </form>
        </Container>
    )
}

export const Documents = () => {
    return (
        <Container>
            <div className="input-group m-4 col-4">
                <div className="custom-file">
                    <input type="file" className="custom-file-input d-xl" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">Upload ID</label>
                </div>
            </div>
            <div className="input-group m-4 col-4">
                <div className="custom-file">
                    <input type="file" className="custom-file-input d-xl" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">Report</label>
                </div>
            </div>
            <div className="input-group m-4 col-4">
                <div className="custom-file">
                    <input type="file" className="custom-file-input d-xl" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">Tranfer</label>
                </div>
            </div>
            <div className="input-group m-4 col-4">
                <div className="custom-file">
                    <input type="file" className="custom-file-input d-xl" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">Next of Kin ID</label>
                </div>
            </div>
        </Container>
    )
}