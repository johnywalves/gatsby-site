import React from "react"
import PropTypes from "prop-types"
import { Github } from "@styled-icons/fa-brands/Github"

import Badge from "components/Badge"

import * as S from "./styled"

const Infomation = ({ title, subtitle, description }) => (
  <>
    <S.Title>{title}</S.Title>
    {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    <S.Description>{description}</S.Description>
  </>
)

const HomeCard = ({
  title,
  subtitle,
  description,
  tags,
  sourceCode,
  view,
  cover,
}) => {
  return (
    <S.Wrapper cover={cover}>
      {cover}
      <S.Content>
        {view ? (
          <a href={view} target="_blank" rel="noreferrer">
            <Infomation
              title={title}
              subtitle={subtitle}
              description={description}
            />
          </a>
        ) : (
          <>
            <Infomation
              title={title}
              subtitle={subtitle}
              description={description}
            />
          </>
        )}
        {sourceCode && (
          <S.Navicon>
            {sourceCode && (
              <>
                <S.Icon
                  href={sourceCode}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Github"
                >
                  <Github />
                </S.Icon>
              </>
            )}
          </S.Navicon>
        )}
        {tags && (
          <S.Tags>
            {tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </S.Tags>
        )}
      </S.Content>
    </S.Wrapper>
  )
}

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
  code: PropTypes.string,
  view: PropTypes.string,
  to: PropTypes.string,
}

export default HomeCard
