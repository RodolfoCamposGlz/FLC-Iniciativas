import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import LabsParticipar from '../components/labsParticipar/labsParticipar'
import LabsCiudadanos from '../components/labsCiudadanos/labsCiudadanos'
import Colabora from '../components/colabora/colabora'

const ForoPage = () => (
  <Layout>
    <SEO title="Foro" />
    <Colabora />
    <LabsCiudadanos />
    <LabsParticipar />
  </Layout>
)

export default ForoPage
