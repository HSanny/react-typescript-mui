import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

// https://medium.com/@modularcoder/reactjs-multi-level-sidebar-navigation-menu-with-typescrip-materialui-251943c12dda
// https://codesandbox.io/s/github/modularcoder/tutorial-react-tree-menu/tree/master/stage4-react-router?from-embed=&file=/src/App.tsx:861-1606

// https://www.bezkoder.com/react-typescript-login-example/


import List from '@material-ui/core/List'

// import DashboardIcon from '@material-ui/icons/Dashboard'
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
// import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
// import BarChartIcon from '@material-ui/icons/BarChart'
// import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

import { SvgIconProps } from '@mui/material'

import HomeMenuItem from './HomeMenuItem'

type Description = {
    name: string,
    link: string,
    Icon?: React.ReactElement<SvgIconProps>,
    items?: Description[],
}

const homeMenuItems: Description[] = [
  {
    name: 'Dashboard',
    link: '/',
    // Icon: <DashboardIcon />,
  },
  {
    name: 'Orders',
    link: '/orders',
    // Icon: <ShoppingCartIcon />,
  },
  {
    name: 'Customers',
    link: '/customers',
    // Icon: <EmojiPeopleIcon />,
  },
  {
    name: 'Reports',
    link: '/reports',
    // Icon: <BarChartIcon />,
  },
  {
    name: 'Nested Pages',
    // Icon: <LibraryBooksIcon />,
    link: '/nested-pages',
    items: [
      {
        name: 'Level 2',
        link: '/nested-pages/level-2',
      },
      {
        name: 'Level 2',
        link: '/nested-pages/level-2-nested',
        items: [
          {
            name: 'Level 3',
            link: '/nested-pages/level-2-nested/level-3-1',
          },
          {
            name: 'Level 3',
            link: '/nested-pages/level-2-nested/level-3-2',
          },
        ],
      },
    ],
  },
]

const HomeMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {homeMenuItems.map((item, index) => (
        <HomeMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default HomeMenu
