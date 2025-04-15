import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Result } from "../types";

type Params = {
    myId: string
}




const Details = function() {

    const articleURL = 'https://api.spaceflightnewsapi.net/v4/articles/'

    const params = useParams<Params>()
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState<Result | null>(null)

    const getArticle = () => {
        fetch(articleURL + params.myId)
        .then((response) => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error('errore nel recupero libri')
            }
          })
        .then((data) => {
            console.log('ARTICLES', data)
            setArticle(data)
            // gli articoli sono stati salvati nello stato!
            setIsLoading(false)
          })
        .catch((err) => {
            console.log(err)
            setIsLoading(false)
          })
    }

    useEffect(() => {
        getArticle()
    }, [])

    return(
        <Container className="flex-grow-1">
            <Row className="justify-content-center">

                {isLoading ? (<div>
                    <Spinner animation="border" variant="success" />
                  </div>) : (
                        <Col xs={6} md={4} lg={3}>
                            <Card>
                                <Card.Img variant="top" src={article!.image_url} />
                                <Card.Body>
                                    <Card.Title>{article!.title} </Card.Title>
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
            </Row>
        </Container>
    )
}

export default Details