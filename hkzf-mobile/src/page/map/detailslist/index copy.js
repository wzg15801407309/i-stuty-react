import React from 'react';
import { Link } from 'react-router-dom'

import './index.less';
const DetailsList = (props)=>{
 const { isShowList,upObj } = props;
  return (
    <div className={["detailslist",isShowList?'show':""].join(' ')}>
      <div className="titleWrap">
        <h1 className="listTitle">房屋列表</h1>
        <Link className="titleMore" to="/home/list">更多房源</Link>
      </div>
      <div className='houseItems'>
      {
         upObj.list &&  upObj.list.map(item => (
            // <div className="house" key={item.houseCode}>
            // <div className="imgWrap">
            //   <img className="img"src={`http://localhost:8080${item.houseImg}`}alt=""/>
            // </div>
            {/* <div className="content" key={item.houseCode}>
              <h3 className="title">{item.title}</h3>
              <div className='desc'>{item.desc}</div>
              <div>{item.tags.map(tag => (
                  <span className={["tag", "tag1"].join(' ')} key={tag}>{tag}</span>))}
              </div>
              <div className="price">
                  <span className="priceNum">{item.price}</span> 元/月
              </div>
            </div> */}
          {/* )) */}
      }
      </div>
    </div>
  )
}
export default DetailsList;
