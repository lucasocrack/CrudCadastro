import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

function routes(props) {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/users' element={<UserCrud />} />
            <Route path='/users/:id' element={<UserCrud />} />
        </Routes>
    )
}

export default routes