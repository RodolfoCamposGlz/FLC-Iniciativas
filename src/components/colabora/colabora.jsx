import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { Card, Button, Col, Row, Container } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'gatsby'

// eslint-disable-next-line no-unused-vars
const RenderCard = data => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>El ID ES: {data.data.id}</Card.Title>
              <div>Categoria:{data.data.fields.CATEGORIA}</div>
              <div>subCategoria:{data.data.fields.SUBCATEGORÍA}</div>
              <Card.Text>{data.data.fields.DESCRIPCION}</Card.Text>
              <Link to="/colaboraDetails" state={{ choice: 'pancakes' }}>
                <Button variant="primary">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>El ID ES: {data.data.id}</Card.Title>
              <div>Categoria:{data.data.fields.CATEGORIA}</div>
              <div>subCategoria:{data.data.fields.SUBCATEGORÍA}</div>
              <Card.Text>{data.data.fields.DESCRIPCION}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>El ID ES: {data.data.id}</Card.Title>
              <div>Categoria:{data.data.fields.CATEGORIA}</div>
              <div>subCategoria:{data.data.fields.SUBCATEGORÍA}</div>
              <Card.Text>{data.data.fields.DESCRIPCION}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const Colabora = () => {
  // eslint-disable-next-line no-unused-vars
  const [dataFirst, setDataFirst] = useState([])
  const [dataSecond, setDataSecond] = useState([])
  const [dataThird, setDataThird] = useState([])
  const [offset, setOffSet] = useState('')
  const [counter, setCounter] = useState(0)
  let offsetApi = ''
  if (offset !== '') {
    offsetApi = `?offset=${offset}`
  }
  useEffect(() => {
    axios
      .get(`https://api.airtable.com/v0/appBZPSLZLvjUzJ8h/Imported table${offsetApi}`, {
        method: 'GET',
        mode: 'cors',
        headers: { Authorization: 'Bearer keyIffiTycyI9MNTa' },
      })
      .then(res => {
        if (counter === 0) {
          setDataFirst(res.data.records)
          setCounter(counter + 1)
        }
        if (counter === 1) {
          setDataSecond(res.data.records)
          setCounter(counter + 1)
        }
        if (counter === 2) {
          setDataThird(res.data.records)
          setCounter(counter + 1)
        }
        setOffSet(res.data.offset)
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [offsetApi])
  // console.log("AIRTABLE",data)
  const FilterData = () => {
    let cat = 'Cuidados/ayuda y bienestar'
    const filterDataFirst = dataFirst.filter(element => {
      return element.fields.CATEGORIA === cat
    })
    const filterDataSecond = dataSecond.filter(element => {
      return element.fields.CATEGORIA === cat
    })
    const filterDataThird = dataThird.filter(element => {
      return element.fields.CATEGORIA === cat
    })
    console.log('FILTRADO', filterDataFirst)
    setDataFirst(filterDataFirst)
    setDataSecond(filterDataSecond)
    setDataThird(filterDataThird)
  }
  return (
    <div>
      Hola {dataFirst.length}
      Hola {dataSecond.length}
      Hola {dataThird.length}
      <Button onClick={FilterData}>FILTRAR POR CATEGORIA</Button>
      {dataFirst.map(element => {
        // element.fields.CATEGORIA === cat
        return <RenderCard key={element.id} data={element} />
      })}
      {dataSecond.map(element => {
        return <RenderCard key={element.id} data={element} />
      })}
      {dataThird.map(element => {
        return <RenderCard key={element.id} data={element} />
      })}
    </div>
  )
}

export default Colabora
