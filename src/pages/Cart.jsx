import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Trash2, Heart, ShoppingCart } from "lucide-react"

// interface CartItem {
//   id: number
//   title: string
//   price: number
//   quantity: number
// }

// interface WishlistItem {
//   id: number
//   title: string
//   price: number
// }

export function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Rare Stamp 1", price: 1000, quantity: 2 },
    { id: 2, title: "Rare Stamp 2", price: 2000, quantity: 1 },
  ])

  

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

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
        <Tabs defaultValue="cart">
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
          <TabsContent value="cart">
            {cartItems.length === 0 ? (
              <p className="text-center py-4">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-zinc-500">Quantity: {item.quantity}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold">₹{item.price * item.quantity}</p>
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between items-center font-semibold">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
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