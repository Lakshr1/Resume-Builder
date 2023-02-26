import React from 'react'











export default function Resume1Temp({ resume }) {

    console.log(resume)

    return (

        <div class="page_format" id="htmlContent">
            <div class="header">
                <h1 className='text-danger'>{resume.profile.name}</h1>
                <h5>{resume.profile.jobTitle}</h5>
            </div>
            <div class="contact">
                <div class="heading">
                    <h2>CONTACT</h2>
                </div>
                <ul className='d-flex justify-content-around'>
                    <li><a href="Linkein">Linkedin</a></li>
                    <li><a href="Phone no">Phone-no</a></li>
                    <li><a href="Github">Github</a></li>
                </ul>
            </div>
            <div class="about">
                <div class="heading">
                    <h2>ABOUT</h2>
                </div>
                <div class="data">
                    <p>
                        {resume.profile.about}
                    </p>
                </div>
            </div>
            <div class="education">
                <div class="heading">
                    <h2>EDUCATION</h2>
                </div>

                {resume.education.map((data) => {
                    return (
                        <div class="data">
                            <h4>
                                {data.degree} : {data.school}, {data.city} <br />
                            </h4>
                        </div>
                    )
                })}
            </div>
            <div class="programming">
                <div class="heading">
                    <h2>PROGRAMMING LANG.</h2>
                </div>
                <ul>
                    {resume.skill.map((data) => {
                        return (
                            <li>{data}</li>
                        )
                    })}
                </ul>
            </div>
            <div class="skills">
                <div class="heading">
                    <h2>SKILLS</h2>
                </div>
                <table>
                    <tr>
                        <td>
                            <li>Data Structures</li>
                        </td>
                        <td>
                            <li>Competitive Prog.</li>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <li>Android Studio</li>
                        </td>
                        <td>
                            <li>Visual Studio</li>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <li>Adobe Photoshop</li>
                        </td>
                        <td>
                            <li>Adobe Illustrator</li>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="project" id="project">
                <div class="heading">
                    <h2>Professional Experience</h2>
                </div>

                {resume.experience.map((data) => {
                    return (
                        <div class="data">
                            <p style={{ display: "flex" }}>
                                <b>{data.jobTitle}</b> {` - ` + data.employer}
                                <span style={{ marginLeft: "auto", marginRight: "50px" }}>{data.startDate}-{data.endDate}</span>
                            </p>

                            <p>
                                {data.description}
                            </p>
                        </div>
                    )
                })}


            </div>
            <div class="project" id="project">
                <div class="heading">
                    <h2>PROJECTS</h2>
                </div>

                {/* <div class="data" id="projectData">
            <p class="project-name" style="display: flex">
                <b>WallMart</b> - A Wallpaper App
                <span style="margin-left: auto; margin-right: 50px">10/2021-11/2021</span>
            </p>

            <p class="project-discription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse itaque inventore error iste maxime minus accusantium praesentium. Corporis, delectus et!
            </p>
        </div> */}
                <div class="data">
                    <p style={{ display: "flex" }}>
                        <b>WallMart</b> - A Wallpaper App
                        <span style={{ marginLeft: "auto", marginRight: "50px" }}>10/2021-11/2021</span>
                    </p>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse itaque inventore error iste maxime minus accusantium praesentium. Corporis, delectus et!
                    </p>
                </div>

            </div>
            <div class="hobby">
                <div class="heading">
                    <h2>Interest</h2>
                </div>
                <div class="data">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore mollitia sit ab labore hic nam, recusandae blanditiis quas aut obcaecati reprehenderit velit exercitationem magnam error alias numquam officia voluptatum facere deserunt. Illum
                        quibusdam excepturi, nostrum iste laudantium veritatis possimus.
                    </p>
                </div>
            </div>
        </div>
    )
}
