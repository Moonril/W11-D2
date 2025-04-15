import { Button, Card, Col } from "react-bootstrap"
import { ArticleObject, Result } from "../types"

interface SingleArticleProps {
    article: Result
  }

const SingleArticle = function(props: SingleArticleProps) {
    return(
        <Col xs={6} md={4} lg={3}>
            <Card>
                <Card.Img variant="top" src={props.article.image_url} />
                <Card.Body>
                    <Card.Title>{props.article.title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleArticle