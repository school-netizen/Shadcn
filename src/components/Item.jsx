import React from 'react'
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from './ui/button'
import { Heart } from "lucide-react"

function Item({ id=1, title="ppt kab banega", description="team ,there was a saying from our leader->App wagera to ban jayega tum chill karo pr ppt outstanding hona chahiye for the tag of finalist", price="5 rupiya", inStock=2}) {
  //instead of this we'll take philatelic item as object with those attributes in the props from the database and display as per the requirment


  const [isWishlisted, setIsWishlisted] = useState(false)
  // const toggelWish=()=>{
    
  // }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {[1,2,3].map((item) => (
        <Card key={item}>
          <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              {/* Rare stamk is the "category"-> */}
              <CardTitle>{id} Rare Stamp: {title}</CardTitle>
              <CardDescription>Postal Circle {item}</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={isWishlisted ? "text-red-500" : "text-zinc-500"}
            >
              <Heart className="h-5 w-5" fill={isWishlisted ? "currentColor" : "none"} />
            </Button>
          </div>
          </CardHeader>
          <CardContent>
            <img
              src={``}
              alt={`Philately of ${title}`}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-sm text-zinc-500">{description}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold">₹{price}</span>
              <Badge variant={inStock <1 ? "destructive" : "secondary"}>
                {inStock<1 ? "Out of Stock" : "In Stock"}
              </Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={inStock<1}>
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Item