import React from 'react'
import { Link } from 'react-router-dom'
import './JournalItem.css'
import JournalContext from '../../contexts/JournalContext'

function deleteJournal(journalId, callBack) {

}

function filterEntriesByJournalRequest(journalId, callBack) {
  console.log('filterEntriesByJournalRequest called','\n','journalId:',journalId)
}

export default function JournalItem(props) {
  return (
    <JournalContext.Consumer>
      {(value) => {
        return (
          <li
            className="journal"
            key={props.id}
            onClick={()=> {
              filterEntriesByJournalRequest(
                props.id,
                value.filterEntriesByJournal,
              )
            }}
          >
            <h3>{props.name}</h3>
          </li>
        )
      }}
    </JournalContext.Consumer>
  )

}