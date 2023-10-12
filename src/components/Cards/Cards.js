/* بسم الله الرحمن الرحيم */


/* Coding is fun easy ane fun, too */

import {Col,Card, Row} from "react-bootstrap";
import "./Cards.css";

function Cards() {
    return(
        <Row className="my-xl-5">
            <Col sm="12" className=" py-3">
                <Card>
                    <Card.Body >
                        <div className="d-flex flex-row justify-content-between">
                            <img src="food1.webp" width={200} className="rounded-3"/>
                            <Card.Title className="mx-3">وجبة فطار</Card.Title>
                            <p>50 جنيه</p>
                            <Card.Text>وصف الوجبه وصف الوجبه وصف الوجبه وصف الوجبه وصف الوجبه وصف الوجبه وصف الوجبه وصف الوجبه وصف الوجبه وصف الوجبه</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Cards;

/* الحمد لله رب العالمين */