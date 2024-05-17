import React , {memo} from 'react';
import {useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types';
import {SectionFooterWrapper} from './style'
import IconMoreArrow from '../../assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
    const {title} = props;
    let titleAC = "显示全部";
    if (title) {
        titleAC = `显示更多${title}房源`
    }
    const navigate = useNavigate();
    function toDetail () {
      navigate('/detail')
    }
  return (
    <SectionFooterWrapper color={title ? '#00848A' : '#000'}> 
        <div className="info" onClick={() => {toDetail()}}>
            <span className="text">{titleAC}</span>
            <IconMoreArrow />
        </div>
    </SectionFooterWrapper>
    
  )
  SectionFooter.propTypes = {
    title: PropTypes.string
  }
})

export default SectionFooter