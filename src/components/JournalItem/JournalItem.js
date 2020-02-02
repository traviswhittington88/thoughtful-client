import React from 'react'
import './JournalItem.css'
import EntryContext from '../../contexts/EntryContext'



function filterEntriesByJournalRequest(journalId, callBack) {
  callBack(journalId)
}

export default function JournalItem(props) {
  return (
    <EntryContext.Consumer>
      {(value) => {
        return (
          <li
            className="journal"
            key={props.id}
            onClick={()=> {
              filterEntriesByJournalRequest(
                props.id,
                value.filterEntriesByJournal
              )
            }}
          >
            <h3>{props.name}</h3>
          </li>
        )
      }}
    </EntryContext.Consumer>
  )

}