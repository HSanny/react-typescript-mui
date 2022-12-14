import React from 'react'
// import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/core/styles'
// import { SvgIconProps } from '@material-ui/core/SvgIcon'
import List from '@material-ui/core/List'

// import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'

import HomeMenuItemComponent from './HomeMenuItemComponent'
import { json } from 'stream/consumers'
import { Icon, ListItemIcon } from '@mui/material'
// import { SvgIconProps } from '@mui/material'

// React runtime PropTypes
// export const AppMenuItemPropTypes = {
//   name: PropTypes.string.isRequired,
//   link: PropTypes.string,
//   Icon: SVGRectElement,
//   items: PropTypes.array,
// }

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
// type HomeMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>
// type HomeMenuItemPropsWithoutItems = Omit<HomeMenuItemPropTypes, 'items'>

// Improve child items declaration
// export type HomeMenuItemProps = HomeMenuItemPropsWithoutItems & {
//   items?: HomeMenuItemProps[]
// }
export interface HomeMenuItemProps {
  name: string,
  link: string,
  // Icon: React.ReactElement<SvgIconProps>,
  items?: HomeMenuItemProps[]
}

const HomeMenuItem: React.FC<HomeMenuItemProps> = props => {
  const { name, link, items = [] } = props
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(false)
  console.log('item list', items);
  console.log('isExpandable', isExpandable);
  console.log('open', open);
  function handleClick() {
    console.log('clicking');
    setOpen(!open)
  }

  const MenuItemRoot = (
    <HomeMenuItemComponent className={classes.menuItem} link={link} onClick={handleClick}>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText
        primary={name}
        inset={!Icon}
      />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </HomeMenuItemComponent>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <HomeMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}

const useStyles = makeStyles(theme =>
  createStyles({
    menuItem: {
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default HomeMenuItem;
