import Loader from 'react-loaders'
import { CardHeader } from '../CardHeader'
import './index.scss'
import 'animate.css'
import { Card, Container } from 'react-bootstrap'
import CardBody from '../CardBody'
import CardFooter from '../CardFooter'
import Footer from '../Footer'

function Home() {
  return (
    <>
      <Container className="home-page">
        <Card className="card animated fadeIn" id="card">
          <CardHeader />
          <CardBody />
          <CardFooter />
          <Footer />
        </Card>
      </Container>

      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Home
