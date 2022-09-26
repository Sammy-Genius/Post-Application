import { AnimatePresence, motion } from 'framer-motion';


const modalVariants = {
    from: {
        y:1000,
        opacity:0,
    },
    to: {
        y:0,
        opacity:1, 

        transition: {
            type: 'tween',
            duration:.6,
            when: 'beforeChildren',
            staggerChildren:.5
        }
    },
    exit: {
        y:1000,
        opacity:0,

        transition: {
            type: 'tween',
            duration:.6,
            when: 'afterChildren',
            staggerChildren:.5 
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
            duration:.6,
        }
    },
    exit: {
        scale:0,
        opacity:0,
        clipPath: 'circle(0%)',

        transition: {
            type: 'spring',
            stiffness:100,
            duration:.6,
        }
    }
}

const Modal = ({modal, openModal, setTitle, setDescription, postKleet, description, title}) => {

    return ( 
        <>
            <AnimatePresence>
                { modal && (
                <motion.div className="w-full h-full absolute top-0 left-0 overlay border-radius flexbox z-10"
                variants={ modalVariants }
                initial='from'
                animate='to'
                exit='exit'
                >
                    <motion.div className="w-[80%] h-[80%] bg-slate-50 border-radius relative z-20" variants={modalVariants}>
                        <div className="w-[90%] h-[30%] my-[10%] mx-auto">
                            <div className="title-box">
                                <input type="text" placeholder="title" className='input' required onChange={e => setTitle(e.target.value)}/>
                            </div>
                            <div className="description-box">
                                <textarea className="text-area" placeholder="what's on your mind..." onChange={e => setDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                        { description && title ? <motion.div className="absolute right-[5%] bottom-[5%] w-[70px] h-[40px] bg-[#e55039] curved flexbox" onClick = {postKleet} variants={appearVariants}>
                            <p className="text-[#fad390] voyage font-black cursor-pointer">Kleet</p>
                        </motion.div> : ''}
                        <motion.span className="absolute text-[#e55039] top-[3%] right-[5%] cursor-pointer" onClick={openModal} variants={appearVariants}>cancel</motion.span>
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>
        </>
     );
}
 
export default Modal;