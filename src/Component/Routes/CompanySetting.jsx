import React from 'react'
import { useParams } from 'react-router-dom'

function CompanySetting() {

    const {companyID, setting} = useParams();

  return (
    <div>CompanySetting {companyID} {setting}</div>
  )
}

export default CompanySetting