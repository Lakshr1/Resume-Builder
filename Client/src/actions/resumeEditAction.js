
import axios from 'axios'


export const getAllSubject = (curyear , cursem) => async (dispatch) => {
  console.log('action called')
  dispatch({ type: "GET_SUBJECT_REQUEST" });
  let year =''
  let sem =''
  try {
    if(!cursem){

      let text = window.location.href
      let yearIndex = text.indexOf("year")
      let semIndex = text.indexOf("sem")
      // console.log(yearIndex , semIndex)
      sem = text.substring(semIndex+4,semIndex+5)
      year = text.substring(yearIndex+5,yearIndex+6)
      // console.log(year , sem , "sem year fomr link")
    }
    else{
      sem = cursem
      year = curyear
    }
    let college=localStorage.getItem("NOF_COLLEGE") ?localStorage.getItem("NOF_COLLEGE") : window.location.href = "/"
    let branch = localStorage.getItem("NOF_BRANCH") ?localStorage.getItem("NOF_BRANCH") : window.location.href = "/"
    college =college.toUpperCase()
   


    // const data = {
    //   college: "SRM",
    //   year: "1",
    //   sem: "1",
    //   subjects: [
    //     {
    //       name: "Software management and design",
    //       codename: "SEPM",
    //       notes: [
    //         {
    //           title: "Unit 1",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             },
    //             {
    //               heading:"Question bank",
    //               link:"wwo.gon.com"
    //             },
    //             {
    //               heading:"Merged",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         },
    //         {
    //           title: "Unit 2",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         },
    //         {
    //           title: "Unit 3",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       name: "Datastructure and algo design",
    //       codename: "DSA",
    //       notes: [
    //         {
    //           title: "Unit 1",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             },
    //             {
    //               heading:"Question bank",
    //               link:"wwo.gon.com"
    //             },
    //             {
    //               heading:"Merged",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         },
    //         {
    //           title: "Unit 2",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         },
    //         {
    //           title: "Unit 3",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       name: "Computer Communication",
    //       codename: "CC",
    //       notes: [
    //         {
    //           title: "ALL Units",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             },
    //             {
    //               heading:"Question bank",
    //               link:"wwo.gon.com"
    //             },
    //             {
    //               heading:"Merged",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         },
    //         {
    //           title: "Unit 2",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         },
    //         {
    //           title: "Unit 3",
    //           material: [
    //             {
    //               heading:"All in one",
    //               link:"wwo.gon.com"
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // };
    const response = await axios.get(`/api/notes/${college}/${branch}/${year}?sem=${sem}`)
    console.log(response.data)
    if(!response.data){
      dispatch({type:"GET_SUBJECT_NULL" , payload:{notFound:"No data Found :[" , year:year ,sem:sem}})
    }
    else{
      dispatch({ type: "GET_SUBJECT_SUCCESS", payload: {data:response.data ,sem:sem} });
    }

  } catch (error) {
    dispatch({ type: "GET_SUBJECT_FAILED", payload: error });
    console.log(error);
  }
};


export const resumeEdit = (field , data) => async(dispatch)=>{

    const resumeExist = localStorage.getItem("resume")
    let resume;
    if(resumeExist){

    }
    else{
        resume = {
            "profile": {
                "name":"ronit",
                "jobTitle":"web dev",
                "email":"r@gmail.com",
                "phone":"",
                "address":"",
                "links":{
                    "linkedIn":"",
                    "github":""
                }
            },
            "skill":["cpp" , "AWS" , "React"],
            "experience":[{
                "jobTitle":"WEb intern",
                "employer":"",
                "city":"",
                "country":"",
                "startDate":"",
                "endDate":"",
                "description":"Some description here"
            }],
            "project":[{
                "title":"My project",
                "subTitle":"subtitle",
                "link":"",
                "startDate":"",
                "endDate":"",
                "description":"some descripotion here with no meaning and value just to increase the characters so i can test the UI"
            }],
            "intersts":"Playing cricket , reading books"
        }

      }

    console.log("Resume Edit called")
    //localStorage.setItem("resume",pass)
    //dispatch({ type: "UPDATE_RESUME_SUCCESS", payload: {field , data} });
    dispatch({ type: "GET_RESUME_SUCCESS", payload:{resume} });

};