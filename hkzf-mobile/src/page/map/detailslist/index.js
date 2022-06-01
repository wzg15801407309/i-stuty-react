import React from 'react';
import { Link } from 'react-router-dom'
import { List, Image } from 'antd-mobile';

import './index.less';
const DetailsList = (props)=>{
 const { isShowList,upObj } = props;
 console.log(isShowList);
  return (
    <div className={["detailslist",isShowList?'show':""].join(' ')}>
      <div className="titleWrap">
        <h1 className="listTitle">房屋列表</h1>
        <Link className="titleMore" to="/home/list">更多房源</Link>
      </div>
      <div className='houseItems'>
        <List>{
          upObj.list&&upObj.list.map(item =>(
            <List.Item key={item.houseCode}>
              <div className='item-left'>
              <Image  height={80} width={106} src={`http://localhost:8080${item.houseImg}`} fit={'fill'} />
              </div>
              <div className='item-right'>
                <div className='right-up'>
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.desc}</div>
                  <div>
                      {item.tags.map((tag,index) => (
                        <span className={["tag", `tag${index+1}`].join(' ')} key={tag}>{tag}</span>
                      ))}
                  </div>
                </div>
                <div className="price">
                    <span className="priceNum">{item.price}</span> 元/月
                </div>
              </div>
            </List.Item>
          ))
        }</List>
      </div>
    </div>
  )
}
export default DetailsList;
