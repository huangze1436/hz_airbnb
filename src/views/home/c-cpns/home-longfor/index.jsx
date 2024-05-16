import React,{memo} from "react";
import { HomeLongforWrapper } from "./style";
import PropTypes from "prop-types"
import SetionHeader from '@/components/section-header';
import LongforItem from "@/components/longfor-item";
import ScrollView from '@/base-ui/scroll-view';

const HomeLongfor  = memo ((props) => {
    const {infoData} = props
    return (
        <HomeLongforWrapper>
            <SetionHeader title={infoData.title} subtitle={infoData.subtitle}></SetionHeader>
            <div className="longfor-list">
                <ScrollView>
                {
                    infoData.list.map(item => {
                        return <LongforItem itemData={item} key={item.city} />
                    })
                }
                </ScrollView>
            </div>
        </HomeLongforWrapper>
    )
})

HomeLongfor.propTypes = {
    infoData: PropTypes.object
}
export default HomeLongfor