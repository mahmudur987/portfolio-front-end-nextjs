import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const forms = event.currentTarget;

    emailjs
      .sendForm(
        "service_5zxb6mm", // 🔹 Your EmailJS Service ID
        "template_8lpvopr", // 🔹 Your Template ID
        form.current!,
        "r-F-M4rm1mxZ7NMHr" // 🔹 Your Public Key
      )
      .then(
        () => {
          toast.success("Your email has been sent successfully");
        },
        (error) => {
          toast.error("Failed to send email");
          console.error(error.text);
        }
      );

    forms.reset();
  };

  return (
    <section className="flex flex-col items-center py-16">
      {/* Section Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-center mb-10">
        Contact Me
      </h1>

      {/* Contact Form */}
      <Card className="w-full max-w-3xl shadow-xl border rounded-2xl">
        <CardContent className="p-8">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="YourEmail">Your Email Address</Label>
              <Input
                required
                type="email"
                name="YourEmail"
                placeholder="Enter your email"
                className="w-full"
              />
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="YourName">Your Name</Label>
              <Input
                required
                type="text"
                name="YourName"
                placeholder="Enter your name"
                className="w-full"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="PhoneNumber">Your Phone Number</Label>
              <Input
                required
                type="text"
                name="PhoneNumber"
                placeholder="Enter your phone number"
                className="w-full"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                required
                name="message"
                placeholder="Type your message here..."
                className="w-full h-40"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit" className="px-6">
                Send Email
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
};

export default Contacts;
