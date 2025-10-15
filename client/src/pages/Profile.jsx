import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { get_param_user } from '../apicalls/userCalls.js'
import { useDispatch } from 'react-redux'
import { setProfileData } from '../redux/userSlice.js'
import ProfileMain from '../components/ProfileMain.jsx'
import Navbar from '../components/Navbar.jsx'

function Profile() {
    const {user_name} = useParams()
    const dispatch = useDispatch()
    const get_call_response = async () => {
        try {
            const data = await get_param_user(user_name)            
            dispatch(setProfileData(data))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        get_call_response()
    }, [])

  return (
    <div className='w-screen h-screen bg-[var(--color-bg)] flex justify-end'>
        <Navbar/>
        <div className='w-[84%] h-full flex flex-col justify-start items-center'>
            <ProfileMain/>
            <div className='w-[80%] h-full bg-[var(--color-surface)] rounded-4xl'></div>
        </div>
    </div>
  )
}

export default Profile