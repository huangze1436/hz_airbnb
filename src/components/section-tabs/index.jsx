import React , {memo} from 'react';
import PropTypes from 'prop-types';
import {TabWapper} from './style';

const SectionTabs = memo((props) => {
    const {tabNames} = props;
  return (
    <TabWapper> 
        <ul>
            {tabNames?.map((item,index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    </TabWapper>
    
  )
  SectionTabs.propTypes = {
    tabTitles: PropTypes.array
  }
})

export default SectionTabs