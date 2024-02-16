import Logo from '../public/logo.png'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-cards'



export function App() {
  return (
    <div className=' mx-auto max-w-6xl my-12 space-y-6 '>
      <img className='w-20 h-20 ' src={Logo} alt="" />

      <form className='w-full'>
        <input type="text"
          placeholder='Busca em suas notas...'
          className='bg-transparent w-full text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500 '
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard />
        <NoteCard note={{
          date: new Date(),
          content: 'Hello World'
        }} />


      </div>
    </div>

  )
}

