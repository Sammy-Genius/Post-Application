import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFeather, faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

function App() {

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postList, setPostList] = useState([]);

  const openModal = () => {
    setModal(!modal);
  }

  const postKleet = () => {
    setPostList([...postList, {title: title, description: description, id: postList.length}]);
    setTitle('');
    setDescription('');
    setModal(!modal);
  }

  const deletePost = (id) => {
    const updatedPosts = postList.filter(post => post.id !== id);
    setPostList(updatedPosts);
  }

  const editPost = (id) => {
    const editedPost = postList.filter(post => post.id !== id);
    setPostList(editedPost);
    setModal(!modal);
  }

  return (
    <div className="w-screen h-screen bg-[#fad390] flexbox relative">
      <div className="w-[90%] md:w-[30%] h-[90%] bg-slate-50 border-radius z-10 relative">
        <div className="w-full h-[15%] flexbox border-radius">
          <h1 className="text-4xl font-black text-[#e55039] voyage">KleetApp</h1>
        </div>
        <div className="w-full h-auto mt-[30px]">
          {postList.map((post) => {
            return <div className="w-[90%] min-h-[60px] my-10 mx-auto flex flex-col items-center lines">
              <div className="w-[95%] h-full">
                <h2 className="text-[#e55039] font-black voyage">{post.title}</h2>
                <p className="mt-[10px] line-height">{post.description}</p>
              </div>
              <div className="w-[15%] h-full mt-[5px] ml-auto">
                <span onClick={() => editPost(post.id)}>
                  <FontAwesomeIcon icon={ faEdit }/>
                </span>
                <span className="text-[#e55039] ml-[15px]" onClick={() => deletePost(post.id)}>
                  <FontAwesomeIcon icon={ faTrash }/>
                </span>
              </div>
            </div>
          })}
        </div>
        <Modal
         modal = { modal } 
         openModal = { openModal } 
         setTitle = { setTitle } 
         setDescription = { setDescription } 
         postKleet = { postKleet } />
    
        { modal ? '' : 
          <div className="absolute w-[60px] h-[60px] bg-[#e55039] right-[5%] bottom-[5%] rounded-full flexbox">
            <span className="text-white text-2xl" onClick={ openModal }><FontAwesomeIcon icon={ faFeather} /></span>
          </div> 
        }
      </div>
      <div className="absolute w-full h-full bg-[#e55039] shape-one"></div>
    </div>
  );
}

export default App;
