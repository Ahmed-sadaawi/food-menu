/* بسم الله الرحمن الرحيم */

import {Col, Row} from "react-bootstrap";
import "./Category.css";

function Category({filtering, uniqueValue}) {

    return (
        <div className="wrapper mb-5">

            <Row className="mt-5">
                <Col sm="12" className="fs-2 heading">قائمة الطعام</Col>
                <div className="d-flex justify-content-center my-2 mb-3">
                    <span className="underline"></span>
                </div>
            </Row>

            <Row className="justify-content-center">
                <Col sm="12" className="mx-2">
                    {(uniqueValue.length >= 1)? (
                        uniqueValue.map(item => {
                            return(
                                    <button  key={Math.random()}
                                        onClick={(e) => filtering(e.target.name)}
                                        className="mx-2 p-1 px-3 category"
                                        name={item}

                                    >{item}</button>

                            )})
                    ): <h3>لا يوجد أصناف...!</h3>}
                </Col>
            </Row>
        </div>
    );
}

export default Category;

/* الحمد لله رب العالمين */