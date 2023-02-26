import React from 'react'











export default function SideBar() {
  return (
    <div class="left-side-box">
                <div class="lsb-title">
                    <h2>DASHBOARD</h2>
                </div>
                <div class="lsb-content middle sticky">
                    <div class="lsb-profile">
                        <div class="img"><img src="/img/avtar.png" alt=""/></div>
                        <div class="profile-detail">
                            <div>Rk1097</div>
                            <div><a href="">Edit Profile</a></div>
                        </div>
                    </div>

                    <div class="lsb-items mid-animation">
                        <ion-icon name="home-outline"></ion-icon>
                        <a href="">Home</a>
                    </div>

                    <div class="lsb-items mid-animation ">
                        <ion-icon name="Apps-outline"></ion-icon>
                        <a href="">Portfolio</a>
                    </div>

                    <div class="lsb-items mid-animation">
                        <ion-icon name="Apps-outline"></ion-icon>
                        <a href="">Templates</a>
                    </div>

                    <div class="lsb-items mid-animation">
                        <ion-icon name="add-circle"></ion-icon>
                        <a href="">Build New</a>
                    </div>

                    <div class="lsb-items mid-animation">
                        <ion-icon name="person-outline"></ion-icon>
                        <a href="">Need Help?</a>
                    </div>
                </div>
            </div>
  )
}
