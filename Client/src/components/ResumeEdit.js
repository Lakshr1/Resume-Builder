import React from "react";
import Resume1Temp from "./Resume1Temp";
import { useEffect, useState } from "react";
import RichTEditor from './RichTEditor'
import $ from 'jquery';
import { useDispatch, useSelector } from "react-redux";
import { resumeEdit } from "../actions/resumeEditAction";
import axios from "axios";


export default function ResumeEdit({ resume, loading, getResume }) {

  const [ProfileEdit, setProfileEdit] = useState(false)
  const [educationEdit, seteducationEdit] = useState(false)
  const [projectEdit, setprojectEdit] = useState(false)
  const [skillEdit, setskillEdit] = useState(false)


  //Profile Fields states
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [jobTitle, setjobTitle] = useState('')
  const [address, setaddress] = useState('')
  const [linkedIn, setlinkedIn] = useState('')
  const [github, setgithub] = useState('')
  const [about, setabout] = useState('')

  function updateProfile() {
    const data = {
      "field": "profile",
      "data": {
        "name": `${name != '' ? name : resume.profile.name}`,
        "jobTitle": `${jobTitle != '' ? jobTitle : resume.profile.jobTitle}`,
        "email": `${email != '' ? email : resume.profile.email}`,
        "phone": `${phone != '' ? phone : resume.profile.phone}`,
        "address": `${address != '' ? address : resume.profile.address}`,
        "about": `${about != '' ? about : resume.profile.about}`,
        "links": {
          "linkedIn": `${linkedIn != '' ? linkedIn : resume.profile.links.linkedIn}`,
          "github": `${github != '' ? github : resume.profile.links.github}`
        }
      }
    }

    console.log(data)

    axios.patch(`/api/update-resume/63680388c9a216d5d977ec19`, data, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then(
      (response) => {
        console.log(response.data)
        getResume()
      },
      (error) => {
        if (error.response.status == 401) {
        }
      }
    );

    toggleEdit('profile')
  }

  const [degree, setdegree] = useState('')
  const [school, setschool] = useState('')
  const [city, setcity] = useState('')
  const [country, setcountry] = useState('')
  const [eduStartDate, seteduStartDate] = useState('')
  const [eduEndDate, seteduEndDate] = useState('')
  const [eduDescription, seteduDescription] = useState('')
  const [isNewEducation, setisNewEducation] = useState(false)
  const [educationId, seteducationId] = useState('')
  const [educationEditCurrent, seteducationEditCurrent] = useState({})   //Data upon which editing will happen containg _id of doc

  function updateEducation() {
    if (isNewEducation) {
      const data = {
        "field": "education",
        "data": {
          "degree": `${degree}`,
          "school": `${school}`,
          "city": `${city}`,
          "country": `${country}`,
          "startDate": `${eduStartDate}`,
          "endDate": `${eduEndDate}`,
          "description": `${eduDescription}`
        },
        "type": "new"
      }
      console.log(data)
      axios.patch(`/api/update-resume/63680388c9a216d5d977ec19`, data, {
        headers: {
          "Content-Type": "application/json",
        }
      }).then(
        (response) => {
          console.log(response.data)
          getResume()
          toggleEdit('education')
        },
        (error) => {
          if (error.response.status == 401) {
          }
        }
      );

    }
    else {
      const data = {
        "field": "education",
        "data": {
          "degree": `${degree == '' ? educationEditCurrent.degree : degree }`,
          "school": `${school == '' ? educationEditCurrent.school : school}`,
          "city": `${city == '' ? educationEditCurrent.city : city}`,
          "country": `${country == '' ? educationEditCurrent.country : country}`,
          "startDate": `${eduStartDate == '' ? educationEditCurrent.startDate : eduStartDate}`,
          "endDate": `${eduEndDate == '' ? educationEditCurrent.endDate : eduEndDate}`,
          "description": `${eduDescription == '' ? educationEditCurrent.description : eduDescription}`
        },
        "docId": `${educationEditCurrent._id}`
      }
      console.log(data)
      axios.patch(`/api/update-resume/63680388c9a216d5d977ec19`, data, {
        headers: {
          "Content-Type": "application/json",
        }
      }).then(
        (response) => {
          console.log(response.data)
          getResume()
          toggleEdit('education')
          
        },
        (error) => {
          if (error.response.status == 401) {
          }
        }
      );
    }
  }

  function deleteEducationItem(eduId){
    if(window.confirm('Delete the item?')){
      axios.delete(`/api/delete-education/63680388c9a216d5d977ec19/${eduId}`, {
        headers: {
          "Content-Type": "application/json",
        }
      }).then(
        (response) => {
          console.log(response.data)
          getResume()
        },
        (error) => {
          if (error.response.status == 401) {
          }
        }
      );
    }
    
  }

  function toggleEdit(type) {
    console.log(type)
    switch (type) {
      case 'profile':
        setProfileEdit(!ProfileEdit)
        console.log(ProfileEdit)
        break;
      case 'education':
        seteducationEdit(!educationEdit)
        setisNewEducation(false)
        setdegree('')
        setschool('')
        setcity('')
        setcountry('')
        seteduStartDate('')
        seteduEndDate('')
        seteduDescription('')
        break;

      default:
        break;
    }
  }

  const Data = useSelector((state) => state.getResumeEditReducer);
  // const { resume, loading } = Data

  // console.log(resume, loading)




  function changePickupStoreMenu() {
    var body = $("body"),
      mask = $('<div class="mask"></div>'),
      toggleSlideRight = document.querySelector(".toggle-slide-right"),
      slideMenuRight = document.querySelector(".slide-menu-right"),
      activeNav = "";
    $("body").append(mask);

    /* slide menu right */
    toggleSlideRight.addEventListener("click", function () {
      $("body").addClass("smr-open");
      $(".mask").fadeIn();
      activeNav = "smr-open";
      slideMenuRight.style.display = "block";
    });

    /* hide active menu if close menu button is clicked */
    $(document).on("click", ".close-menu", function (el, i) {
      $("body").removeClass(activeNav);
      activeNav = "";
      $(".mask").fadeOut();
      slideMenuRight.style.display = "none";
    });
  }

  useEffect(() => {
    changePickupStoreMenu()
  }, [])


  return (
    <>
      <div class="right-content-box">
        <div class="right-option-bar">
          <div class="r-option-box1">
            <div class="rb1-c1">
              <div class="dropdown">
                <button
                  class="btn btn-menu dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resume 1
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-center"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Add another
                    </a>
                  </li>
                  {/* <li><a class="dropdown-item" href="#">Another action</a></li>
                                  <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                </ul>
              </div>

              <div class="btn btn-warning my-2 mx-2">
                <button id="generatePDF">Download PDF</button>
              </div>
            </div>

            <div class="rb1-c2 personal-detail">
              <div class="rb1-box-head">
                <div class="icon">
                  <ion-icon name="person-outline"></ion-icon>
                </div>
                <div class="personal-detail-text">Personal Details</div>
                <div class="personal-detail-edit">
                  <div class="edit" onClick={() => { toggleEdit('profile') }} >
                    <ion-icon name="create-outline"></ion-icon>
                    <div>Edit</div>
                  </div>
                </div>
              </div>
              <div class="rb1-c2-content">
                <div class={`c2-content-body profileDataView ${ProfileEdit == true ? 'displayNone' : ''} `}>
                  <div class="left-c2-c">
                    <div class="display-img">
                      <div class="dp-img">
                        <img src="/img/avtar.png" alt="" />
                      </div>
                    </div>
                    <div class="peronal-phone">
                      <div class="peronal-text">Phone :</div>
                    </div>
                    <div class="personal-email">
                      <div class="personal-email">Email :</div>
                    </div>
                  </div>

                  <div class="right-c2-c">
                    <div class="personal-r-name">
                      <div class="personal-name-text">{resume.profile.name}</div>
                    </div>
                    <div class="personal-r-phone">{resume.profile.phone}</div>
                    <div class="perosnal-r-email">{resume.profile.email}</div>
                  </div>
                </div>
                <div className={`profileEditInput  ${ProfileEdit == false ? 'displayNone' : ''} `}>
                  <div className="profileEditWrap">

                    <div className="profile-input-merge">
                      <div className="profile-input profile-name">
                        <label>Full Name</label>
                        <input type="text" className="w-80" value={name != '' ? name : resume.profile.name} onChange={(e) => setname(e.target.value)} />
                      </div>
                      <div className="profile-input profile-email">
                        <label>Email</label>
                        <input type="email" className="w-80" value={email != '' ? email : resume.profile.email} onChange={(e) => setemail(e.target.value)} />
                      </div>
                    </div>
                    <div className="profile-input-merge">
                      <div className="profile-input profile-jobTitle">
                        <label>Job Title</label>
                        <input type="text" className="w-80" value={jobTitle != '' ? jobTitle : resume.profile.jobTitle} onChange={(e) => setjobTitle(e.target.value)} />
                      </div>
                      <div className="profile-input profile-phone">
                        <label>Phone</label>
                        <input type="text" className="w-80" value={phone != '' ? phone : resume.profile.phone} onChange={(e) => setphone(e.target.value)} />
                      </div>
                    </div>
                    <div className="profile-input profile-phone">
                      <label>Address</label>
                      <input type="text" className="w-80" value={address != '' ? address : resume.profile.address} onChange={(e) => setaddress(e.target.value)} />
                    </div>
                    <div className="profile-input-merge-heading">
                      Links
                    </div>
                    <div className="profile-input-merge">
                      <div className="profile-input profile-jobTitle">
                        <label>LinkedIn</label>
                        <input type="text" className="w-80" value={linkedIn != '' ? linkedIn : resume.profile.links.linkedIn} onChange={(e) => setlinkedIn(e.target.value)} />
                      </div>
                      <div className="profile-input profile-phone">
                        <label>Github</label>
                        <input type="text" className="w-80" value={github != '' ? github : resume.profile.links.github} onChange={(e) => setgithub(e.target.value)} />
                      </div>
                    </div>
                    <div className="profile-input profile-name">
                      <label>About</label>
                      <textarea id="w3review" name="w3review" className="w-80" value={about != '' ? about : resume.profile.about} onChange={(e) => setabout(e.target.value)} rows="6" cols="50">

                      </textarea>
                    </div>


                  </div>
                  <div className="profileEditActionBtns d-flex w-100">
                    <div className="Save-btn w-20 mx-4 my-4">
                      <button className="btn btn-success w-100" onClick={() => updateProfile()}>Save</button>
                    </div>
                    <div className="Cancel-btn w-20 mx-4 my-4">
                      <button className="btn w-80 " onClick={() => { toggleEdit('profile') }}>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="rb1-c5 personal-education">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      <div class="personal-project-head">
                        <div class="icon">
                          <ion-icon name="book"></ion-icon>
                        </div>
                        <div class="head-text">Education</div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">

                      <div className={`${educationEdit == true ? 'displayNone' : ''} `}>

                        {resume.education.map((data) => {
                          return (
                            <div className="education-content d-flex">
                              <div className="education-content-title">
                                <div className="education-upperBox d-flex">
                                  <div className="education-Degree">
                                    {data.degree} -
                                  </div>
                                  <div className="education-school">
                                    {data.school}
                                  </div>
                                </div>
                                <div className="education-lowerBox d-flex">
                                  <div className="education-startDate">
                                    {data.startDate} -
                                  </div>
                                  <div className="education-endDate">
                                    {data.endDate}
                                  </div>
                                </div>
                              </div>
                              <div className="education-actions d-flex">
                                <div class="edit" onClick={() => { seteducationEditCurrent(data); toggleEdit('education'); }} >
                                  <ion-icon name="create-outline"></ion-icon>
                                  <div>Edit</div>
                                </div>
                                <div class="delete-action" onClick={()=>{deleteEducationItem(data._id)}}>
                                  <ion-icon name="trash"></ion-icon>
                                  <div>Delete</div>
                                </div>
                              </div>

                            </div>
                          )
                        })}
                      </div>

                      <div className={`${educationEdit == false ? 'displayNone' : ''} `}>

                        <div className="input-merge ">
                          <label>Degree</label>
                          <input type="text" className="w-80" value={isNewEducation ? (degree) :( degree!='' ? degree : educationEditCurrent.degree)} onChange={(e) => setdegree(e.target.value)} />
                        </div>

                        <div className="input-merge ">
                          <label>School</label>
                          <input type="text" className="w-80" value={isNewEducation ? (school) : (school!='' ? school : educationEditCurrent.school)} onChange={(e) => setschool(e.target.value)} />
                        </div>

                        <div className="input-merge d-flex">
                          <div className="profile-input profile-jobTitle w-50">
                            <label>City</label>
                            <input type="text" className="w-80" value={isNewEducation ? (city) : (city !='' ? city : educationEditCurrent.city)} onChange={(e) => setcity(e.target.value)} />
                          </div>

                          <div className="profile-input profile-jobTitle w-50">
                            <label>Country</label>
                            <input type="text" className="w-80" value={isNewEducation ? (country) :(country !='' ? country : educationEditCurrent.country)} onChange={(e) => setcountry(e.target.value)} />
                          </div>
                        </div>

                        <div className="input-merge d-flex">
                          <div className="profile-input profile-jobTitle w-50">
                            <label>Start Date</label>
                            <input type="text" className="w-80" value={isNewEducation ? (eduStartDate) : (eduStartDate !='' ? eduStartDate : educationEditCurrent.startDate)} onChange={(e) => seteduStartDate(e.target.value)} />
                          </div>

                          <div className="profile-input profile-jobTitle w-50">
                            <label>End Date</label>
                            <input type="text" className="w-80" value={isNewEducation ? (eduEndDate) : (eduEndDate !='' ? eduEndDate : educationEditCurrent.endDate)} onChange={(e) => seteduEndDate(e.target.value)} />
                          </div>
                        </div>

                        <div className="profile-input ">
                          <label>Description</label>
                          <textarea id="w3review" name="w3review" className="w-80" value={isNewEducation ? (eduDescription) : (eduDescription!='' ? eduDescription : educationEditCurrent.description)} onChange={(e) => seteduDescription(e.target.value)} rows="6" cols="50">
                          </textarea>
                        </div>

                        <div className="profileEditActionBtns d-flex w-100">
                          <div className="Save-btn w-20 mx-4 my-4">
                            <button className="btn btn-success w-100" onClick={() => updateEducation()}>Save</button>
                          </div>
                          <div className="Cancel-btn w-20 mx-4 my-4">
                            <button className="btn w-80 " onClick={() => { toggleEdit('education'); }}>Cancel</button>
                          </div>
                        </div>

                      </div>

                      <div className="newObject isNewEducation">
                        <div className="newObjectBtn">
                          <div class="add-btn w-20" onClick={() => { toggleEdit('education'); setisNewEducation(true); }} >
                            <ion-icon name="add"></ion-icon>
                            <div>Add</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="rb1-c3 personal-project">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <div class="personal-project-head">
                        <div class="icon">
                          <ion-icon name="folder"></ion-icon>
                        </div>
                        <div class="head-text">Projects</div>
                        <div class="personal-detail-edit">
                          <div class="edit">
                            <ion-icon name="create-outline"></ion-icon>
                            <div>Edit</div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body" id="projectFieldsBody">
                      <div class="ProjectDropbox1">
                        <p class="head">
                          <b>Create Project </b>
                        </p>
                        <button type="button" class="ProjectButton">
                          <img src="/img/icon.png" alt="" class="ProjectImage" />{" "}
                          Tips
                        </button>
                        <div class="content">
                          <div>
                            <p>
                              <b>Project Title *</b>
                            </p>
                          </div>
                          <input
                            type="text"
                            id="projectTitle"
                            placeholder="Enter Project Title"
                            class="InputProject"
                          />
                        </div>
                        <div class="linkbox">
                          <button type="button" class="LinkButton">
                            <img src="/img/link.png" alt="" class="LinkImage" />{" "}
                            Link
                          </button>
                        </div>
                        <div class="content">
                          <div>
                            <p>
                              <b>Sub Title</b>
                              <sub> (Optional)</sub>
                            </p>
                          </div>
                          <input
                            type="text"
                            id="projectSubTitle"
                            placeholder="Enter Sub Title"
                            class="InputProject"
                          />
                          <div class="startdate">
                            <p>
                              <b>Start Date</b>
                              <sub> (Optional)</sub>
                            </p>
                            <input type="month" placeholder="Month" />
                            <p>
                              <b>End Date</b>
                              <sub> (Optional)</sub>
                            </p>
                          </div>
                        </div>
                        <div className="rich-text-editor">
                          < RichTEditor />
                        </div>
                        <div class="SaveDelbtn my-2 d-flex">
                          <button
                            type="button"
                            onclick="projectEdit(1)"
                            class="btn mx-2 btn-success"
                          >
                            Save
                          </button>
                          <button type="button" class="btn mx-4 btn-danger">
                            Delete
                          </button>
                        </div>
                      </div>

                      <div class="addnew my-4">
                        <button
                          onclick="Addproject()"
                          type="button"
                          class="btn btn-primary"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="rb1-c4 personal-skills">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <div class="personal-project-head">
                        <div class="icon">
                          <ion-icon name="bulb"></ion-icon>
                        </div>
                        <div class="head-text">Skills</div>
                        <div class="personal-detail-edit">
                          <div class="edit">
                            <ion-icon name="create-outline"></ion-icon>
                            <div>Edit</div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <div class="skills">
                        <p class="head">
                          <b>Create Skill</b>
                        </p>
                        <button type="button" class="ProjectButton">
                          <img src="iicon.png" alt="" class="ProjectImage" /> Tips
                        </button>
                        <div class="skill">
                          <div class="skillHeading">
                            <p>
                              <b>Skill *</b>
                            </p>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Skill"
                            class="InputProject"
                          />
                          <div class="sub-skillHeading">
                            <p>
                              <b>Sub-skills</b>
                              <sub> (recommended)</sub>
                            </p>
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Sub-Skill"
                            class="InputProject"
                          />
                          <div class="sub-skillHeading">
                            <p>
                              <b>Select Skill Level</b>
                              <sub> (optional)</sub>
                            </p>
                          </div>
                          <input
                            type="text"
                            placeholder="Skill-Level"
                            class="InputProject"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div class="add-content">
            <button type="button" class="button">
              + Add Content
            </button>
          </div>
        </div>

        <div class="right-temp-box">
          <div class="menu slide-menu-right">
            <button class="close-menu">Close &rarr;</button>
            <div class="resume-temp">
              <Resume1Temp resume={resume} />
            </div>
          </div>
          <div class="right-arrow">
            <button class="toggle-slide-right">
              <i class="fa-solid fa-circle-chevron-left"> P r e v i e w </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
