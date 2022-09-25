const Modal = ({modal, openModal}) => {
    return ( 
        <>
            { modal && (
            <div className="w-[100%] h-[100%] absolute overlay border-radius flexbox z-20">
                <div className="w-[80%] h-[80%] bg-slate-50 border-radius"></div>
            </div>
            )}
        </>
     );
}
 
export default Modal;