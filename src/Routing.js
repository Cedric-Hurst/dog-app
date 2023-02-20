import { Route, Routes, Navigate } from 'react-router-dom'
import DogHome from './DogHome'
import DogShow from './DogShow'

export default function Routing(props) {
    return (
    <Routes>
        <Route path='dogs'>
          <Route index={true} element={<DogHome dogs={props.dogs} />} />
          {props.dogs.map((dog,i) =>
            <Route key={i} path={dog.name} element={<DogShow dog={dog} /> } />)
          }
          <Route path="*" element={<Navigate to='/dogs'/>} />
        </Route>
        <Route path="*" element={<Navigate to='/dogs'/>} />
        </Routes>
    )
}