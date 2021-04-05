import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import ComicNavigation from "components/ComicNavigation"

import * as S from "./styled"

const ComicLast = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: { published: { ne: false }, category: { eq: "Comic" } }
        }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              number
              description
              transcription
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    width: 1579
                    layout: CONSTRAINED
                    placeholder: TRACED_SVG
                  )
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      {edges.map(({ node }, index) => (
        <Anilink
          key={index}
          to={node.fields.slug}
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
          aria-label="Last Comics"
        >
          <S.Image
            image={
              node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
            }
            title={node.frontmatter.transcription}
            alt=""
          />
        </Anilink>
      ))}
      <ComicNavigation number={edges[0].node.frontmatter.number} />
    </S.Wrapper>
  )
}

export default ComicLast
