import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Eye, EyeOff, Mail, Lock, User, AlertTriangle } from "lucide-react"

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const [passwordStrength, setPasswordStrength] = useState(0)

    const checkPasswordStrength = (password) => {
        let strength = 0
        if (password.length >= 8) strength++
        if (password.match(/[a-z]/)) strength++
        if (password.match(/[A-Z]/)) strength++
        if (password.match(/[0-9]/)) strength++
        if (password.match(/[^a-zA-Z0-9]/)) strength++
        setPasswordStrength(strength)
    }
    return (
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md p-2">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Philatelist Platform</CardTitle>
                    <CardDescription className="text-center">Login or create an account to get started</CardDescription>
                </CardHeader>
                <Tabs defaultValue="signup">
                    <TabsList className="grid w-full grid-cols-2">
                        {/* Navlink to Login Page */}
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signup">
                        <form>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="username">Username</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                                        <Input id="username" placeholder="Choose a username" className="pl-10" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                                        <Input id="email" placeholder="Enter your email" type="email" className="pl-10" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                                        <Input
                                            id="password"
                                            placeholder="Create a password"
                                            type={showPassword ? "text" : "password"}
                                            className="pl-10 pr-10"
                                            onChange={(e) => checkPasswordStrength(e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-3 text-zinc-500"
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                    <div className="flex mt-2 space-x-1">
                                        {[1, 2, 3, 4, 5].map((level) => (
                                            <div
                                                key={level}
                                                className={`h-2 w-full rounded ${passwordStrength >= level ? "bg-green-500" : "bg-zinc-200"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I agree to the{" "}
                                        <a href="#" className="text-blue-600 hover:underline">
                                            terms and conditions
                                        </a>
                                    </label>
                                </div>
                                <Button className="w-full">Sign Up</Button>
                            </div>
                        </form>
                        <Separator className="my-4" />
                        <div className="space-y-4">
                            <Button variant="outline" className="w-full">
                                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                                </svg>
                                Sign up with Google
                            </Button>
                            <Button variant="outline" className="w-full">
                                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                                </svg>
                                Sign up with Facebook
                            </Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </Card>
        </div>
    )
}
