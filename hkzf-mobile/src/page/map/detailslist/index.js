import React from 'react';
import { Link } from 'react-router-dom'

import './index.less';
const DetailsList = (props)=>{
 const { isShowList,list } = props;
  return (
    <div className={["detailslist",isShowList?'show':""].join(' ')}>
      <div className="titleWrap">
        <h1 className="listTitle">房屋列表</h1>
        <Link className="titleMore" to="/home/list">更多房源</Link>
      </div>
      {/* <div className="content">
          <h3 className="title">{list.title}</h3>
          <div className='desc'>{list.desc}</div>
           <div>{list.tags.map(tag => (
              <span className={["tag", "tag1"].join(' ')} key={tag}>{tag}</span>))}
            </div>
            <div className="price">
              <span className="priceNum">{list.price}</span> 元/月
            </div>
      </div> */}
    </div>
  )
}
export default DetailsList;
