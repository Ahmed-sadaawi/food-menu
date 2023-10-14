/* بسم الله الرحمن الرحيم */

import {Col, Row} from "react-bootstrap";
import "./Category.css";
import items from "../../data";
function Category({filtering}) {

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
                    <button onClick={(e) => filtering(e.target.name)} className="mx-2 p-1 px-3 category" name="الكل">الكل</button>
                    {items.map(item => (
                        <button onClick={(e) => filtering(e.target.name)} className="mx-2 p-1 px-3 category" name={item.category}>{item.category}</button>
                    ))}
                </Col>
            </Row>
        </div>
    );
}

export default Category;

/* الحمد لله رب العالمين */