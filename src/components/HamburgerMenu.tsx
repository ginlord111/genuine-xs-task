import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import {  Menu } from 'lucide-react'
import Link from 'next/link'
  
const HamburgerMenu = ({mobileNav}:{mobileNav:any[]}) => {
  return (
<Drawer direction="right" snapPoints={[0.7, 1]} handleOnly>
            <DrawerTrigger>
              <Menu />
            </DrawerTrigger>
            <DrawerContent className="w-[70%] overflow-hidden bg-white  text-gray-500 h-full">
              <DrawerHeader className="p-4 border-b border-gray-700">
                <DrawerTitle className="text-lg font-semibold">
                  Navigation
                </DrawerTitle>
              </DrawerHeader>
              {mobileNav.map((item, index) => (
                <div key={index} className="block py-2 px-3">
                  <Link href={"/"} className="text-xl">
                    <DrawerClose>{item.name}</DrawerClose>
                  </Link>
                </div>
              ))}
            </DrawerContent>
          </Drawer>  )
}

export default HamburgerMenu