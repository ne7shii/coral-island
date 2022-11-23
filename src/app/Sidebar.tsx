import React, { PropsWithChildren } from 'react'
import Link from 'next/link'


const Sidebar = () => {
    return (
        <>
            <div className='w-50 bg-background w-72 h-full p-4 pt-12 gap'>
                <MenuItem name='Home' url='/' />
                <MenuItem name='Fish' url='/fish' />
            </div>
        </>
    )
}


const MenuItem = (props: { name: string, url: string }) => (
    <Link href={props.url}>
        <div className='mt-3 bg-white justify-end flex flex-row rounded-2xl p-2 text-primary text-3xl font-bold hover:bg-primary hover:text-white hover:cursor-pointer transition-all duration-200'>
            <div className='w-fit mr-2'>
                {props.name}
            </div>
        </div>
    </Link>
)


export default Sidebar