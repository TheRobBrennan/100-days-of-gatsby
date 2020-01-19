import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getMenuListItems = (data) => {
  const menuItemsArray = []
  data.allMenuItemsJson.edges.forEach(item =>
    menuItemsArray.push(<li key={item.node.label}>{item.node.label}</li>)
  )

  return menuItemsArray
}

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuItemsQuery {
      allMenuItemsJson {
        edges {
          node {
            label
            link
          }
        }
      }
    }
  `)

  return <><ul>{getMenuListItems(data)}</ul></>
}

export default Menu
