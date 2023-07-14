import React,{useRef} from 'react'
import "../styles/home.scss"
import {motion} from "framer-motion"
import  Typewriter  from 'typewriter-effect'
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import me from "../assets/idimg.png"
import { animate } from 'framer-motion'



const Home = () => {

    const clientCount = useRef(null)
    const projectCount = useRef(null)

    const animationClientsCount = ()=>{
        animate(0,100, {
            duration: 1,
            onUpdate: (v)=> clientCount.current.textContent = v.toFixed()
        })

    }

    const animationsProjectCount = ()=>{
        animate(0, 20, {
            duration: 1,
            onUpdate: (v)=> (projectCount.current.textContent = v.toFixed()),
        })
    }

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

        },

        button:{
            initial:{
                y: "-100%",
                opacity: 0,
            },
            whileInView:{
                y:0,
                opacity:1,
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

                <Typewriter options={{
                    strings: ["A Developer","A Designer", "A Creator"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "typewriterpara",
                    cursor: "",
                    
                    }}/>
                    <div>
                        <a href="mailto:bhaskarpurohit22@gmail.com">
                            Hire Me
                        </a>
                        <a href="#work">Projects <BsArrowUpRight/>  </a>
                    </div>

                    <article>
                        <p>+ <motion.span whileInView={animationClientsCount} ref={clientCount}>100</motion.span></p>
                        <span>Clients Worldwide</span>
                    </article>

                    <aside>
                        <article>
                            <p>+<motion.span ref={projectCount} whileInView={animationsProjectCount}>20</motion.span></p>
                            <span>Projects Made</span>
                        </article>

                        <article data-special>
                            <p>Contact</p>
                            <span>bhaskarpurohit22@gmail.com</span>
                        </article>
                    </aside>
            </div>
        </section>
        <section>
            <img src={me} alt="Bhaskar" />
        </section>
        <BsChevronDown/>
    </div>
  )
}

export default Home