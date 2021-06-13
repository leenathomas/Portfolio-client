import React, { useState } from 'react';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { AiOutlineMail,AiFillGithub,AiFillTwitterCircle ,AiFillLinkedin} from "react-icons/ai";
import { createPosts } from '../../actions/posts';


const Form = () => {
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        name: '', email: '', message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPosts(postData));
        setPostData({ name: '', email: '', message: ''});
    }

    return(
            <div className="form">
                <div className="outer-box">
                    <div className="address-box">
                        <div className="form-center">
                            <h1 >Contact Me</h1>
                            <br></br>
                            <p><AiOutlineMail size="25" color="gray"/> leenathomas1996@gmail.com </p>
                            <div className="social-media-icons">
                            <a href="https://github.com/leenathomas "><AiFillGithub size={30} color="gray"/></a>
                            <a href="https://twitter.com/leenathomas1996"><AiFillTwitterCircle size={30} color="gray"></AiFillTwitterCircle></a>
                            <a href="https://www.linkedin.com/in/leena-thomas-888b9a119/"><AiFillLinkedin size={30} color="gray"></AiFillLinkedin></a>
                            </div>
                            
                        </div>   
                    </div>
                    <div className="form-box">
                        <form className="form-center" onSubmit={handleSubmit}> 
                            <h1>Please enter your details</h1>
                    
                            <input type="text" className="form-control" placeholder="Your name" value={postData.name} onChange={(event)=>setPostData({ ...postData, name: event.target.value })} required/>
                            <br/>
                            <input type="text" className="form-control" placeholder="Your email" value={postData.email} onChange={(event)=>setPostData({ ...postData, email: event.target.value })} required/>
                            <br/>
                            <textarea type="text" className="form-control" placeholder="Your message here" value={postData.message} onChange={(event)=>setPostData({ ...postData, message: event.target.value })} rows="5"/>
                            <br/>
                            <button type="submit" className="btn" style={{backgroundColor:"black",color:"white"}}> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
}
export default Form;
