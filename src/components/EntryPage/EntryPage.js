import React, { Component } from 'react'
import './EntryPage.css'

export default class EntryPage extends Component {
  render() {
    return (
      <>
        <header className="entry-header">
          <h2 className="entry-main-heading">Entries</h2>
        </header>
        <section className="entry-section">
            <div class="entry">
              <header>
                <h2 className="entry-heading">My Daily Entry #1</h2>
                <p>from</p>
                <h3 className="entry-subheading">Daily Life</h3>
                <p>by</p>
                <h4>Roland Deschaine</h4>
                <h4>January 1, 2020</h4>
                <p class="content">What a day. I can't say I was surprised at the chaos which ensued upon our normally pleasant little lives...</p>
              </header>
            </div>
          </section>
          <section className="entry-section">
            <div class="entry">
              <header className="entry">
                <h2 className="entry-heading">My Daily Entry #2</h2>
                <p>I learned a lot about life this year...</p>
              </header>
            </div>
          </section>
          <section className="entry-section">
            <div class="entry">
              <header>
                <h2 className="entry-heading">My Daily Entry #3</h2>
                <p>Future goals</p>
              </header>
            </div>
          </section>
          <section className="entry-section">
            <div class="entry">
              <header>
                <h2 className="entry-heading">My Daily Entry #3</h2>
                <p>Parenthood has taught me a lot</p>
              </header>
            </div>
          </section>
          <button type="button" className="add-entry-button">New Entry</button>
      </>
    )
  }
}