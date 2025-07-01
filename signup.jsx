import React from 'react';
import{
    MDBBtn,
    MDBContainer, 
    MDBRow,
    MDBCol,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBSelect,
    MDBRadio
}
from 'mdb-react-ui-kit';
function App(){
    return(
        MDBContainer <fluid>
        <MDBRow className = 'justify-content-center align-teims-center m-5'>
        <MDBCard>
            <MDBCardBody className = 'px-4'>
                <hr ClassName = "fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</hr>
            </MDBCardBody>
        </MDBCard>
            
        </MDBRow>
        </fluid>
    )
}