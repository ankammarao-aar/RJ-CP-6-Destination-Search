// Write your code here
import './index.css'

const DestinationItem = i => {
  const {destination} = i
  const {imgUrl, name} = destination

  return (
    <li className="item-card-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
