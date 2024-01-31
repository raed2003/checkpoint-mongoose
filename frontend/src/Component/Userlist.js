import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getusers } from '../Redux/Action';

export const Userlist = () => {
    const dispatch  = useDispatch()
    useEffect(()=>(
        dispatch(getusers())
    ),[dispatch])
    const users = useSelector(state=>state.users)
  return (
    <div>
         {users.map(user =><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          age: {user.age}
          <br />
          gender: {user.gender}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>)}
    </div>
  )
}
