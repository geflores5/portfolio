import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Projects from '../components/projects'
import About from '../components/about'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <Head title='Portfolio' />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
