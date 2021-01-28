import React from "react"
import Layout from "../components/layout";
import Head from '../components/head';
import Projects from "../components/projects";

const IndexPage = () => (
  <Layout>
    <Head title="Portfolio" />
    {/* <h1 className="title">Select Projects</h1> */}
    <Projects />
  </Layout>
)

export default IndexPage
