import { Avatar, AvatarImage } from '@/components/ui/avatar'
interface SalesProps{
    avatar:any, 
    name:string,
    email:string,
    money:number
}
const SalesCard = ({avatar, name, email, money}:SalesProps) => {
  return (
    <div className='flex items-center justify-between mx-5 hover:scale-105'>
        <div className='flex flex-row py-3 items-center'>
            <Avatar className='w-10 h-10  mr-3'>
            <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            
            <div className='grid grid-cols-1'>
                <h3 className='text-white'>{name}</h3>
                <p className='text-gray-500 text-xs'>{email}</p>
            </div>
        </div>
        <div className=''>
        <h2 className='text-white'>+${money.toFixed(2)}</h2>
        </div>
        
    </div>
  )
}

export default SalesCard