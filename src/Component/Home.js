import { Avatar, Dropdown, Navbar, Sidebar } from 'flowbite-react';
import React from 'react';
// import { HiInbox, HiChartPie, HiViewBoards, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from "@heroicons/react"
import { HiChartPie, HiInbox, HiUser, HiShoppingBag, HiArrowRight, HiTableCells } from "react-icons/hi2";


const Home = () => {
    return (
        <div>

            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <div className="w-fit">
                <Sidebar aria-label="Sidebar with multi-level dropdown example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="#"
                                icon={HiChartPie}
                            >
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Collapse
                                icon={HiShoppingBag}
                                label="E-commerce"
                            >
                                <Sidebar.Item href="#">
                                    Products
                                </Sidebar.Item>
                                <Sidebar.Item href="/users/add">
                                    User
                                </Sidebar.Item>
                            </Sidebar.Collapse>

                            <Sidebar.Item
                                href="#"
                                icon={HiInbox}
                            >
                                Inbox
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiUser}
                            >
                                Users
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiShoppingBag}
                            >
                                Products
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiArrowRight}
                            >
                                Sign In
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiTableCells}
                            >
                                Sign Up
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>
    );
};

export default Home;


