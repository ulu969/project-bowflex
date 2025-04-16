//class for bowflex exercises
class Bowflex {
  exercise = [exName, pgNumber];
  category = "";
}
const workouts = [
  //chest
  [
    "Chest",
    ["Bench Press", 22],
    ["Chest Fly", 22],
    ["Decline Bench Press", 23],
    ["Incline Bench Press", 23],
    ["Decline Chest Fly", 24],
    ["Incline Chest Fly", 24],
  ],
  //Shoulder Exercises:
  [
    "Shoulder",
    ["Reverse Fly", 25],
    ["Crossover Reverse Fly", 25],
    ["Crossover Rear Deltoid Rows", 26],
    ["Crossover High Rear Deltoid Rows", 26],
    ["Lateral Shoulder Raise ", 27],
    ["Forearm Lateral Shoulder Raise ", 27],
    ["Front Shoulder Raise ", 28],
    ["Seated Shoulder Press", 28],
    ["Shoulder Rotator Cuff (internal)", 29],
    ["Shoulder Rotator Cuff (external) ", 29],
    ["Shoulder Extension", 30],
    ["Shoulder Shrug  ", 30],
    ["Scapular Protraction ", 31],
    ["Scapular Depression", 31],
  ],
  //Back Exercises
  [
    "Back",
    ["Good Morning", 32],
    ["Standing Low Back Extension", 32],
    ["Standing Shoulder Pullover w/ Bent Lat Bar", 33],
    ["Standing Shoulder Pullover w/ Hand Grips", 33],
    ["Narrow Pulldowns w/ Bent Lat Bar", 34],
    ["Narrow Pulldowns w/ Hand Grips", 34],
    ["Bent Over Row", 35],
    ["Crossover Bent Over Row", 35],
    ["Reverse Grip Pulldowns w/ Lat Bar", 36],
    ["Reverse Grip Pulldowns w/ Hand Grips"],
    ["Crossover Wide Pulldowns w/ Hand Grips", 37],
    ["Crossover Narrow Pulldowns w/ Hand Grips", 37],
    ["Pulldowns", 38],
    ["Stiff Arm Pulldowns", 38],
    ["Seated Lat Pulldowns", 39],
    ["Seated Wide Lat Pulldowns", 39],
  ],
  //Arm Exercises
  [
    "Arm",
    ["Triceps Pushdown w/ Hand Grips", 40],
    ["Triceps Hammer Pushdown", 40],
    ["Triceps Pushdown w/ Bent Lat Bar", 41],
    ["Single Arm Pushdown", 41],
    ["Triceps Extension", 42],
    ["Cross Triceps Extension", 42],
    ["Hammer Triceps Extension", 43],
    ["Rope Pushdown", 43],
    ["Triceps Kickback", 44],
    ["Hammer Triceps Kickback", 44],
    ["Resisted Dip", 45],
    ["Biceps Curl", 45],
    ["Standing Biceps Curl", 46],
    ["Hammer Biceps Curl", 46],
    ["Concentration Biceps Curl", 47],
    ["Reverse Curl", 47],
    ["Barbell Biceps Curl", 48],
    ["Reverse Barbell Biceps Curl", 48],
    ["Seated Biceps Curl", 49],
    ["Seated Biceps Hammer Curl", 49],
    ["Arm Opposition Push-Pull", 50],
    ["Upper Body Opposition Push-Pull", 50],
    ["Wrist Extension", 51],
    ["Wrist Curl", 51],
  ],

  //Abdominal Exercises
  [
    "Abdominal",
    ["Trunk Rotation", 52],
    ["Seated (resisted) Oblique Abdominal Crunch", 52],
    ["Seated (resisted) Abdominal Crunch", 53],
  ],
  //Leg Exercises
  [
    "Leg",
    ["Leg Extension", 54],
    ["Squat", 54],
    ["Standing Hip Extension (knee bent)", 55],
    ["Standing Hip Extension (knee extended)", 55],
    ["Leg Kickback", 56],
    ["Hip Flexion", 56],
    ["Dead Lift", 57],
    ["Stiff Leg Dead Lift", 57],
    ["Standing Hip Adduction", 58],
    ["Standing Hip Abduction", 58],
  ],
];
console.log("workouts", ...workouts);
const groups = [...workouts];
console.log("groups", groups);
