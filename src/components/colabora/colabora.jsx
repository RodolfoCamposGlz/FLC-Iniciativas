import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { Card, Button, Col, Row, Container, Dropdown } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'gatsby'

// eslint-disable-next-line no-unused-vars
const RenderCard = data => {
  return (
    <Container style={{ pageBreakInside: 'avoid' }}>
      <Card style={{ width: '20rem', height: 'auto' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{data.data.fields.NOMBRE}</Card.Title>
          <div>Categoria:{data.data.fields.CATEGORIA}</div>
          <div>subCategoria:{data.data.fields.SUBCATEGORÍA}</div>
          <Card.Text>{data.data.fields.DESCRIPCION}</Card.Text>
          <Link to="/colaboraDetails" state={{ choice: 'pancakes' }}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

const Colabora = () => {
  // eslint-disable-next-line no-unused-vars
  const [dataFirst, setDataFirst] = useState([])
  const [dataSecond, setDataSecond] = useState([])
  const [dataThird, setDataThird] = useState([])
  const [dataFirstApi, setDataFirstApi] = useState([])
  const [dataSecondApi, setDataSecondApi] = useState([])
  const [dataThirdApi, setDataThirdApi] = useState([])
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
          setDataFirstApi(res.data.records)
          setCounter(counter + 1)
        }
        if (counter === 1) {
          setDataSecond(res.data.records)
          setDataSecondApi(res.data.records)
          setCounter(counter + 1)
        }
        if (counter === 2) {
          setDataThird(res.data.records)
          setDataThirdApi(res.data.records)
          setCounter(counter + 1)
        }
        setOffSet(res.data.offset)
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [offsetApi])
  // console.log("AIRTABLE",data)
  const FilterData = (filter, tipo) => {
    console.log(filter)
    let cat = filter
    const filterDataFirst = dataFirstApi.filter(element => {
      let datos
      if (tipo === 'CATEGORIA') {
        datos = element.fields.CATEGORIA
      }
      if (tipo === 'SUBCATEGORÍA') {
        datos = element.fields.SUBCATEGORÍA
      }
      // if(tipo === 'CATEGORIA'){
      //   datos === element.fields.CATEGORIA;
      // }
      return datos === cat
    })
    const filterDataSecond = dataSecondApi.filter(element => {
      let datos
      if (tipo === 'CATEGORIA') {
        datos = element.fields.CATEGORIA
      }
      if (tipo === 'SUBCATEGORÍA') {
        datos = element.fields.SUBCATEGORÍA
      }
      return datos === cat
    })
    const filterDataThird = dataThirdApi.filter(element => {
      let datos
      if (tipo === 'CATEGORIA') {
        datos = element.fields.CATEGORIA
      }
      if (tipo === 'SUBCATEGORÍA') {
        datos = element.fields.SUBCATEGORÍA
      }
      return datos === cat
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
      <div style={{ display: 'flex', justifyContent: 'center', margin: '40px' }}>
        <h4 style={{ fontSize: '23px', paddingRight: '50px', fontWeight: 'bold' }}>Filtrar Por:</h4>
        <Dropdown style={{ paddingRight: '20px' }}>
          <Dropdown.Toggle id="dropdown-basic">[Categoría]</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => FilterData('Cuidados/ayuda y bienestar', 'CATEGORIA')}>
              Cuidados/ayuda y bienestar
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Educación a distancia y recursos educativos', 'CATEGORIA')}>
              Educación a distancia y recursos educativos
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Información Oficial', 'CATEGORIA')}>
              Información Oficial
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Información Verificada', 'CATEGORIA')}>
              Información Verificada
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Cuidados/ayuda y bienestar', 'CATEGORIA')}>
              Oportunidades y recomendaciones laborales
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">[Subcategoría]</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => FilterData('Donaciones', 'SUBCATEGORÍA')}>Donaciones</Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Redes de apoyo para la salud mental', 'SUBCATEGORÍA')}>
              Redes de apoyo para la salud mental
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Alimentación y consumo responsable', 'SUBCATEGORÍA')}>
              Alimentación y consumo responsable
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Ideas a desarrollar/Makers/Steam', 'SUBCATEGORÍA')}>
              Ideas a desarrollar/Makers/Steam
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Educación a distancia', 'SUBCATEGORÍA')}>
              Educación a distancia
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Recursos educativo', 'SUBCATEGORÍA')}>
              Recursos educativo
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Por Estado', 'SUBCATEGORÍA')}>Por Estado</Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Programas Sociales', 'SUBCATEGORÍA')}>
              Programas Sociales
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Noticias del Día', 'SUBCATEGORÍA')}>
              Noticias del Día
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('COVID-19 para principiantes', 'SUBCATEGORÍA')}>
              COVID-19 para principiantes
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Actividades para niñas y niño', 'SUBCATEGORÍA')}>
              Actividades para niñas y niño
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Películas/libros/series/reflexiones', 'SUBCATEGORÍA')}>
              Películas/libros/series/reflexiones
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => FilterData('Iniciativas y convocatorias culturales/artísticas', 'SUBCATEGORÍA')}
            >
              Iniciativas y convocatorias culturales/artísticas
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Hazlo tú mismx/DIY', 'SUBCATEGORÍA')}>
              Hazlo tú mismx/DIY
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Bolsa de trabajo COVID-19', 'SUBCATEGORÍA')}>
              Bolsa de trabajo COVID-19
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Consejos y asesoría laboral', 'SUBCATEGORÍA')}>
              Consejos y asesoría laboral
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Trabajo en casa/Home Office', 'SUBCATEGORÍA')}>
              Trabajo en casa/Home Office
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Redes de apoyo para negocios', 'SUBCATEGORÍA')}>
              Redes de apoyo para negocios
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Grants convocatorias y hackatones Covid-19', 'SUBCATEGORÍA')}>
              Grants convocatorias y hackatones Covid-19
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div style={{ columns: 3 }}>
        {dataFirst.map(element => {
          // element.fields.CATEGORIA === cat
          return <RenderCard key={element.id} data={element} />
        })}
      </div>
      <div style={{ columns: 3 }}>
        {dataSecond.map(element => {
          return <RenderCard key={element.id} data={element} />
        })}
      </div>
      <div style={{ columns: 3 }}>
        {dataThird.map(element => {
          return <RenderCard key={element.id} data={element} />
        })}
      </div>
    </div>
  )
}

export default Colabora
