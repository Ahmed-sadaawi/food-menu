/* بسم الله الرحمن الرحيم */


/* Coding is fun easy ane fun, too */

import {Col,Card, Row} from "react-bootstrap";
import "./Cards.css";

function Cards({data}) {
    return(
        <>

        {data.map(item => (
            <Row key={item.id}>
                <Col sm="12" >
                    <Card className="d-flex flex-row mt-4">
                        <Card.Img src={item.img} className="rounded-3" style={{width: "250px"}}/>

                        <Card.Body  className="mx-3">
                            <div className="d-flex flex-row justify-content-between">
                                <Card.Title style={{fontWeight: "bold",fontSize: "23px",}}>{item.title}</Card.Title>
                                <p className="price">{item.price} جنيه</p>
                            </div>
                            <Card.Text style={{fontWeight: "200"}}>{item.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        ))
        }
        </>
    )
}

export default Cards;

/* الحمد لله رب العالمين */