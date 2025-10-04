import NextAuth from "next-auth";

import { authOptions } from "@/helpers/authOptions";

// ✅ Route handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
