import '../stylesheets/CurrentDate.css'

const CurrentDate = () => {

  const date = new Date()
  const week = date.toLocaleString('es', { weekday: 'long' })
  const day = date.toLocaleString('es', { day: 'numeric' })
  const month = date.toLocaleString('es', { month: 'long' })
  const year = date.toLocaleString('es', { year: 'numeric' })

  return (
    <div className='date'>
      <div className='date-left'>
        <div className='day'>{day}</div>
        <div>
          <div className='month'>{month}</div>
          <div className='year'>{year}</div>
        </div>
      </div>
      <div className='week'>{week}</div>

    </div>
  )
}

export default CurrentDate