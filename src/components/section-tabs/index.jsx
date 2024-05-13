import React , {memo} from 'react';
import PropTypes from 'prop-types';
import {TabWapper} from './style';

const SectionTabs = memo((props) => {
    const {tabNames, tabClick} = props;
    const [itemIndex, setItemIndex] = React.useState(0);

    function itemClickHandle(index) {
      setItemIndex(index)
      tabClick(tabNames[index])
    }
  return (
    <TabWapper> 
        <ul>
            {tabNames?.map((item,index) => {
                return <li key={index}
                        onClick={e=>itemClickHandle(index)}
                        className={itemIndex === index ? 'active' : ''}
                        >
                        {item}
                        </li>
            })}
        </ul>
    </TabWapper>
    
  )
  SectionTabs.propTypes = {
    tabTitles: PropTypes.array,
    tabClick: PropTypes.func
  }
})

export default SectionTabs