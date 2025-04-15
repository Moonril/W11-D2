import { Button, Card, Col } from "react-bootstrap"
import { Result } from "../types"
import { useNavigate } from "react-router-dom"

interface SingleArticleProps {
    article: Result
}


const SingleArticle = function(props: SingleArticleProps) {


    const navigate = useNavigate()


    return(
        <Col xs={6} md={4} lg={2.5}>
            <Card>
                <Card.Img variant="top" src={props.article.image_url} />
                <Card.Body>
                    <Card.Title>{props.article.title}</Card.Title>
                    <Card.Text>
                    {props.article.summary}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{
                        navigate('/details/' + props.article.id)
                    }}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleArticle