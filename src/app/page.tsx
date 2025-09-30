export default function Home() {
  // Get name from environment variable
  console.log(process.env.NEXT_PUBLIC_NAME);
  const name = process.env.NEXT_PUBLIC_NAME || 'World';

  return (
    <div className="font-sans flex items-center justify-center min-h-screen p-8">
      <main className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Hello {name} !
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Welcome to your Next.js application!
        </p>
      </main>
    </div>
  );
}
