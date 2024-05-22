import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-4 flex justify-center">
      <SignUp />
    </div>
  );
}
