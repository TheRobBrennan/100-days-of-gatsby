import * as React from "react"

const MainLayout: React.FC = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      marginBottom: 1.5,
      marginTop: 1.5,
      maxWidth: 650,
      paddingLeft: 3 / 4,
      paddingRight: 3 / 4,
    }}
  >
    {children}
  </div>
)

export default MainLayout
