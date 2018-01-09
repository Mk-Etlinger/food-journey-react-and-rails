import React from 'react';
import { Grid, Col, Row, Table } from 'react-bootstrap';
import DisplayChart from '../reusables/DisplayChart';

export default ({ mostSymptomaticFoods }) => {
    const ingredientList = Object.keys(mostSymptomaticFoods).map((food, i) => 
        <tr key={ i } >
            <td>{ i + 1 }</td>
            <td><a href="#">{ food }</a></td> 
        </tr>
    );
    return (
        <Grid>
            <Row style={{ border: 'solid black' }}>
                <Col sm={ 3 } md={ 6 }>
                <Table striped bordered responsive condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Top Trigger Foods</th>
                        </tr>
                    </thead>
                    <tbody>
                        { ingredientList }
                    </tbody>
                </Table>                    
                </Col>
                <Col sm={ 3 } md={ 6 }>
                    <DisplayChart mostSymptomaticFoods={ mostSymptomaticFoods } />
                </Col>
            </Row>
        </Grid>
    );
}