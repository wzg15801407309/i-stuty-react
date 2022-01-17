import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    comments:[
      {id:1,name:"jack",content:"shang !v俄双方的v"},
      {id:2,name:"d b",content:"d救救我！！！ 救救我！！！"},
      {id:3,name:"v",content:"非大姑撒额 !v俄双方的v"},
    ],
    userName:"",
    userContent:""
  }
  // 渲染评论列表
  renderList(){
    return this.state.comments.length === 0 ?  (<div className='no-comment'>暂无评论,快去评论吧～</div>)
    : (<ul className='ulclass'>{ this.state.comments.map(item=>(
        <li key={item.id}>
        <h4>评论人:{item.name}</h4>
        <span>评论内容:{item.content}</span>
       </li>))}
      </ul>)
  }
  // 评论
  handleChange = e =>{
    const {name,value} = e.target;
    this.setState({
      [name]:value
    })
  }
  // 添加评论
  addClick = ()=>{
    const { comments, userName,userContent} = this.state;
    if(userName.trim() == "" || userContent.trim() == ''){
      alert('请输入评论人和评论内容');
      return
    }
    const newComments = [{
      id:Math.random(),
      name:userName,
      content:userContent
    },...comments]
    this.setState({
      comments:newComments,
      userName:"",
      userContent:""
    })
    
  }
  render() {
    const { userName, userContent } = this.state
    return (
      <div className="App ">
        <div className='app-content'>
          <input name = 'userName' className='user' type='text' placeholder='请输入评论人' value={userName} onChange={this.handleChange}></input>
          <textarea name = 'userContent' className='content' cols='30' rows='10' placeholder='请输入评论内容' value={userContent} onChange={this.handleChange}/>
          <button className='btn' onClick={this.addClick}>发表评论</button>
          {/* 列表条件渲染 */}
          {this.renderList()}
          </div>
      </div>
    )
  }
}
export default App;
