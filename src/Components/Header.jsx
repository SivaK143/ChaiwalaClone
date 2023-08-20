import {motion} from "framer-motion"

const Header = ({h3, text, hasBtn=true, btnTxt, imgSrc, imgSize = "70%" , backgroundColor, headingColor, textColor, btnBgColor,btnColor}) => {

 const headingOptions = {
    initial : {
        y : "-100%",
        opacity : 0
    },
    whileInView:{
        y : "0",
        opacity : 1
    }
 }

 const textOptions = {
    ...headingOptions,
    transition : {
        delay : 0.5,
    }
 }

 const buttonOptions = {
    initial : {
        y : "100%",
        opacity : 0
    },
    whileInView:{
        y : "0",
        opacity : 1
    }
    ,
    transition:{
        delay:0.3,
        ease : "easeIn"
    }
 }

 const imageOptions = {
    initial : {
        scale: 0.1,
        opacity : 0
    },
    whileInView:{
        scale : 1,
        opacity : 1
    }
    ,
    transition:{
        delay:0.3,
    }
 }




  return (
    <div className="header" style={{
        backgroundColor : backgroundColor
    }}>
     <div>
            <motion.h3 style={{
                color:headingColor,
            }}
            data-cursorpointer={true}
            {...headingOptions}
            >{h3}</motion.h3>
            <motion.p style={{
                color : textColor,
            }}
            data-cursorpointer={true}
            {...textOptions}
            >{text}</motion.p>

            {hasBtn && <motion.button style={{
                color : btnColor,
                backgroundColor : btnBgColor,
            }}
            data-cursorpointer={true}
            {...buttonOptions}
            >{btnTxt}</motion.button>}

            <motion.div {...imageOptions}>
                <img src={imgSrc} alt="imgsrc" style={{
                    width : imgSize
                }} />
            </motion.div>
        </div>
    </div>
  )
}

export default Header
