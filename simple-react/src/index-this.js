
/**
 * 事件绑定中this为undwfine
 * 1:利用箭头函数
 * 2:Function.prototype.bind()
 * 3:class实例方法
 * 应用场景：在组件类抽离js的逻辑代码就会有thisundefine的问题
 */


// 导入react
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  // // 问题2
  // constructor(){
  //   super();
  //   this.countAdd = this.countAdd.bind(this);
  // }

  state={
    count:0
  }

  // countAdd(){
  //   this.setState({
  //     count:this.state.count+1
  //   })
  // }
  countAdd = ()=>{
      this.setState({
      count:this.state.count+1
    })
  }
  render(){
    return(
      <div>
        <span>计数器:{this.state.count}</span>
        
        {/* <button onClick={()=>{
          this.setState({
            count:this.state.count+1
          })
        }}>+</button> */}

        {/* 这样写this.countAdd this会报undefine */}
        {/* <button onClick={this.countAdd}>+</button> */}

        {/* 解决问题1:箭头函数解决问题 */}
        {/* <button onClick={()=>{this.countAdd();}}>+</button> */}
        {/* 解决问题2:Function.prototype.bind() */}
        {/* 在constructor 中设置 */}
        {/* <button onClick={this.countAdd}>+</button> */}
        {/* 解决问题3:class实例方法 */}
        <button onClick={this.countAdd}>+</button>

      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById("root"));