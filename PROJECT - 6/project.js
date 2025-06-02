//
async function generalShortLink(){
const longUrl = document.getElementById ("longUrl").value;
const apiUrl = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(longUrl)
//  console.log(apiUrl)

//
  try{
    const response  = await fetch (apiUrl)
    const shortUrl = await response.text()
    if(shortUrl){
      document.getElementById('shortUrl').innerText = shortUrl
    }else{
      throw new error ('erreur')
    }

  }catch(error){
      console.log("erreur", error)
      document.getElementById('shortUrl').innerText = 'Impossible'
  }
}

//
function CopyShortUrl() {
const shortUrlElement  = document.getElementById('shortUrl')
const range = document.createRange()
range.selectNode(shortUrlElement)
window.getSelection().removeAllRanges()
window.getSelection().addRange(range)
//
document.execCommand('copy')
document.getSelection().removeAllRanges()
window.getSelection().removeAllRanges() 

}