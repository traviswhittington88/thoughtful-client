import React from 'react'
import { Link } from 'react-router-dom'
import './JournalItem.css'
import JournalContext from '../../contexts/JournalContext'

function deleteJournal(journalId, callBack) {

}

export default function JournalItem(props) {
  return (
    <JournalContext.Consumer>
      {(value) => {
        return (
          <li className="journal">
            <h3>{props.name}</h3>
          </li>
        )
      }}
    </JournalContext.Consumer>
  )

}