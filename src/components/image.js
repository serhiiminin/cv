import React from "react"
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ style }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img
    fluid={data.placeholderImage.childImageSharp.fluid}
    alt="profile-image"
    style={{
      maxWidth: `100%`,
      ...style
    }}
  />
}

Image.defaultProps = {
  style: {}
}

Image.propTypes = {
  style: PropTypes.shape({})
}
export default Image
