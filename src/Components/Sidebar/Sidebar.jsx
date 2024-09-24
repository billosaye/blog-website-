import "./Sidebar.css";

import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://bestcompaniesaz.com/wp-content/uploads/2021/04/black-women-in-tech.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          quae deserunt delectus suscipit accusamus quam amet reiciendis nisi
          hic sunt repellat distinctio in dolores nihil, libero voluptate ab
          voluptates eum!
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fa b fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}


