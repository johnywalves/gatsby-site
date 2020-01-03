import styled from "styled-components"
import media from "styled-media-query";
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
    border-radius: 50%;
    height: 3.75em;
    width: 3.75em;
    margin: auto;    

    ${media.lessThan("large")`
        height: 1.875em;
        width: 1.875em;
    `}
`
