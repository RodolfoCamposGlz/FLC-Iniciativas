/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import LabsParticipar from '../components/labsParticipar/labsParticipar'
import LabsCiudadanos from '../components/labsCiudadanos/labsCiudadanos'

// eslint-disable-next-line react/prop-types
const ColaboraDetails = ({ location }) => {
  const [locationLink, setLocationLink] = useState('')

  useEffect(() => {
    if (location.state.choice !== undefined) {
      setLocationLink(location.state.choice)
    }
  }, [])
  return (
    <Layout>
      <SEO title="Foro" />
      <div>{locationLink}</div>

      <LabsCiudadanos />
      <LabsParticipar />
    </Layout>
  )
}

export default ColaboraDetails
