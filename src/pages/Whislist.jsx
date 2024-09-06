import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ShoppingCart, X } from "lucide-react"

import React from 'react'

export default function Wishlist() {
    const [cartItems, setCartItems] = useState([
        { id: 1, title: "Rare Stamp 1", price: 1000, quantity: 2 },
        { id: 2, title: "Rare Stamp 2", price: 2000, quantity: 1 },
    ])
    const [wishlistItems, setWishlistItems] = useState([
        {id:3,title:"Rare",price:2000,quantity:3},
        {id:2,title:"Rare",price:2000,quantity:3}
    ])


    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id))
    }

    const moveToCart = (id) => {
        const item = wishlistItems.find(item => item.id === id)
        if (item) {
            setCartItems([...cartItems, { ...item, quantity: 1 }])
            removeFromWishlist(id)
        }
    }

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle>Your Cart</CardTitle>
                <CardDescription>Manage your cart and wishlist items</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="wishlist">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="cart">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Cart
                        </TabsTrigger>
                        <TabsTrigger value="wishlist">
                            <Heart className="mr-2 h-4 w-4" />
                            Wishlist
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="wishlist">
                        {wishlistItems.length === 0 ? (
                            <p className="text-center py-4">Your wishlist is empty.</p>
                        ) : (
                            <div className="space-y-4">
                                {wishlistItems.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between">
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <div className="flex items-center space-x-2">
                                            <p className="font-semibold">₹{item.price}</p>
                                            <Button variant="outline" size="sm" onClick={() => moveToCart(item.id)}>
                                                Add to Cart
                                            </Button>
                                            <Button variant="ghost" size="icon" onClick={() => removeFromWishlist(item.id)}>
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </CardContent>
            <CardFooter>
                <Button className="w-full" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </Button>
            </CardFooter>
        </Card>
    )
}
