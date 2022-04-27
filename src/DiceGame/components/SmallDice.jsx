import React, { Fragment } from 'react'

export default function SmallDice(props) {
  return (
    <Fragment>
         <img
              style={{ width: 80, height: 80 }}
              src={props.item}
              alt="img"
            />
    </Fragment>
  )
}
