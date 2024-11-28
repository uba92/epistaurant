import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Admin extends Component {
  state = {
    reservation: [],
  }

  getReservations = () => {
    fetch('https://striveschool-api.herokuapp.com/api/reservation')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero dei dati!')
        }
      })
      .then((arrayOfReservation) => {
        console.log('arrayOfReservation: ', arrayOfReservation)
        this.setState({
          reservation: arrayOfReservation,
        })
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  componentDidMount() {
    this.getReservations()
  }
  render() {
    // this.getReservations()
    return (
      <>
        <h2 className=' text-light'>TAVOLI PRENOTATI</h2>
        <ListGroup>
          {this.state.reservation.map((res) => {
            return (
              <ListGroup.Item key={res._id}>
                {res.name} per {res.numberOfPeople} il {res.dateTime}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </>
    )
  }
}

export default Admin
