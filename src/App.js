import './App.css'
//così allego il file css di bootstrap a tutti i file
import 'bootstrap/dist/css/bootstrap.min.css'
import MainContent from './components/MainContent'
import { Container, Row, Col } from 'react-bootstrap'
import MyNavbar from './components/MyNavbar'
import Reservation from './components/Reservation'
import Admin from './components/Admin'

function App() {
  return (
    <div className='App'>
      <header>
        <MyNavbar isFluid={true} subtitle='Uba' />
      </header>
      <main className='bg-dark p-3'>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={8} lg={6}>
              <MainContent />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={8} lg={6}>
              <Reservation />
              <Admin />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default App
