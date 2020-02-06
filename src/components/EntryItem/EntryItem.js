import React from 'react'
import { Link } from 'react-router-dom'
import EntryContext from '../../contexts/EntryContext'
import './EntryItem.css'
import TokenService from '../../services/token-service';

function deleteEntryRequest(entryId, callBack) {
  callBack(entryId);
}


export default function EntryItem(props) {
  return (
    <EntryContext.Consumer>
      {(value) => {
        return (
          <li className="EntryItem" key={props.id}>
            <div className="entry">
              <header className="entry-header">
                <h2 className="entry-heading">
                    <Link 
                      to={`/entry/${props.id}`}
                    >
                      {props.title}
                    </Link>
                </h2>
                <p>from</p>
                <h3 className="entry-subheading">{props.journal_name}</h3>
                <p>by</p>
                <h4>{props.pseudonym}</h4>
                <h4>{props.date}</h4>
              </header>
              {TokenService.getUserId().toString() === props.user_id.toString() &&
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
              }
            </div>
          </li>
        )
      }}
    </EntryContext.Consumer>
  )
}