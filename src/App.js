import React from 'react'

import UsersList from './UsersList'
import UsersShow from './UserShow'
import PostsList from './PostList'
import PostShow from './PostShow'
import { Route, BrowserRouter, Link} from 'react-router-dom'

function App (props){
    return(
            <BrowserRouter>
                    <div>
                    
                        <Link to="/users">UsersList |</Link>
                        <Link to="/posts">PostsList</Link>                       
                        
                        <Route path="/users" component={UsersList} exact={true}/>
                        <Route path="/users/:id" component={UsersShow}/>
                        <Route path="/posts" component={PostsList} exact={true}/>
                        <Route path="/posts/:id" component={PostShow}/>
                                   
                    </div>
                   
             </BrowserRouter>             
    )
}
export default App