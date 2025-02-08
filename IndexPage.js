import { link } from "./Baselink.js"

console.log(link)

const topics = ['Design', 'Marketing', 'Finance', 'Education', 'Music'];

//for design topics
const headingtext = document.getElementsByClassName("designHeading")
const paratext = document.getElementsByClassName("designPara")
const designimages = document.getElementsByClassName("designimage")
const designlink = document.getElementsByClassName("designlink")
console.log(headingtext, paratext)
axios.post(`${link}/api/v1/insight/getinsightbytopic`, { topic: topics[0] })
    .then((response) => {
        if (response.data.data.length < 3) {
            const maindiv = document.getElementById("designmaindiv")
            maindiv.style.display = "none"
        } else {
            console.log(response.data.data)
            console.log("links ", response.data.data[0]._id)
            headingtext[0].innerText = response.data.data[0].title
            headingtext[1].innerText = response.data.data[1].title
            headingtext[2].innerText = response.data.data[2].title

            paratext[0].innerText = response.data.data[0].content
            paratext[1].innerText = response.data.data[1].content
            paratext[2].innerText = response.data.data[2].content

            designimages[0].src = response.data.data[0].Image
            designimages[1].src = response.data.data[1].Image
            designimages[2].src = response.data.data[2].Image
            
            designlink[0].href = `/topics-detail.html?id=${response.data.data[0]._id}`
            designlink[1].href = `/topics-detail.html?id=${response.data.data[1]._id}`
            designlink[2].href = `/topics-detail.html?id=${response.data.data[2]._id}`

            document.getElementById("nocontent").style.display = "none"
            // console.log(nocontent)
            // nocontent.style.display = "none"
        }
    })
    .catch((err) => {
        console.log(err)
        const maindiv = document.getElementById("designmaindiv")
        maindiv.style.display = "none"
    })


//for marketing tag
const marketingheadingtext = document.getElementsByClassName("marketingheading")
const marketingParatext = document.getElementsByClassName("marketingpara")
const marketingimages = document.getElementsByClassName("marketingimage")
const marketinglink = document.getElementsByClassName("marketinglink") 
axios.post(`${link}/api/v1/insight/getinsightbytopic`, { topic: topics[1] })
    .then((response) => {
        console.log("marketig",response.data)
        if (response.data.data.length < 3) {
            const maindiv = document.getElementById("marketingmaindiv")
            maindiv.style.display = "none"
        } else {
            console.log(response.data.data)
            marketingheadingtext[0].innerText = response.data.data[0].title
            marketingheadingtext[1].innerText = response.data.data[1].title
            marketingheadingtext[2].innerText = response.data.data[2].title

            marketingParatext[0].innerText = truncateText(response.data.data[0].content)
            marketingParatext[1].innerText = truncateText(response.data.data[1].content)
            marketingParatext[2].innerText = truncateText(response.data.data[2].content)

            marketingimages[0].src = response.data.data[0].Image
            marketingimages[1].src = response.data.data[1].Image
            marketingimages[2].src = response.data.data[2].Image


            marketinglink[0].href = `/topics-detail.html?id=${response.data.data[0]._id}`
            marketinglink[1].href = `/topics-detail.html?id=${response.data.data[1]._id}`
            marketinglink[2].href = `/topics-detail.html?id=${response.data.data[2]._id}`

            document.getElementById("marketingnocontent").style.display = "none"
            // console.log(nocontent)
            // nocontent.style.display = "none"
        }
    })
    .catch((err) => {
        console.log(err)
        const maindiv = document.getElementById("marketingmaindiv")
        maindiv.style.display = "none"
        document.getElementById("marketingnocontent").style.display = "inline"

    })



