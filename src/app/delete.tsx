'use client';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

export function LoginForm() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");

    const handleSendRequest = async () => {
        try {
            const response = await fetch('https://myclan.line.pm/api/deleteaccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: phoneNumber,
                }),
            });

            if (response.ok) {
                toast({
                    title: 'success',
                    description: 'Request sent successfully',
                  })
                // Handle successful response
                console.log('Request sent successfully');
            } else {
                // Handle error response
                console.error('Error sending request');
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
        }
    };

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">
                    Request to Delete Your MyClan Account and Data
                </CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="number">Enter Phone Number</Label>
                    <Input
                        id="number"
                        type="number"
                        placeholder="9999999999"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <Button className="w-28">Send otp</Button>

                <div className="grid gap-2">
                    <Label htmlFor="otp">Enter Otp</Label>
                    <Input
                        id="otp"
                        type="password"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={handleSendRequest}>Send Request</Button>
            </CardFooter>
        </Card>
    );
}
