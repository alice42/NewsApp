import React from 'react'

const TotalResults = props =>
  props.results && (
    <div>
      {props.results > 0 ? (
        <div>Total Results: {props.results > 100 ? 100 : props.results}</div>
      ) : (
        <div> No Results, try something else :)</div>
      )}
    </div>
  )

export default TotalResults
