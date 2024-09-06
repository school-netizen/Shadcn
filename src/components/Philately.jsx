'use client';
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Bell, Star, Filter } from "lucide-react";

export function Philately() {
  const [date, setDate] = useState(new Date())

  return (
    (<div className="bg-zinc-50 min-h-screen">
      <header className="bg-zinc-900 text-zinc-50 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Philatelist Platform</h1>
          <nav className="flex items-center space-x-4">
            <Input className="w-64" placeholder="Search philatelic items..." />
            <Button variant="ghost">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
            </Button>
            <Button variant="ghost">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <Tabs defaultValue="browse" className="space-y-4">
          <TabsList>
            <TabsTrigger value="browse">Browse Items</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="account">My Account</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>
          <TabsContent value="browse" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Philatelic Items</h2>
              <div className="flex space-x-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="newest">Newest Releases</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Card key={item}>
                  <CardHeader>
                    <CardTitle>Rare Stamp {item}</CardTitle>
                    <CardDescription>Postal Circle {item}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=Stamp+${item}`}
                      alt={`Stamp ${item}`}
                      className="w-full h-48 object-cover mb-4" />
                    <p className="text-sm text-zinc-500">A rare stamp from the 19th century.</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold">₹{1000 * item}</span>
                      <Badge variant={item % 3 === 0 ? "destructive" : "secondary"}>
                        {item % 3 === 0 ? "Out of Stock" : "In Stock"}
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled={item % 3 === 0}>
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="community" className="space-y-4">
            <h2 className="text-2xl font-bold">Community</h2>
            <Tabs defaultValue="discussions">
              <TabsList>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="trading">Trading</TabsTrigger>
              </TabsList>
              <TabsContent value="discussions" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Latest Discussions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      {[1, 2, 3, 4, 5].map((discussion) => (
                        <div key={discussion} className="mb-4">
                          <h3 className="font-semibold">Discussion Topic {discussion}</h3>
                          <p className="text-sm text-zinc-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge variant="outline">10 replies</Badge>
                            <Badge variant="outline">5 likes</Badge>
                          </div>
                          <Separator className="my-2" />
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                  <CardFooter>
                    <Button>Start New Discussion</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      {[1, 2, 3, 4, 5].map((review) => (
                        <div key={review} className="mb-4">
                          <div className="flex items-center space-x-2">
                            <Avatar>
                              <AvatarImage src={`/placeholder-avatar-${review}.jpg`} alt={`User ${review}`} />
                              <AvatarFallback>U{review}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">User {review}</h3>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`h-4 w-4 ${star <= review ? "text-yellow-400" : "text-zinc-300"}`} />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-zinc-500 mt-2">
                            Great stamp! The quality exceeded my expectations. Highly recommended for collectors.
                          </p>
                          <Separator className="my-2" />
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="trading" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Trading Offers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      {[1, 2, 3, 4, 5].map((offer) => (
                        <div key={offer} className="mb-4">
                          <h3 className="font-semibold">Trading Offer {offer}</h3>
                          <p className="text-sm text-zinc-500">
                            User {offer} is offering a rare stamp from the 1950s in exchange for a first-day cover from
                            2022.
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">
                            View Details
                          </Button>
                          <Separator className="my-2" />
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                  <CardFooter>
                    <Button>Create Trading Offer</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="account" className="space-y-4">
            <h2 className="text-2xl font-bold">My Account</h2>
            <Tabs defaultValue="deposit">
              <TabsList>
                <TabsTrigger value="deposit">Philatelic Deposit</TabsTrigger>
                <TabsTrigger value="orders">Order History</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              </TabsList>
              <TabsContent value="deposit" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>My Philatelic Deposit</CardTitle>
                    <CardDescription>View and manage your collected items</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="mb-4">
                          <h3 className="font-semibold">Collected Item {item}</h3>
                          <p className="text-sm text-zinc-500">Acquired on: {new Date().toLocaleDateString()}</p>
                          <Badge className="mt-2">Rare</Badge>
                          <Separator className="my-2" />
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="orders" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      {[1, 2, 3, 4, 5].map((order) => (
                        <div key={order} className="mb-4">
                          <h3 className="font-semibold">Order #{order.toString().padStart(5, "0")}</h3>
                          <p className="text-sm text-zinc-500">Placed on: {new Date().toLocaleDateString()}</p>
                          <Badge variant="outline" className="mt-2">
                            {order % 2 === 0 ? "Delivered" : "In Transit"}
                          </Badge>
                          <Separator className="my-2" />
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="wishlist" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>My Wishlist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="mb-4">
                          <h3 className="font-semibold">Wishlist Item {item}</h3>
                          <p className="text-sm text-zinc-500">Added on: {new Date().toLocaleDateString()}</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Move to Cart
                          </Button>
                          <Separator className="my-2" />
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="admin" className="space-y-4">
            <h2 className="text-2xl font-bold">Admin Dashboard</h2>
            <Tabs defaultValue="items">
              <TabsList>
                <TabsTrigger value="items">Manage Items</TabsTrigger>
                <TabsTrigger value="orders">Manage Orders</TabsTrigger>
                <TabsTrigger value="users">Manage Users</TabsTrigger>
              </TabsList>
              <TabsContent value="items" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Philatelic Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="mb-4 flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold">Item {item}</h3>
                            <p className="text-sm text-zinc-500">Stock: {item * 10}</p>
                          </div>
                          <div>
                            <Button variant="outline" size="sm" className="mr-2">
                              Edit
                            </Button>
                            <Button variant="destructive" size="sm">
                              Remove
                            </Button>
                          </div>
                          <Separator className="my-2" />
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                  <CardFooter>
                    <Button>Add New Item</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="orders" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      {[1, 2, 3, 4, 5].map((order) => (
                        <div key={order} className="mb-4 flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold">Order #{order.toString().padStart(5, "0")}</h3>
                            <p className="text-sm text-zinc-500">Status: {order % 2 === 0 ? "Shipped" : "Processing"}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Update Status
                          </Button>
                          <Separator className="my-2" />
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="users" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      {[1, 2, 3, 4, 5].map((user) => (
                        <div key={user} className="mb-4 flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold">User {user}</h3>
                            <p className="text-sm text-zinc-500">Joined: {new Date().toLocaleDateString()}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Separator className="my-2" />
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </main>
    </div>)
  );
}