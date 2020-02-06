import React from 'react'
//import { Link, withRouter } from 'react-router-dom'
import './EntryContent.css'
import EntryContext from '../../contexts/EntryContext'
import TokenService from '../../services/token-service'
import Moment from 'react-moment';
import 'moment-timezone';


function deleteEntryRequest(entryId, callBack) {
  callBack(entryId)
}


export default function EntryContent(props) {

  function nextPath(path) {
    props.history.push(path);
  }

    return (
      <EntryContext.Consumer>
        {(value) => {
          return (
            <div className="EntryContentBlock">
              <header className="EntryInfo">
                <h2>{props.title}</h2>
                <p>by</p>
                <h3>{props.pseudonym}</h3>
                <p>
                  <Moment interval={0} format="Do MMM YYYY" className="date_created">
                    {props.date_created}
                  </Moment>
                </p>
              </header>
              <section className="content-section">
                <div className="content-box">
                  <p className="entry-content">
                    {props.content} 
                  </p>
                </div>
                { TokenService.getUserId().toString() === props.user_id.toString() &&
                  <div className="button-box">
                    <button
                      type="button"
                      className="editButton"
                      onClick={() => nextPath(`/editentry/${props.id}`) }
                    >
                      Edit
                    </button>
                    <button 
                      type="button"
                      className="deleteButton"
                      onClick={() => {
                        deleteEntryRequest(
                          props.id,
                          value.deleteEntry,
                        )
                        props.history.push('/homepage')
                      }}
                    > 
                      Delete
                    </button>
                  </div>
                  }
              </section>
            </div>
          )
        }}
      </EntryContext.Consumer>
    )
  }
