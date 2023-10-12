/* بسم الله الرحمن الرحيم */

import {Col, Container, Row} from "react-bootstrap";
import "./Category.css";

function Category() {
    return (
        <div className="wrapper">

            <Row className="mt-5">
                <Col sm="12" className="fs-2 heading">قائمة الطعام</Col>
                <div className="d-flex justify-content-center my-2 mb-3">
                    <span className="underline"></span>
                </div>
            </Row>

            <Row className="justify-content-center">
                <Col sm="12" className="mx-2">
                    <button className="mx-2 p-1 px-3 category"> الكل</button>
                    <button className="mx-2 p-1 px-3 category"> الكل</button>
                    <button className="mx-2 p-1 px-3 category"> الكل</button>
                </Col>
            </Row>

        </div>
    );
}

export default Category;

/* الحمد لله رب العالمين */