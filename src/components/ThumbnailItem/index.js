import './index.css'

const ThumbnailItem = props => {
  const {imagesLists, specificImg, isActive} = props
  const {imageAltText, imageUrl, thumbnailUrl, thumbnailAltText} = imagesLists

  const addedSty = isActive ? `selected-img` : null

  const sendSpecificUrl = () => {
    specificImg(imageUrl, imageAltText)
  }
  return (
    <li className="thumb-sty">
      <button className={`btn-sty ${addedSty}`} type="button">
        <img
          className={`img-sty ${addedSty}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={sendSpecificUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
