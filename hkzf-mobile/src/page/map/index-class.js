import React from 'react';
import {Map, Marker, NavigationControl} from 'react-bmapgl';
import './index.less';
import NavHeader from '../../commponents/navheader'
export default class Maps extends React.Component{
  render(){
    return (
      <div className='maps'>
        <NavHeader>地图找房</NavHeader>
        <Map style={{ height: '100%' }}  zoom="11">
          <Marker position={{lng: 116.402544, lat: 39.928216}} />
          <NavigationControl /> 
        </Map>
      </div>
    )
  }
}