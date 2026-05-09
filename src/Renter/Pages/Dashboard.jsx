"use client";

import React from 'react'
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react";

import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";

import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <div>
      <nav className="flex items-center justify-between bg-linear-to-r from-slate-200 to-slate-400 px-6 py-8">
        <Breadcrumb aria-label="Default breadcrumb example">
              <BreadcrumbItem href="#" icon={HiHome}>
                Home
              </BreadcrumbItem>
              <BreadcrumbItem href="#">Projects</BreadcrumbItem>
              <BreadcrumbItem>Flowbite React</BreadcrumbItem>
            </Breadcrumb>
       <div>
        <Button onClick={() => setIsOpen(true)}><TiThMenuOutline /></Button>
      </div>
      </nav>
      
      <div>
        
        <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader title="MENU" titleIcon={() => <></>} />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                </form>
                <SidebarItems>
                  <SidebarItemGroup>
                    <SidebarItem href="/" icon={HiChartPie}>
                      Dashboard
                    </SidebarItem>
                    <SidebarItem href={'/allproducts'} icon={HiShoppingBag}>
                      Products
                    </SidebarItem>
                    <SidebarItem href="/users/list" icon={HiUsers}>
                      Users list
                    </SidebarItem>
                    <SidebarItem href="/authentication/sign-in" icon={HiLogin}>
                      Sign in
                    </SidebarItem>
                    <SidebarItem href="/authentication/sign-up" icon={HiPencil}>
                      Sign up
                    </SidebarItem>
                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    <SidebarItem href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>
                      Docs
                    </SidebarItem>
                    <SidebarItem href="https://flowbite-react.com/" icon={HiCollection}>
                      Components
                    </SidebarItem>
                    <SidebarItem href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>
                      Help
                    </SidebarItem>
                  </SidebarItemGroup>
                </SidebarItems>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
      </div>

    </div>
  )
}

export default Dashboard
