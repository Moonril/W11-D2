import { useEffect, useState } from "react"
import { Container, Row, Spinner } from "react-bootstrap"
import SingleArticle from "./SingleArticle";
import { ArticleObject } from "../types";


const MainPage = function() {
    
    const [articles, setArticles] = useState<ArticleObject | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const getArticles = () => {
        const articlesURL = 'https://api.spaceflightnewsapi.net/v4/articles/'
        fetch(articlesURL)
          .then((response) => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error('errore nel recupero articoli')
            }
          })
          .then((data) => {
            console.log('ARTICLES', data)
            console.log('ARTICLES', data.results)
            setArticles(data)
            // gli articoli sono stati salvati nello stato!
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err)
          })
      }

      useEffect(() => {
        getArticles()
      }, [])

    return(
        <Container className="flex-grow-1">
            <Row className="justify-content-center">
                <h1>Novità di oggi</h1>

                {isLoading ? (
                    <div>
                    <Spinner animation="border" variant="success" />
                  </div>
                ) : (
                    articles!.results.map((a) => {
                        return <SingleArticle article={a} key={a.id} />
                    })

                )}


                
            </Row>
        </Container>
    )
}

export default MainPage