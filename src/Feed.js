import React, {useEffect, useState} from 'react'
import CreateIcon  from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from "./InputOption";
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { collection, onSnapshot, query, orderBy, addDoc, serverTimestamp  } from "firebase/firestore";
import "./Feed.css"
import Post from "./Post";
import { db } from "./firebase"


function Feed() {
  const [input,setInput] = useState('');
  const [posts,setPosts] = useState([]);

  const sendPost = async (e) => {
    e.preventDefault();
    try {
        await addDoc(collection(db, "posts"), {
            name: "Sonny Sangha",
            description: "This is LinkedIn Clone",
            message: input,
            photoUrl: "",
            timestamp: serverTimestamp()
        });
        console.log("Post added successfully!");
        setInput('');
    } catch (error) {
        console.error("Error adding post:", error);
    }
};
  
  useEffect(() => {
    // Reference to the "posts" collection
    const postsCollection = collection(db, "posts");
    const postsQuery = query(postsCollection, orderBy("timestamp", "desc"));


    // Real-time listener
    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })));
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='feed'>
        <div className="feed__inputController">
                <div className='feed__input'>
                     <CreateIcon/>
                     <form>
                        <input 
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        type='text'/>
                        <button onClick={sendPost} type='submit'>send</button>
                     </form>
                </div>
                <div className="feed__inputOptions">
                  <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                  <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                  <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                  <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
              </div>
        </div>
        {
          posts.map(({id, data : { name ,description ,message, photoUrl }})=>(
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
          ))
        }
    </div>
  )
}

export default Feed;