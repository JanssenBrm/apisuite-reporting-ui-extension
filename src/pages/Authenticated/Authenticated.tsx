import React from 'react'

const Authenticated: React.FC = () => (
  <div
    style={{
      minHeight: '100%',
      backgroundColor: 'burlywood',
      padding: '300px 16px 0 16px',
    }}
  >
    <h1>Authenticated extension page</h1>
    <p>
      This page was dynamically added by an extensions and it is only visible to
      authenticated users.
    </p>
  </div>
)

export default Authenticated
