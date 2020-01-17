import React, { Component } from 'react'
import './EntryContent.css'


export default class EntryContent extends Component {
  render() {
    return (
      <>
        <div className="EntryContentBlock">
          <header className="EntryInfo">
            <h2>Today was a good day</h2>
            <p>by</p>
            <h3>Bugs Bunny</h3>
            <p>January 1 2020</p>
          </header>
          <section className="content-section">
            <div className="content-box">
              <p className="entry-content">Wow what a day! I managed to escape that dopey hunter Fudd, Yosemite GoofHead, and some other notoriously dumb antagonists!
                not to mention.. I got to eat several delicious carrots. 
              </p>
            </div>
            <div className="button-box">
              <div className="wrapper lft">
                <button className="editButton">Edit</button>
              </div>
              <div className="wrapper rgt">
                <button className="deleteButton">Delete</button>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}