import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar(){
    return(
        <aside className="w-72 bg-zinc-950 p-6">
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 bg-red-500 rounded-full'></div>
          <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
          <div className='w-3 h-3 bg-green-500 rounded-full'></div>
        </div>
        <nav className='space-y-5 mt-10'>
          <a href=""className='flex item-center text-xs font-semibold gap-2 text-zinc-100'>
            <HomeIcon/>
            Home</a>
          <a href=""className='flex item-center text-xs font-semibold gap-2 text-zinc-100'>
            <Search/>
            Search</a>
          <a href=""className='flex item-center text-xs font-semibold gap-2 text-zinc-100'>
            <Library/>
            Your Library</a>
        </nav>
        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brazil</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brazil</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Funk</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Leo Santana</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Forro</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Samba</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Pod Cast</a>
        </nav>
      </aside>
    )
}