import React from 'react'
import "../styles/home.scss"
import {motion} from "framer-motion"



const Home = () => {

    const animations = {
        h1:{
            initial:{
                x: "-100%",
                opactiy: 0,
            },
            whileInView:{
                x:0,
                opacity: 1,
            }

        }
    }
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animations.h1}
                   >
                    Hi, I Am <br/> Bhaskar Purohit
                </motion.h1>
            </div>
        </section>
        <section></section>
    </div>
  )
}

export default Home