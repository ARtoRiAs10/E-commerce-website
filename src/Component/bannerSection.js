import React from 'react'

const BannerSection = () => {
  return (
    <div>

<section class="banner-container">

<div class="banner">
    <img decoding="async" src="/assets/banner-1.jpg" alt=""/>
    <div class="content">
        <h3>special offer</h3>
        <p>upto 45% off</p>
        <a href="#" class="btn">check out</a>
    </div>
</div>

<div class="banner">
    <img decoding="async" src="/assets/banner-2.jpg" alt=""/>
    <div class="content">
        <h3>limited offer</h3>
        <p>upto 50% off</p>
        <a href="#" class="btn">check out</a>
    </div>
</div>

<div class="banner">
    <img decoding="async" src="/assets/banner-3.jpg" alt=""/>
    <div class="content">
        <h3>premium offer</h3>
        <p>upto 50% off</p>
        <a href="#" class="btn">check out</a>
    </div>
</div>


</section>

    </div>
  )
}

export default BannerSection