const { ObjectID } = require('bson')
const mongoose = require('mongoose')


const profileResumeSchema = mongoose.Schema({
        user:{type:mongoose.Types.ObjectId, ref: 'user'},
        profile: {
            name: {type:String},
            jobTitle:{type:String},
            email: {type:String},
            phone: {type:String},
            address:{type:String} ,
            about: {type:String},
            links: {
                linkedIn:{type:String} ,
                github: {type:String}
            }
        },
        education: [{
            degree: {type:String},
            school: {type:String},
            city: {type:String},
            country: {type:String},
            startDate: {type:String},
            endDate: {type:String},
            description: {type:String}
        }],
        languages: [{type:String}],
        skill: [{type:String}],
        experience: [{
            jobTitle: {type:String},
            employer: {type:String},
            city: {type:String},
            country: {type:String},
            startDate: {type:String},
            endDate: {type:String},
            description: {type:String}
        }],
        project: [{
            title:{type:String},
            subTitle: {type:String},
            link:{type:String} ,
            startDate: {type:String},
            endDate: {type:String},
            description: {type:String}
        }],
        intersts: {type:String}
})

const profileResumeModel = mongoose.model('profile_Resume', profileResumeSchema)
module.exports = profileResumeModel