function displaySongInfo(event) {
    event.preventDefault()
    document.getElementById("myForm").setAttribute("style" , "display: none;")
    document.getElementById("myDiv").setAttribute("style" , "display: block;");
    const songName=document.getElementById("one").value
    const link=document.getElementById("two").value
    const description=document.getElementById("three").value
    const year=document.getElementById("four").value

    document.getElementById("one1").innerHTML =songName
    document.getElementById("two1").innerHTML =link
    document.getElementById("three1").innerHTML=description
    document.getElementById("four1").innerHTML=year
}
module.exports = {
    displaySongInfo: displaySongInfo,
};
