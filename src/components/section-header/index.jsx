import React , {memo} from 'react';
import PropTypes from 'prop-types';
import {HeaderWrapper} from './style'

const SectionHeader = memo((props) => {
    const {title, subtitle = '默认主标题数据'} = props;
  return (
    <HeaderWrapper> 
      <h3 className="title">{title}</h3>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
    
  )
  SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
  }
})

export default SectionHeader