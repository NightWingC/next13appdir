'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const User = ({ user }) => {

  const router = useRouter();

  return (
    <li className='flex justify-around border-b-[1px] py-5 cursor-pointer hover:opacity-80' onClick={ () => router.push( `/user/${ user.id }` ) }>
        <Image 
            alt={ user.email }
            className="rounded-full"
            height={ 150 } 
            src={ user.avatar }
            width={ 150 } 
        />
        <div>
            <h5 className='text-xl'>{ user.id } - { user.first_name } { user.last_name }</h5>
            <p>{ user.email }</p>
        </div>
    </li>
  )
}
