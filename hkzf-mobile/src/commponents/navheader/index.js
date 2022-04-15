import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar} from 'antd-mobile';
// import './index.less';
import styles from './index.module.css'
import propTypes from 'prop-types';
const NavHeader = ({children,onLeftClick})=>{
  const history = useNavigate();
  const defaultGoBackPage = ()=>{
    // 返回上一级菜单
    history(-1);
    // window.history.back(); 这个也可以实现
  }
  return <NavBar  className={styles.navBar} backArrow={<i className="iconfont icon-back" />} onBack={ onLeftClick || defaultGoBackPage}>
      {children}
    </NavBar>
}
NavHeader.propTypes = {
  children:propTypes.string.isRequired,
  onLeftClick:propTypes.func
}
export default NavHeader;