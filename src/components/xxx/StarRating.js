import { FaStar } from 'react-icons/fa';

export default function StarRating() {
  return ([
    <FaStar color="red" />,
    <FaStar color="red" />,
    <FaStar color="red" />,
    <FaStar color="grey" />,
    <FaStar color="grey" />
  ])
}

function Star({ selected = false }) {
  return (
    <FaStar color={selected ? 'red' : 'grey'} />
  )
}


const creareArray = length => [...Array(length)];