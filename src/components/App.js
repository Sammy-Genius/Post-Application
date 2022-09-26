import { useState } from "react";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFeather, faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const displayVariants = {
  from: {
      y:50,
      opacity:0,
  },
  to: {
      y:0,
      opacity:1, 

      transition: {
          type: 'tween',
          duration:.6,
      }
  }
}

const appearVariants = {
  from: {
      scale:0,
      opacity:0,
      clipPath: 'circle(0%)'
  },
  to: {
      scale:1,
      opacity:1, 
      clipPath: 'circle(100%)',

      transition: {
          type: 'spring',
          stiffness:100,
          duration:.4,
          when: 'beforeChildren',
          staggerChildren:.3
      }
  },
}

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
    <div className="w-screen h-screen bg-[#fad390] flexbox relative overflow-hidden">
      <div className="w-[90%] md:w-[30%] h-[90%] bg-slate-50 border-radius z-10 relative overflow-hidden">
        <div className="w-full h-[15%] flexbox border-radius">
          <h1 className="text-4xl font-black text-[#e55039] voyage">KleetApp</h1>
        </div>
        <div className="w-full h-auto mt-[30px]">
          {postList.map((post) => {
            return <motion.div className="w-[90%] min-h-[60px] my-10 mx-auto flex flex-col items-center lines"
            variants={displayVariants}
            initial='from'
            animate='to'
            >
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
            </motion.div>
          })}
        </div>
        <Modal
         modal = { modal } 
         openModal = { openModal } 
         setTitle = { setTitle } 
         setDescription = { setDescription }
         description = { description } 
         title = { title } 
         postKleet = { postKleet } />

        { modal ? '' : 
          <div className="absolute w-[60px] h-[60px] bg-[#e55039] right-[5%] bottom-[12%] lg:bottom-[5%] cursor-pointer rounded-full flexbox">
            <span className="text-[#fad390] text-2xl" onClick={ openModal }><FontAwesomeIcon icon={ faFeather} /></span>
          </div> 
        }
        <div className="w-full h-full absolute top-0 left-0 shape-two bg-[#fad390]"></div>
        <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
          <h1 className="voyage text-9xl opacity-10 absolute left-[-5%] bottom-[28%]">Kleet</h1>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#e55039] graph shape-one"></div>
      <div className="absolute top-0 left-0 w-[40%] h-full flex items-end">
        <img className='hidden lg:block w-[350px] h-[350px]' src={require('../img/comfort.png')} alt="" />
      </div>
      <div className="absolute w-full h-full flex justify-end">
        <motion.div className="w-[25%] h-full flex flex-col"
        variants={appearVariants}
        initial='from'
        animate='to'
        >
          <motion.div className="w-[210px] h-[210px] round bg-[#8c7ae6] self-end flexbox text-white font-black" variants={appearVariants}>share</motion.div>
          <motion.div className="w-[250px] h-[250px] round shape-three flexbox text-[#535c68] font-black" variants={appearVariants}>your thoughts</motion.div>
          <motion.div className="w-[270px] h-[270px] round bg-[#e55039] self-end flexbox text-white font-black text-xl" variants={appearVariants}>with Kleet</motion.div>
        </motion.div>
      </div>
      <div className="w-[200px] h-[200px] round shape-three absolute bottom-0 right-[30%] hidden lg:block opacity-40"></div>
    </div>
  );
}

export default App;
