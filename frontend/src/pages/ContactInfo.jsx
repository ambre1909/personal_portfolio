import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetAllContactData } from '../redux/contactAction';

export default function ContactInfo() {
    const dispatch = useDispatch()
    const { contactData } = useSelector(state => state.allcontact)
    useEffect(() => {
        dispatch(GetAllContactData())
    }, [])

    return (<>
        <h1>{JSON.stringify(contactData)}</h1>
        <div>ContactInfo</div>
    </>
    )
}
