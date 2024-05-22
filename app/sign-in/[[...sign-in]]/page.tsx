import { SignIn } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="mt-4 flex justify-center">
      <SignIn
        appearance={{
          elements: {
            card: "bg-red-500",
            // footerAction__signIn: "bg-red-500",
            footer: {
              background: "bg-red-500",
            },
          },
        }}
      />
    </div>
  );
}
