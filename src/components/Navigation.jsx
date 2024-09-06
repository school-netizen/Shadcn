import React from 'react'

function Navigation() {
    return (
        <Tabs defaultValue="browse" className="space-y-4">
            <TabsList>
                <TabsTrigger value="browse">Browse Items</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="account">My Account</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default Navigation