import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  img {
    height: 32px;
    width: 160.5px;
    margin-left: 80px;
    cursor: pointer;
    color: ${props => props.theme.color.primaryColor};
  }
`
