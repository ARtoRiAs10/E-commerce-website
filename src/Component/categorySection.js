import React from 'react'

const CategorySection = () => {
  return (
    <div>
        
<section class="category" id="category">
    <h1 class="heading">shop by <span>category</span></h1>
    <div class="box-container">

        <div class="box">
            <h3>fish fry</h3>
            <p>upto 50% off</p>
            <img decoding="async" src="category-1.jpg" alt=""/>
            <a href="/category1" class="btn">shop now</a>
        </div>
        <div class="box">
            <h3>fish curry</h3>
            <p>upto 44% off</p>
            <img decoding="async" src="category-2.jpg" alt=""/>
            <a href="#" class="btn">shop now</a>
        </div>
        <div class="box">
            <h3>sea prawn</h3>
            <p>upto 35% off</p>
            <img decoding="async" src="category-3.jpg" alt=""/>
            <a href="#" class="btn">shop now</a>
        </div>
        <div class="box">
            <h3>sea fish</h3>
            <p>upto 12% off</p>
            <img decoding="async" src="category-4.jpg" alt=""/>
            <a href="#" class="btn">shop now</a>
        </div>
    </div>
</section>

    </div>
  )
}

export default CategorySection