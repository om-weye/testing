import React from 'react'
import { useParams } from 'react-router-dom'

function CompanyDetails() {

    const {companyID} = useParams();

  return (
    <div>CompanyDetails : {companyID}</div>
  )
}

export default CompanyDetails