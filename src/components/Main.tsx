import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from 'next/image'

export function Main(){
    return(
        
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='p-1 rounded-full bg-black/40'>
              <ChevronLeft/>
            </button>
            <button className='p-1 rounded-full bg-black/40'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-3 mt-4'>
            <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/images/264x264.jpg'  width={104} height={104}  alt='Capa dos álbums'/>
              <strong>Teto - Fashion</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>

            <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/images/6081c76f51279.jpg'  width={104} height={104} alt='Capa dos álbums'/>
              <strong>Teto - M4 feat. Matuê</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>

            <a href='#'className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/images/C0FA635A-8A92-46F2-BED8-E6A79EDEE45E.jpeg' width={104} height={104}  alt='Capa dos álbums'/>
              <strong>Teto - Dia Azul</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/images/download.jpg'  width={104} height={104} alt='Capa dos álbums'/>
              <strong>Teto, WIU, Matuê - Flow Espacial </strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/images/images.jpg'  width={104} height={104} alt='Capa dos álbums'/>
              <strong>Phonk</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/images/o3.jpg'  width={104} height={104} alt='Capa dos álbums'/>
              <strong>Iron Maiden - The Trooper</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'> Made for Kayky Paulino</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/images/264x264.jpg' className='w-full' width={120} height={120}  alt='Capa dos álbums'/>
              <strong className='font-semibold'>Fashion</strong>
              <span className='text-sm text-zinc-400'>Teto</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/images/C0FA635A-8A92-46F2-BED8-E6A79EDEE45E.jpeg' className='w-full' width={120} height={120}  alt='Capa dos álbums'/>
              <strong className='font-semibold'>Dia Azul</strong>
              <span className='text-sm text-zinc-400'>Teto</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/images/images.jpg' className='w-full' width={120} height={120}  alt='Capa dos álbums'/>
              <strong className='font-semibold'>Phonk Remix</strong>
              <span className='text-sm text-zinc-400'>Remix Brasil</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/images/o3.jpg' className='w-full' width={120} height={120}  alt='Capa dos álbums'/>
              <strong className='font-semibold'>Iron Maiden </strong>
              <span className='text-sm text-zinc-400'>The Trooper</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/images/6081c76f51279.jpg' className='w-full' width={120} height={120}  alt='Capa dos álbums'/>
              <strong className='font-semibold'>M4</strong>
              <span className='text-sm text-zinc-400'>Teto - feat. Matuê</span>
            </a>
          </div>
        </main>
    )
}