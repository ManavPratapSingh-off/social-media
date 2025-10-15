import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get_post_apicall } from '../apicalls/postCalls'
import { setPostData } from '../redux/postSlice'

function usePostCall() {
  const dispatch = useDispatch()
  useEffect(()=>{
    try {
        const make_get_post_apicall = async () => {
            const response = await get_post_apicall()
            dispatch(setPostData(response))
        }
        make_get_post_apicall()
    } catch (error) {
        console.error(error);
    }
  }, [])
}

export default usePostCall