import * as React from 'react';
import { Container } from 'reactstrap';
import { FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField,   } from '@material-ui/core';
import * as Application from '../../../store/ApplicationForm';

export const Learner=()=>{
    return (
        <Container>
            <form  noValidate autoComplete="off">
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
                <TextField className="d-xl m-4 col-3" label="Passport Number" />
                <FormControl className="d-xl m-4 col-3">
                    <InputLabel id="genderLbl">Population Group</InputLabel>
                    <Select
                        labelId="genderLbl"
                        id="gender"
                        value="Male"
                    >
                        <MenuItem value="african">African</MenuItem>
                        <MenuItem value="white">White</MenuItem>
                        <MenuItem value="indian">Indian</MenuItem>
                        <MenuItem value="colourde">Colourde</MenuItem>
                        <MenuItem value="colourde">Other</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className="d-xl m-4 col-3">
                    <InputLabel id="genderLbl">Home Language</InputLabel>
                    <Select
                        labelId="genderLbl"
                        id="gender"
                        value="Male"
                    >
                        <MenuItem value="african">IsiXhosa</MenuItem>
                        <MenuItem value="white">English</MenuItem>
                        <MenuItem value="indian">IsiZulu</MenuItem>
                        <MenuItem value="colourde">Afrikaans</MenuItem>
                        <MenuItem value="colourde">Other</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className="d-xl m-4 col-3">
                    <InputLabel id="genderLbl">Language of Instructions</InputLabel>
                    <Select
                        labelId="genderLbl"
                        id="gender"
                        value="Male"
                    >
                        <MenuItem value="african">IsiXhosa</MenuItem>
                        <MenuItem value="white">English</MenuItem>
                        <MenuItem value="indian">IsiZulu</MenuItem>
                        <MenuItem value="colourde">Afrikaans</MenuItem>
                        <MenuItem value="colourde">Other</MenuItem>
                    </Select>
                </FormControl>
                <InputLabel id="genderLbl">Boarding Learner? </InputLabel>
                <RadioGroup aria-label="gender" name="gender1" value="yes">
                    <FormControlLabel value="female" control={<Radio />} label="No" />
                    <FormControlLabel value="male" control={<Radio />} label="Yes" />
                </RadioGroup>
                <TextField className="d-xl m-4 col-3" label="Boarding Address" />
                <FormControl className="d-xl m-4 col-3">
                    <InputLabel id="genderLbl">Preffered Language of Instructions</InputLabel>
                    <Select
                        labelId="genderLbl"
                        id="gender"
                        value="Male"
                    >
                        <MenuItem value="african">IsiXhosa</MenuItem>
                        <MenuItem value="white">English</MenuItem>
                        <MenuItem value="indian">IsiZulu</MenuItem>
                        <MenuItem value="colourde">Afrikaans</MenuItem>
                        <MenuItem value="colourde">Other</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className="d-xl m-4 col-3">
                    <InputLabel id="genderLbl">Mode of transport to school</InputLabel>
                    <Select
                        labelId="genderLbl"
                        id="gender"
                        value="Male"
                    >
                        <MenuItem value="african">Public</MenuItem>
                        <MenuItem value="white">Cab</MenuItem>
                        <MenuItem value="indian">Private</MenuItem>
                        <MenuItem value="colourde">Walk</MenuItem>
                    </Select>
                </FormControl>
                <TextField className="d-xl m-4 col-2" label="Number of children in the family" />
                <TextField className="d-xl m-4 col-2" label="Position in the mother's side" />
                <TextField className="d-xl m-4 col-2" label="Position in the father's side" />
                <TextField className="d-xl m-4 col-2" label="Email Address" />
                <TextField className="d-xl m-4 col-2" label="Contact Number" />
                <TextField className="d-xl m-4 col-2" label="Contact Number 2" />
                <TextField className="d-xl m-4 col-4" label="Home Address" />
                <FormControl className="d-xl m-4 col-3">
                    <InputLabel id="genderLbl">Any deceased parent?</InputLabel>
                    <Select
                        labelId="genderLbl"
                        id="gender"
                        value="Male"
                    >
                        <MenuItem value="african">Mather</MenuItem>
                        <MenuItem value="white">Father</MenuItem>
                        <MenuItem value="indian">Both</MenuItem>
                        <MenuItem value="colourde">None</MenuItem>
                    </Select>
                </FormControl>
                <TextField className="d-xl m-4 col-2" label="Religion/Demomination" />
                <FormControl className="d-xl m-4 col-3">
                    <InputLabel id="genderLbl">Sport?</InputLabel>
                    <Select
                        labelId="genderLbl"
                        id="gender"
                        value="Male"
                    >
                        <MenuItem value="african">None</MenuItem>
                        <MenuItem value="white">Soccer</MenuItem>
                        <MenuItem value="indian">Rugby</MenuItem>
                        <MenuItem value="colourde">Cricket</MenuItem>
                    </Select>
                </FormControl>
                <TextField className="d-xl m-4 col-3" label="Pronvincial honours" />
                
                <TextField className="d-xl m-4 col-2" label="Previous School" />
                <FormControl className="d-xl m-4 col-3">
                    <InputLabel id="genderLbl">Province?</InputLabel>
                    <Select
                        labelId="genderLbl"
                        id="gender"
                        value="Male"
                    >
                        <MenuItem value="african">Eastern Cape</MenuItem>
                        <MenuItem value="white">Gauteng</MenuItem>
                        <MenuItem value="indian">Western Cape</MenuItem>
                        <MenuItem value="colourde">Free State</MenuItem>
                    </Select>
                </FormControl>
                <TextField className="d-xl m-4 col-2" label="Previous Country" />
                <InputLabel id="genderLbl">Prevously enrolled in the province?</InputLabel>
                <RadioGroup aria-label="gender" name="gender1" value="Never enrolled">
                    <FormControlLabel value="female" control={<Radio />} label="Previously enrolled" />
                </RadioGroup>
                <TextField className="d-xl m-4 col-2" label="Previous School Address" />

                <div className="input-group m-4 col-2">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input d-xl" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose your image</label>
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

export const MedicalAid = () => {

    return (
        <Container>
            <form noValidate autoComplete="off">
                <div>
                    <TextField className="d-xl m-4 col-3" id="name" label="Name" />
                    <TextField className="d-xl m-4 col-3" id="medicalAidNumber" label="Medical Aid Number" />
                    <TextField className="d-xl m-4 col-3" id="telephoneNumber" label="Telephone Number" />
                    <TextField className="d-xl m-4 col-3" id="primaryBeneficiary" label="Primary Beneficiary" />
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
                                       {/* Must be populated from the DB*/}
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
                                            {/* They must populated from the DB*/}
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