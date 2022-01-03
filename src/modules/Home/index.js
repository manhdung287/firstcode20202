import axios from 'axios';
import Button from 'lib/Button';
import Loading from 'lib/Loading';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetLoading } from 'src/ultils/actions';
import { CONST, LoadingReducer } from 'src/ultils/reducer';
import BannerData from './BannerData';
import CollectionCard from './CollectionCard';
import Header from './Header';
import Slider from './Slider';
 
function Home() {
    const [dataShow,setDataShow] = useState();
    const [collectData, setColletctData] = useState([]);
   
    const {loading,darkmode} = useSelector(loading => loading);
    const dispatch = useDispatch();
    useEffect(() => {
        const loadData = async () => {
            dispatch(SetLoading(true));
            const resData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x8D26745800a564786aE13Df68db574e9FE2DD82f')
            setColletctData(resData.data.assets);
            dispatch(SetLoading(false));
        }
        loadData();
    }, [])

    const onShowData = (data) => {
        setDataShow(data)
    };

    const _bannerActive = dataShow ?dataShow :collectData[0];
    const _classHome = darkmode ? ' home-darkmode': ' home-nomal'
    return (
        <div className={'home '+ _classHome}>
         {loading && <Loading/>}
            <Header />
            <BannerData data={_bannerActive}/>
            <CollectionCard  data={collectData}  onShowData={ (data) => onShowData(data)}/>
        </div>
    );
}

export default Home;