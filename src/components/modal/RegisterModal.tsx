import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { toast } from "sonner";
import { signUp } from "@/actions/auth";
import { useState } from "react";

export function RegisterModal({
  showSignup,
  setShowSignup,
  setShowLogin,
}: {
  showSignup: boolean;
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState(false);
  const formSchema = z
    .object({
      name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
      phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
      }),
      email: z.string().email(),
      password: z
        .string()
        .min(6, { message: "Password must be at least 8 characters." }),
      confirmPassword: z.string().min(6, {
        message: "Confirm password must be at least 8 characters.",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"], // 👈 attach error to confirmPassword field
    });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { name, phone, email, password } = values;
    try {
      setLoading(true);
      const res = await signUp({ name, phone, email, password, role: "USER" });
      console.log(res);

      if (res.success) {
        toast.success(res.message ?? "Registration successful!");

        toast.success("please LogIn to continue");
        setShowSignup(false);
        setShowLogin(true);
        setLoading(false);
      } else {
        toast.error(res.message ?? "Registration Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={showSignup} onOpenChange={setShowSignup}>
      <DialogTrigger asChild>
        <Button size="sm">Sign up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign up</DialogTitle>
          <DialogDescription>Fill your details perfectly</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              id="form"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder=" Jhon Doe " {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder=" 123-456-7890"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button form="form" type="submit">
            {" "}
            {loading ? "Registering..." : "Register"}
          </Button>
        </DialogFooter>
        <DialogFooter>
          <p>
            Already have an account?{" "}
            <button
              className="underline text-blue-300 mx-2"
              onClick={() => {
                setShowSignup(false);
                setShowLogin(true);
              }}
            >
              logIn
            </button>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
