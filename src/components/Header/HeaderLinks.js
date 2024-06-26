/*eslint-disable*/
import React, { useState, useContext } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import {
  Apps,
  CloudDownload,
  Home,
  Info,
  ContactMail,
  HomeOutlined,
  HomeWork,
  GetApp
} from '@material-ui/icons'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js'
import { myContext } from 'views/MathPage/MathPage.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks (props) {
  const [selectedItem, setSelectedItem] = useState(props.selectedItem)
  // const [isSearch, setIsSearch] = useContext(myContext)
  const handleListItemClick = item => {
    // setSelectedItem(item)
    // if (item == 'Materials') {
    //   setIsSearch(false)
    // }
  }

  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem
        className={classes.listItem}
        selected={selectedItem === 'Home'}
        onClick={() => handleListItemClick('Home')}
      >
        <Button
          href='/'
          color='transparent'
          // target="_blank"
          className={classes.navLink}
          selected
        >
          <Home className={classes.icons} /> Главная
        </Button>
      </ListItem>
      <ListItem
        className={classes.listItem}
        selected={selectedItem === 'About'}
        onClick={() => handleListItemClick('About')}
      >
        <Button
          href='/profile-page'
          color='transparent'
          //target="_blank"
          className={classes.navLink}
        >
          <Info className={classes.icons} /> О себе
        </Button>
      </ListItem>
      <ListItem
        className={classes.listItem}
        selected={selectedItem === 'Materials'}
        onClick={() => handleListItemClick('Materials')}
      >
        <CustomDropdown
          noLiPadding
          buttonText='Материалы'
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={GetApp}
          dropdownList={[
            <Link to='/math-page' className={classes.dropdownLink}>
              Математика
            </Link>,
            <Link to='/physics-page' className={classes.dropdownLink}>
              Физика
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='/#form'
          color='transparent'
          // target="_blank"
          className={classes.navLink}
        >
          <ContactMail className={classes.icons} /> Контакты
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  )
}
