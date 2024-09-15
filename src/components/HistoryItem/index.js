import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteFromList} = props

  const deleteHistory = () => {
    deleteFromList(eachItem.id)
  }
  return (
    <div>
      <li className="item-con">
        <div className="items">
          <p className="time">{eachItem.timeAccessed}</p>
          <img className="app-logo" src={eachItem.logoUrl} alt="domain logo" />
          <p className="title">{eachItem.title}</p>
          <p className="domain">{eachItem.domainUrl}</p>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="delete-icon"
          onClick={deleteHistory}
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </li>
      <li className="item-con-2">
        <p className="time-2">{eachItem.timeAccessed}</p>
        <div className="btn-text-con">
          <div className="items-2">
            <img
              className="app-logo-2"
              src={eachItem.logoUrl}
              alt="domain logo"
            />
            <div className="text-con">
              <p className="title-2">{eachItem.title}</p>
              <p className="domain-2">{eachItem.domainUrl}</p>
            </div>
          </div>
          <button
            data-testid="delete"
            type="button"
            className="delete-icon-2"
            onClick={deleteHistory}
          >
            <img
              className="delete-icon-2"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default HistoryItem
