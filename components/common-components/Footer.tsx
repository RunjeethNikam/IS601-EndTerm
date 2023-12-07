"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from "./Logo";
import Image from "next/image";

export default function Footer() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {
            txt: "ABOUT US",
            url: '#',
            icon: "/footer/about_us.svg",
            showAnchor: false
        },
        {
            txt: "JOIN THE CLUB",
            url: '#',
            icon: "/footer/join_us.svg",
            showAnchor: false
        },
        {
            txt: "FOLLOW US",
            url: '#',
            icon: "/footer/insta.svg",
            showAnchor: true
        },
        {
            txt: "FIND US",
            url: '#',
            icon: "/footer/location.svg",
            showAnchor: true
        }
    ];

    return (
        <Navbar
            isBordered
            className="bg-warning-500 h-24"
        >

            <NavbarContent justify="start" className="pt-2 text-xl">
                <NavbarBrand>
                    <Logo showLogo={false} clsName="font-4xl"/>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 flex justify-end" justify="start">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} className="flex flex-col justify-end items-center gap-2">
                        <Image
                            className='object-cover'
                            src={item.icon}
                            alt="Le Jardin Brand Logo"
                            height={index == 3? 20:  30}
                            width={index == 3? 20:  30}
                        />
                        <Link
                            color="foreground"
                            href={item.url}
                            showAnchorIcon={item.showAnchor}
                        >
                            {item.txt}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
}