"use client"

import * as React from "react"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full flex justify-center p-4">
            <div className="w-full md:max-w-4xl flex justify-between items-center gap-4 p-2">
                <h2 className="font-semibold text-xl">Github Analyze</h2>
                <div className="hidden md:flex items-center gap-6">
                    <NavigationMenu>
                        <NavigationMenuList className="flex-wrap">
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/">Dashboard</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/filter">Filters</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/docs">Docs</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <ThemeToggle />
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle/>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="w-[250px] sm:w-[280px] px-4">
                            <VisuallyHidden>
                                <SheetTitle>Code Snippet</SheetTitle>
                                <SheetDescription>Hi</SheetDescription>
                            </VisuallyHidden>
                            <div className="mt-10 flex flex-col pt-3 pb-6 space-y-3 text-lg">
                                <Link href="/" onClick={() => setOpen(false)}>
                                    <span className="font-semibold">Dashboard</span>
                                </Link>
                                <Link href="/filter" onClick={() => setOpen(false)}>
                                    <span className="font-semibold">Filters</span>
                                </Link>
                                <Link href="/docs" onClick={() => setOpen(false)}>
                                    <span className="font-semibold">Docs</span>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
