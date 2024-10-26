import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='DescriptionBox'>
        <div className="descriptionBox-navigator">
            <div className="descriptionBox-nav-box">Description</div>
            <div className="descriptionBox-nav-box fade">Review (122)</div>
        </div>
        <div className="descriptionBox-description">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, excepturi dolores tenetur, aperiam ut neque quae quas, ea tempore maiores alias omnis aspernatur est ipsum deserunt provident autem voluptatum? Mollitia?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptates quasi id voluptate, voluptas consequuntur reprehenderit sequi mollitia amet excepturi repellendus non? Dolore provident cum facilis distinctio. Omnis, dolores praesentium!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem exercitationem magnam eum, dolor minus eveniet quam accusantium incidunt nam a perspiciatis veritatis fuga soluta eos. Minima maiores eos cum consequatur.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox