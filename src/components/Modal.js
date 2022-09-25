const Modal = ({modal, openModal}) => {
    return ( 
        <>
            { modal && (
            <div className="w-[100%] h-[100%] absolute overlay border-radius flexbox z-20">
                <div className="w-[80%] h-[80%] bg-slate-50 border-radius relative">
                    <div className="w-[90%] h-[30%] my-[10%] mx-auto">
                        <div className="title-box">
                            <input type="text" placeholder="title" className='input' required />
                        </div>
                        <div className="description-box">
                            <textarea className="text-area" placeholder="what's on your mind..."></textarea>
                        </div>
                    </div>
                    <div className="absolute right-[5%] bottom-[5%] w-[70px] h-[40px] bg-[#e55039] curved flexbox" onClick = {openModal}>
                        <p className="text-white">Post</p>
                    </div>
                </div>
            </div>
            )}
        </>
     );
}
 
export default Modal;