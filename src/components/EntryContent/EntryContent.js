import React, { Component } from 'react'
import './EntryContent.css'
import EntryContext from '../../contexts/EntryContext'



export default function EntryContent(props) {
    return (
      <EntryContext.Consumer>
        {(value) => {
          return (
            <div className="EntryContentBlock">
              <header className="EntryInfo">
                <h2>{props.title}</h2>
                <p>by</p>
                <h3>{props.pseudonym}</h3>
                <p>January 1 2020</p>   {/*make dynamic date later */}
              </header>
              <section className="content-section">
                <div className="content-box">
                  <p className="entry-content">
                    {props.content} 
                  </p>
                </div>
                <div className="button-box">
                  <div className="wrapper lft">
                    <button className="editButton">Edit</button>
                  </div>
                  <div className="wrapper rgt">
                    <button className="deleteButton"
                      onClick={() => {}}
                    >Delete</button>
                  </div>
                </div>
              </section>
            </div>
          )
        }}
      </EntryContext.Consumer>
    )
  }
