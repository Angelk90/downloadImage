async function getData(){
 const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Tyrannosaurus_rex_Sue_at_FMNH.jpg/440px-Tyrannosaurus_rex_Sue_at_FMNH.jpg";
 return url;
}

getData().then((url) => {
 console.log(url);
});
