import React, { Component } from 'react'
import './JournalSidebarAlt.css'

export default function JournalSidebarAlt(props) {
    return (
      <>
        <div className="sidebar-alt">
          <h4 className="sidebar-alt-heading">{props.journal_name}</h4>
        </div>
      </>
    )
}