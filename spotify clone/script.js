
async function main() {
  let a = await fetch("http://127.0.0.1:5500/songs/")
  let output = await a.text();
  console.log(output)
  const div = document.createElement("div")
  div.innerHTML =output;
  let as = document.getElementsByTagName("a");
  console.log(as);
  let songs=[];
  for(let index =0;index<as.length;index++){
    const element = as[index];
    if(element.href.endsWith(".mp3")){
      songs.push(element.href);
    }
  }
  console.log(songs);

}

main();
