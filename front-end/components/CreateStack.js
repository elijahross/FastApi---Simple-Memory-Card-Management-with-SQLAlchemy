'use client'
import React from 'react'
import { useState } from 'react'
import api from './api'

function CreateStack() {
    const [toggle, setToggle] = useState(false)
    const [formData, setFormData] = useState ({
        "title": ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await api.post('/', formData)
        if (response.status === 200){
            setToggle(true)
            setTimeout(() => {
                setToggle(false)
              }, 3000);
        }
        setFormData({
            "title": ""
        })
    }

    const handleChange = (e) => {
        const value = e.target.value
        setFormData({
            ...formData,
            [e.target.name]: value,
        })
    }

  return (
    <div className='relative'>
        <div className={`${!toggle ? "translate-y-[-500px] transition-all" : "translate-y-[-50px] transition-all" } absolute top-0 max-w-[100px] text-center m-auto standart_style`}>
            Done ;)
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col p-8 justify-center standart_style'>
        <span className='m-auto pt-2 pb-4'>New Stack</span>
            <div className='mb-4 flex flex-row justify-between items-center'>
                <label className='p-4'>Name</label>
                <input name={"title"}  onChange={handleChange} value={formData.title} className='h-[20px] rounded-md px-4'/>
            </div>
            <button type="submit" className='btn'>Create</button>
        </form>
    </div>
  )
}

export default CreateStack