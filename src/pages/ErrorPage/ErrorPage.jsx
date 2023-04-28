import React from 'react'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { useParams } from 'react-router-dom'
export default function ErrorPage() {
    const {id} = useParams();
    return (
        <ErrorMessage errorNum = {id}/>
    )
}
