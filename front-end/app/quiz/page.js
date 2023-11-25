'use client'
import React from 'react'
import api from '@/components/api'
import { useState, useEffect } from 'react'
import { Suspense } from 'react'
import Link from 'next/link.js'


const page = () => {
const [options, setOptions] = useState([])
const [lmnt, setLmnt] = useState([])
const [card, setCard] = useState([])
const [length, setLength] = useState(0)
const [toggle, setToggle] = useState(false)
const getOptions = async() => {
    const skip = 0
    const limit = 20
    const response = await api.get('/', skip, limit)
    setOptions(response.data)
}
useEffect(() =>{
    getOptions();
    showCards(1);
}, [])

const handleChange = async(e) => {
    let flow = showCards(e.target.value)
    setLmnt(flow)
}

const showCards = async(query) => {
    const value = `/stack/?stack_id=${query}`
    const respon = await api.get(value)
    const array = respon.data.cards
    const mix = array.sort(() => {return 0.5 - Math.random()})
    setLmnt(mix)
    setCard(mix[0])
    return card }
    
const previousCard = () => {
    if (length >= 1) {
    setToggle(false)
    setCard(lmnt[length-1])
    setLength(length - 1)}
    else {

    }

}

const nextCard = () => {
    if (length <= (lmnt.length-2)) {
    setToggle(false)
    setCard(lmnt[length + 1])
    setLength(length + 1)}
    else {

    }
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative">
        <Link href="/" className='fixed left-8 top-8 btn'> Back </Link>
        <div className='fixed bottom-8 left-8 btn' onClick={previousCard}>Previous Card</div>
        <div className='fixed bottom-8 right-8 btn' onClick={nextCard}>Next Card</div>
        <div className='fixed bottom-8 mx-auto btn' onClick={() => setToggle(prevState => !prevState)}>Show Card</div>
        <div className='flex flex-row standart_style mb-20'>
            <h1 className='font-mono mr-4 '>
            Choose Stack:
            </h1>
            <select name={"stack_id"} className='bg-transparent font-mono cursor-pointer' onChange={handleChange}>
                {options.map((l) => <option value={l.id} key={l.id}>{l.title}</option>)}
            </select>
        </div>
        <div className='align-top items-start'>
            <Suspense fallback={<p>Loading feed...</p>}>
                <div className={`standart_style min-h-[240px] min-w-[360px] max-w-[360px] text-center self-center`}>
                    {!toggle ? <p>{card.title}</p> : <p>{card.title}<br/> - <br/>{card.description}</p>}
                </div>
            </Suspense>
        </div>
    </main>
  )
}

export default page
