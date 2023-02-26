











export const getAllSubjectReducer = (state = { notes: {}, loading: true }, action) => {
    switch (action.type) {
        case 'GET_SUBJECT_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_SUBJECT_SUCCESS': return {
            loading: false,
            notes: action.payload.data,
            sem: action.payload.sem
        }
        case 'GET_SUBJECT_FAILED': return {
            loading: false,
            error: action.payload
        }
        case 'GET_SUBJECT_NULL': return {
            loading: false,
            notFound: action.payload.notFound,
            year: action.payload.year,
            sem: action.payload.sem
        }
        default: return state
    }
}

export const getResumeEditReducer = (state = { data: '', loading: true }, action) => {
    console.log(action.payload)
    let resume = {
        "profile": {
            "name": "Ronit Kumar",
            "jobTitle": "web dev",
            "email": "r@gmail.com",
            "phone": "+916200336831",
            "address": "",
            "about": "some descripotion here with no meaning and value just to increase the characters so i can test the UI",
            "links": {
                "linkedIn": "",
                "github": ""
            }
        },
        "education": [{
            "degree": "B.tech",
            "school": "SRMIST",
            "city": "chennai",
            "country": "India",
            "startDate": "2020",
            "endDate": "2024",
            "description": "Some description here"
        }, {

            "degree": "Secondary Higher School",
            "school": "Army Public School",
            "city": "Lucknow",
            "country": "India",
            "startDate": "2020",
            "endDate": "2024",
            "description": "Some description here"

        }],
        "skill": ["cpp", "AWS", "React"],
        "experience": [{
            "jobTitle": "WEb intern",
            "employer": "Webily",
            "city": "",
            "country": "",
            "startDate": "10/2021",
            "endDate": "11/2021",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse itaque inventore error iste maxime"
        }],
        "project": [{
            "title": "My project",
            "subTitle": "subtitle",
            "link": "",
            "startDate": "",
            "endDate": "",
            "description": "some descripotion here with no meaning and value just to increase the characters so i can test the UI"
        }],
        "intersts": "Playing cricket , reading books"
    }
    switch (action.type) {
        case 'GET_RESUME_SUCCESS': return {
            loading: false,
            data: action.payload.resume
        }
        default: return {
            loading: false,
            resume: resume
        }
    }
}