import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
import EntryContext from '../../contexts/EntryContext'
import './EntryItem.css'

function deleteEntryRequest(entryId, callBack) {

}


export default function EntryItem(props) {
  return (
    <EntryContext.Consumer>
      {(value) => {
        return (
          <li className="EntryItem">
            <div className="entry">
              <header>
                <h2 className="entry-heading">
                  <Link 
                    to={`/entry/${props.id}`}
                  >
                    {props.title}
                  </Link>
                </h2>
                <p>from</p>
                <h3 className="entry-subheading">Journal {props.journal_id}</h3>
                <p>by</p>
                <h4>{props.pseudonym}</h4>
                <h4>{props.date}</h4>
              </header>
                <button 
                  className="delete-entry-button"
                  onClick={() => {
                    deleteEntryRequest(
                      props.id,
                      value.deleteEntry,
                    )
                  }}
                >
                  Delete
                </button>
            </div>
          </li>
        )
      }}
    </EntryContext.Consumer>
  )
}