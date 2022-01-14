import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    comments:[
      // {id:1,name:"jack",content:"shang !v俄双方的v"},
      // {id:2,name:"d b",content:"d救救我！！！ 救救我！！！"},
      // {id:3,name:"v",content:"非大姑撒额 !v俄双方的v"},
    ]
  }
  render() {
    return (
      <div className="App ">
        <div className='app-content'>
          <input className='user' type='text' placeholder='请输入评论人'></input>
          <textarea className='content' cols='30' rows='10' placeholder='请输入评论内容' />
          <button className='btn'>发表评论</button>
          {/* 条件渲染 */}
          {
            this.state.comments.length==0 ?  (<div className='no-comment'>暂无评论,快去评论吧～</div>)
            : (<ul className='ulclass'>
            { this.state.comments.map(item=>(
               <li key={item.id}>
               <h4>评论人:{item.name}</h4>
               <span>评论内容:{item.content}</span>
             </li>
            ))}
          </ul>)}
          </div>
      </div>
    )
  }
}
export default App;
