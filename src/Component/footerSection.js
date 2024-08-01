import React from 'react';

const FooterSection = () => {
  return (
    <div>
        <section class="footer">
    <div class="box-container">
        <div class="box">
            <a href="" class="logo"><i class="fas fa-shopping-basket"></i></a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam possimus voluptates commodi laudantium!
                Doloribus sint voluptatibus quaerat farhan suscipit nulla?</p>
                <div class="share">
                    <a href="#" class="btn fab fa-facebook-f"></a>
                    <a href="#" class="btn fab fa-twitter"></a>
                    <a href="#" class="btn fab fa-instagram"></a>
                    <a href="#" class="btn fab fa-linkedin"></a>
                </div>
        </div>

        <div class="box">
            <h3>our location</h3>
            <div class="links">
                <a href="#">USA</a>
                <a href="#">india</a>
                <a href="#">dubai</a>
                <a href="#">turkey</a>
                <a href="#">azerbaijan</a>
            </div>
        </div>

        <div class="box">
            <h3>quick links</h3>
            <div class="links">
                <a href="#">home</a>
                <a href="#">category</a>
                <a href="#">product</a>
                <a href="#">deal</a>
                <a href="#">contact</a>
            </div>
        </div>

        <div class="box">
            <h3>download app</h3>
            <div class="links">
                <a href="#">google play</a>
                <a href="#">window 10</a>
                <a href="#">app store</a>
            </div>
        </div>
    </div>
    <h1 class="credit"> created by <span> Dailywebdesign </span> || all rights reserved! </h1>
</section>

    </div>
  )
}

export default FooterSection;