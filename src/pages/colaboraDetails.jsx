/* eslint-disable react/prop-types */
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import LabsParticipar from '../components/labsParticipar/labsParticipar'
import LabsCiudadanos from '../components/labsCiudadanos/labsCiudadanos'

// eslint-disable-next-line react/prop-types
const ColaboraDetails = ({ location }) => (
  <Layout>
    <SEO title="Foro" />
    <div>{location.state.choice}</div>
    <LabsCiudadanos />
    <LabsParticipar />
  </Layout>
)

export default ColaboraDetails
