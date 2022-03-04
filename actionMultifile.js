async function getData(){
let a = "a [this](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/T._rex_infection.png/440px-T._rex_infection.png)!"
let b = "b [this](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/T._rex_infection.png/440px-T._rex_infection.png)! - [this](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mosasaurus-Skelett.jpg/440px-Mosasaurus-Skelett.jpg)"
let c = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/T._rex_infection.png/440px-T._rex_infection.png"
let d = ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/T._rex_infection.png/440px-T._rex_infection.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mosasaurus-Skelett.jpg/440px-Mosasaurus-Skelett.jpg"]
let e = "['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Tyrannosaurus_rex_Sue_at_FMNH.jpg/440px-Tyrannosaurus_rex_Sue_at_FMNH.jpg']"
let f = "['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Tyrannosaurus_rex_Sue_at_FMNH.jpg/440px-Tyrannosaurus_rex_Sue_at_FMNH.jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Mosasaurus_beaugei_34.JPG/440px-Mosasaurus_beaugei_34.JPG']"
return b;
}

getData().then((url) => {
 console.log(url);
});
