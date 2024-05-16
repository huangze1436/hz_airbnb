import React , {memo} from 'react';
import PropTypes from 'prop-types';
import {TabWapper} from './style';
import ScrollView from '../../base-ui/scroll-view';
import classNames from 'classnames';

const SectionTabs = memo((props) => {
    const {tabNames, tabClick} = props;
    const [itemIndex, setItemIndex] = React.useState(0);

    function itemClickHandle(index) {
      setItemIndex(index)
      tabClick(tabNames[index])
    }
  return (
    <TabWapper> 
      <ScrollView>
            {tabNames?.map((item,index) => {
                return <div key={index}
                        onClick={e=>itemClickHandle(index)}
                        className={classNames( "item",{active:itemIndex === index })}
                        >
                        {item}
                        </div>
            })}
      </ScrollView>
        
    </TabWapper>
    
  )
  SectionTabs.propTypes = {
    tabTitles: PropTypes.array,
    tabClick: PropTypes.func
  }
})

export default SectionTabs