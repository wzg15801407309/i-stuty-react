import React from 'react';
import routerArray from './router';
import  { useRoutes } from "react-router-dom";
import { Suspense } from 'react/cjs/react.production.min';
/**使用hook，使用函数组件 */
function App(){
  return(
      <Suspense fallback={<>loading</>}> 
        { useRoutes(routerArray) }
      </Suspense>
  )
}
export default App 