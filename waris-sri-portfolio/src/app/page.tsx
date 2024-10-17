import { chakra } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-black">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-4xl font-bold text-center">
          <h1>Waris Sripatoomrak</h1>
        </div>

        <div></div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
      </footer>
    </div>
  );
}
