"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Contacts() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone_number: "",
    message: "",
  });

  // handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.send(
        "service_krr7p4h", // ✅ your EmailJS Service ID
        "template_8lpvopr", // ✅ your EmailJS Template ID
        formData, // ✅ direct object instead of ref
        "r-F-M4rm1mxZ7NMHr" // ✅ your Public Key
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("Your email has been sent successfully!");
        setFormData({
          from_name: "",
          from_email: "",
          phone_number: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center py-16">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-center mb-10">
        Contact Me
      </h1>

      {/* Contact Form */}
      <Card className="w-full max-w-3xl shadow-xl border rounded-2xl">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="from_name">Your Name</Label>
              <Input
                required
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="from_email">Your Email Address</Label>
              <Input
                required
                id="from_email"
                name="from_email"
                type="email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone_number">Your Phone Number</Label>
              <Input
                required
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                required
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="h-40"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit" className="px-6" disabled={loading}>
                {loading ? "Sending..." : "Send Email"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <div className="flex flex-wrap justify-around gap-5 w-full mt-16">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-semibold">Email Me</h3>
          <p className="text-muted-foreground">mdmahmudurrahman987@gmail.com</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-semibold">Call Me</h3>
          <p className="text-muted-foreground">+8801671706882</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-muted-foreground">
            21/2, Meradia, Khilgaon, Dhaka
          </p>
        </div>
      </div>
    </section>
  );
}
