import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-zinc-600 dark:bg-zinc-800">
      <label className="flex cursor-pointer relative">
        <input type="checkbox" className="sr-only peer/check" />
        <div className="peer peer-checked/check:bg-blue-300 peer-checked/check:after:left-30 w-24 h-12 bg-zinc-600 flex items-center px-1 rounded-full after:content-[''] after:flex after:rounded-full  after:left-0 after:w-10 after:h-10 after:bg-zinc-800">
        </div>
      </label>
    </main>
  );
}
