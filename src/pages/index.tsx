import React from 'react'

interface Props {

}

const index = ({}: Props) => {
  return (
    <div>
      {[...Array(20).keys()].map(item => {
        return <h1>OK</h1>
      })}
    </div>
  )
}

export default index