import meter1 from "/src/assets/img/meter1.svg"
import meter2 from "/src/assets/img/meter2.svg"
import meter3 from "/src/assets/img/meter3.svg"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { useEffect, useState } from "react"
import colorSharp from "/src/assets/img/color-sharp.png"
import "./Skills.css"
import { data } from "./data"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const [skills, setSkill] = useState(data)
  const [index, setIndex] = useState(0)

  //keeps array within bounds
  useEffect(() => {
    const lastIndex = skills.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, skills])

  //moves to next item
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>

              <div className="section-center">
                {skills.map((item, itemIndex) => {
                  const { id, title, stack } = item

                  let position = "nextSlide"
                  if (itemIndex == index) {
                    position = "activeSlide"
                  }

                  if (
                    itemIndex === index - 1 ||
                    (index === 0 && itemIndex === skills.length - 1)
                  ) {
                    position = "lastSlide"
                  }

                  return (
                    <article className={`skill-article ${position}`} key={id}>
                      <h4>{title}</h4>
                      <div className="skill-container">
                        {stack.map((skill) => {
                          const { id, img, title, experience } = skill
                          return (
                            <div className="skill-box" key={id}>
                              <div className="skill-title">
                                <div className="image">
                                  <img src={img} className="skill-icon" />
                                </div>
                                <h3>{title}</h3>
                                <h4>{experience}</h4>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </article>
                  )
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                  <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
export default Skills
