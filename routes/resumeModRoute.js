const experss = require("express");
const router = experss.Router();
const ResumeProfileDB = require('../models/profileResumeModel')


router.get('/get-resume/:id', async (req, res) => {
    try {
        const resume = await ResumeProfileDB.findOne({ user: req.params.id })
        res.json(resume)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.patch('/update-resume/:id', async (req, res) => {
    try {
        //req.params.id is _id of the resume data
        const id = req.params.id
        const { field, data, type , docId } = req.body
        if (field == 'profile') {
            console.log(data)
            const resumeUpdate = await ResumeProfileDB.findByIdAndUpdate({ _id: id }, {
                profile: data
            }, {
                returnDocument: "after"
            })
            res.json({ Success: "Data updated", data: resumeUpdate })
        }
        else if (field == 'education') {
            if (type == "new") {
                console.log('Education new')
                const resumeUpdate = await ResumeProfileDB.findByIdAndUpdate({ _id: id }, {
                    $push: {
                        education: data
                    }
                },{
                    returnDocument:"after"
                })
                res.json({ Success: "Data updated", data: resumeUpdate })
            }
            else{
                const resumeUpdate = await ResumeProfileDB.findOneAndUpdate({ _id: id }, {
                    $set: {
                        "education.$[s]": data,
                    },
                },
                    {
                        arrayFilters: [{ "s._id": docId }],
                        returnDocument:"after"
                    }
                )
                res.json({ Success: "Data updated", data: resumeUpdate })
            }
            
        }
    } catch (error) {

        res.status(400).json(error)
    }
})


router.delete('/delete-education/:id/:eduId' , async(req,res)=>{
    try {
        const id = req.params.id
        const eduId  = req.params.eduId

        const resumeUpdate = await ResumeProfileDB.findByIdAndUpdate({ _id: id }, {
            $pull: {
                education: {_id:eduId}
            }
        },{
            returnDocument:"after"
        })
        res.json({Success:"Item Deleted" , data:resumeUpdate})
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;