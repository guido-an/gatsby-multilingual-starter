import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import enMessages from '../data/index/en.json'
import itMessages from '../data/index/it.json'

const messages = {
  en: enMessages,
  it: itMessages
}

const IndexPage = ({ pathContext: { locale } }) => (
  <Layout>
    <SEO title="Home" />

    <h1>{messages[locale].hello}</h1>
 
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage




