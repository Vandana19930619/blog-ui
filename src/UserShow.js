import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            users:[],
            posts:[]
        }
    }
    componentDidMount(){
        const id= this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const users= response.data
            this.setState({users})
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=>{
            const posts= response.data
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })    
    }
   
    
        render(){
        return(
            <div>
                <h2>USER NAME: {this.state.users.name}</h2>
                <h3>POSTS WRITTEN BY USER</h3>
                <ul>
                    {this.state.posts.map(post=>{
                        return <li key={post.id}><Link to={`/posts/${this.state.users.id}`}>{post.title}</Link></li>
                    })}
                </ul>
                
                
                
            </div>
        )
    }
}


export default UserShow