import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNumbers() {
  return (
    <div className='MainNumbers'>
      <div className="container">
        <div className="main-numbers">
          <div>
            <p className='number'>3</p>
            <p className='text'>Долина <br /> Места</p>
            <Link>Посмотреть Карту</Link>
          </div>

          <div>
            <p className="number">10</p>
            <p className='text'>Топ Отоларингология <br /> Врачи</p>
            <Link>ПОСМОТРЕТЬ БИОС ВРАЧА</Link>
          </div>

          <div>
            <p className="number">1</p>
            <p className='text'>Останавливаться <br /> ЛОР-провайдер</p>
            <Link>УЗНАЙТЕ О НАШИХ ПРОЦЕДУРАХ</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
