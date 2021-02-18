import * as React from 'react';
import { Container } from 'reactstrap';
import TextField from '@material-ui/core/TextField';



export default class PersonalDetails extends React.PureComponent {
    
    public render() {
        return (
            <Container>
                <form  noValidate autoComplete="off">
                    <div>
                        <TextField className="d-xl m-4 col-4" label="First Name" />
                        <TextField className="d-xl m-4 col-4" label="Middle Name" />
                        <TextField className="d-xl m-4 col-4" label="Second Name" />
                        <TextField className="d-xl m-4 col-4" label="ID Number" />
                    </div>
                    <div>
                        <TextField className="d-xl m-4 col-4" label="Email Address" />
                        <TextField className="d-xl m-4 col-4" label="Contact Number" />
                        <TextField className="d-xl m-4 col-4" label="Contact Number 2" />
                        <TextField className="d-xl m-4 col-4" label="Home Address" />
                        <div className="input-group m-4 col-4">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input d-xl" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        )
    }
}