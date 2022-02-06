let o2 = {x:1, "my horse": "lottie1", myHorses: ["lottie2", "lottie3"], 123: 123, $ert: "lottie4"}

delete o2.x
delete o2.$ert
delete o2.myHorses
delete o2["123"]
console.log(o2)
