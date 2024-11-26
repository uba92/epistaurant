import './App.css'
//così allego il file css di bootstrap a tutti i file
import 'bootstrap/dist/css/bootstrap.min.css'
import MainContent from './components/MainContent'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <main className='bg-dark'>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={8} lg={6}>
              <MainContent />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default App
