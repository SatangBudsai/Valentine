"use client"

import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='flex justify-between px-5 py-8'>
            <div className='flex gap-1 items-center text-sm'>
                Copyright
                <Icon icon="tdesign:copyright" className='text-base' />
                2024 | VALENTINE
            </div>
            <div className='text-sm'>
                BY SATANG
            </div>
        </div>
    )
}

export default Footer