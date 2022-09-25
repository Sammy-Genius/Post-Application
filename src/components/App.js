import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

function App() {

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  }
  return (
    <div className="w-screen h-screen bg-[#fad390] flexbox relative">
      <div className="w-[90%] md:w-[30%] h-[90%] bg-slate-50 border-radius z-10 relative">
        <Modal modal = { modal } openModal = {openModal}/>
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
