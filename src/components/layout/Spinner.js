import React, { Fragment } from 'react'
import spinner from './spinner.gif'

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      syle={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
)

export default Spinner
