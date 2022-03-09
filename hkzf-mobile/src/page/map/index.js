import React from 'react';
import {Map, Marker, NavigationControl} from 'react-bmapgl';
import './index.less';
export default class Maps extends React.Component{
  render(){
    return (
      <div className='maps'>
        <Map style={{ height: '100%' }} center={{lng: 116.402544, lat: 39.928216}} zoom="11">
          <Marker position={{lng: 116.402544, lat: 39.928216}} />
          <NavigationControl /> 
        </Map>
      </div>
    )
  }
}