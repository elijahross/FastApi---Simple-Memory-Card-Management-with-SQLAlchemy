import CreateCard from '../components/CreateCard.js'
import CreateStack from '@/components/CreateStack.js';
import Link from 'next/link.js';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className='flex flex-col'>
          <p className="flex w-full justify-center standart_style">
            Have some fun
          </p>
          <div className="flex w-full my-4 justify-center standart_style">
            <Link href="/quiz" className='hover:scale-105'>
              Play
            </Link>
          </div>
        </div>
        <CreateCard />
        <CreateStack />
      </div>
    </main>
  )
}
