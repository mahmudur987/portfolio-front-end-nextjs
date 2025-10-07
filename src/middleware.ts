import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/login", // your custom login page
  },
});

export const config = {
  matcher: [
    "/dashboard", // protect dashboard
    // you can add more protected routes here
  ],
};
