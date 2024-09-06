import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ShoppingCart, Bell, Star, Filter } from "lucide-react";

export default function Header({ cartItemsCount, wishlistItemsCount}) {
 const onCartClick =()=>{}
  return (
    <header className="bg-zinc-900 text-zinc-50 py-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Philatelist Platform</h1>
        <nav className="flex items-center space-x-4">
          <Input className="w-64" placeholder="Search philatelic items..." />
          <Button variant="ghost" onClick={onCartClick}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart
            {cartItemsCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {cartItemsCount}
              </Badge>
            )}
          </Button>
          <Button variant="ghost">
            <Heart className="mr-2 h-4 w-4" />
            Wishlist
            {wishlistItemsCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {wishlistItemsCount}
              </Badge>
            )}
          </Button>
          <Button variant="ghost">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback className="text-zinc-500 font-bold">
              <User/>
            </AvatarFallback>
          </Avatar>
        </nav>
      </div>
    </header>
  )
}
