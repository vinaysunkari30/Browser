import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  deleteFromList = id => {
    const {historyList} = this.state
    const deletedHistory = historyList.filter(each => each.id !== id)
    this.setState({historyList: deletedHistory})
  }

  searchItem = e => {
    this.setState({
      searchInput: e.target.value,
    })
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResults = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    let emptyMsg
    let list
    if (historyList.length === 0 || searchInput !== '') {
      emptyMsg = <p>There is no history to show</p>
    } else {
      list = (
        <div className="main-history-con">
          <ul className="history-con">
            {searchResults.map(eachHistory => (
              <HistoryItem
                key={eachHistory.id}
                eachItem={eachHistory}
                deleteFromList={this.deleteFromList}
              />
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="main-con">
        <div className="nav-con">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="input-con">
            <div className="icon-con">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              className="input-bar"
              type="search"
              placeholder="Search History"
              onChange={this.searchItem}
              value={searchInput}
            />
          </div>
        </div>
        <ul>{list}</ul>
        <p className="msg">{emptyMsg}</p>
      </div>
    )
  }
}

export default BrowserHistory
