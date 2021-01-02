const router = require("express").Router();
const db = require("../models/index");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
      // console.log("workouts", dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOne({ _id: req.params.id })
    .then(dbWorkout => {
      db.Workout.findOneAndUpdate({ "_id": req.params.id }, { "exercises": [req.body, ...dbWorkout.exercises] }, { new: true })
        .then(dbWorkoutN => {
          res.json(dbWorkoutN);
        })
        .catch(err => {
          res.json(err);
        });
    })
})

router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
