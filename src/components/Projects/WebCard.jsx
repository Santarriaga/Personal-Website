import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const WebCard = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  index,
  slug,
}) => {
  return (
    <article className="web-project">
      <img src={image} className="project-img" alt={title} />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <a href="" className="project-slug">
          <h3>{title}</h3>
        </a>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>
        </div>
      </div>
    </article>
  )
}
export default WebCard
