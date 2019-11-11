import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LocalizedLink from '../components/LocalizedLink'

const IndexPage = ({ pageContext: { locale }, data }) => {
console.log(data,"dataCheck on indexjs")
const { hello,NextPage,page } = data.file.childIndexJson
  return(
    <Layout path="/" locale={locale}>
      <SEO title="Home" />
      <h1>{hello}</h1>
      <p><Link to="/it">Ita</Link></p>
      <p><Link to="/">En</Link></p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <LocalizedLink to={page}>{NextPage}</LocalizedLink>
    </Layout>
  )
}
export const query = graphql`
  query Home($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
        hello
        NextPage
        page
        
      }
    }
  }
`
IndexPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.shape({
    file: PropTypes.shape({
      childIndexJson: PropTypes.shape({
        // title: PropTypes.string.isRequired,
        // about: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}


export default IndexPage




