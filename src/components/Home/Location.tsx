import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './location.css'
import { MdOutlineArrowForwardIos } from 'react-icons/md'


const Location = (props: { name: string }) => {
  const [click, setclick] = useState(false)

  const navigate = useNavigate();
  useEffect(() => {

    if (click == true) {
      navigate('/landingPage', { replace: false })
    }
  }, [click])


  return (
    <div className='btn-container' onClick={() => {
      setclick(true)
    }}>
      <button className='btn'>{props.name}  </button>
      <MdOutlineArrowForwardIos />
    </div>
  )
}
export default Location