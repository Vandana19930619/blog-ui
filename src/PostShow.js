import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            users:[],
            posts:[],
            comments:[]
        }
    }
    componentDidMount(){
        const id= this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            const posts= response.data
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const users= response.data
            this.setState({users})
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const comments= response.data
            this.setState({comments})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

        render(){
        return(
            <div>
                <h2>USER NAME- {this.state.users.name}</h2>
                <h3>TITLE: {this.state.posts.title}</h3>
                <h4>BODY: <br/> {this.state.posts.body}</h4>
                <hr/>
                <h5> COMMENTS </h5>
                <ul> 
                    {this.state.comments.map((comment)=>{
                        return <li key={comment.id}> {comment.body}</li>
                    })}
                </ul>
                <hr/>

                <h5><Link to={`/users/${this.state.posts.id}`}>More posts of author-{this.state.users.name}</Link></h5>
                 
               
                
            </div>
        )
    }
}
export default PostShow