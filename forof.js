const obj={
    name: "kowsika",
    age: 28,
    gender : "Female",
    work: "Analyst",
    place: "Kalpakkam",
    city: "chennai",
    State: "Tamilnadu",
    Country: "India",
    Hobby: ["Painting","Watching movie","cooking"],
}

for(const [key,value] of Object.entries(obj)){
    console.log(`${key}:${value}`)
}

for(let x in obj){
    console.log(x)
} 

const Hobby=["Painting","Watching movie","cooking"]
Hobby.forEach((el)=>{
    console.log(el)
})
