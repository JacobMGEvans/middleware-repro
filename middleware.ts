import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(
  (auth, request) => {
    if (!isPublicRoute(request)) {
      auth().protect();
    }
  },
  {
    publishableKey: "pk_test_",
    secretKey: "sk_test_",
  }
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
