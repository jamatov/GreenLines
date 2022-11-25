import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeMain() {
  return (
    <section className='HomeMain'>
      <div className="container">
        <div className="main">
          <div className="main__top-info">
            <div className="main-info__info">
              <div className='bb'>
                <p>Специализируясь на</p>
              </div>

              <ul>
                <li><Link>Болезни уха, носа и горла</Link></li>
                <li><Link>Детская отоларингология</Link></li>
                <li><Link>Ларингология</Link></li>
              </ul>

              <ul>
                <li><Link>Эндоскопическая хирургия пазух</Link></li>
                <li><Link>Аудиология и слуховые аппараты</Link></li>
                <li><Link>Нарушения голоса и глотания</Link></li>
              </ul>

              <ul>
                <li><Link>Комплексное лечение рака головы и шеи</Link></li>
                <li><Link>Хирургия основания уха и черепа</Link></li>
                <li><Link>Щитовидная/паращитовидная железа</Link></li>
              </ul>

            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}
