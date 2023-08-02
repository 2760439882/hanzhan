import React from 'react'

import About from '../src/Layout/About/about'


const RouterApp: IRouteType.IRouer[] = [
  {
    path: '/about',
    emement: <About></About>,
    meta: { pageTitle: 'about' },
  },
]
export default RouterApp
