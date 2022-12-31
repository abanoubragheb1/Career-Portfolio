function mymessage() {
  document.getElementById("task").innerHTML = "Fill Correct Informations";
}

const file = document.querySelector("#file")
file.addEventListener("change", function my() {
  const reader = new FileReader()
  reader.addEventListener("load", () => {
    document.querySelector("#image1").src = reader.result
  })
  reader.readAsDataURL(this.files[0]);
})

const file2 = document.querySelector("#file2")
file2.addEventListener("change", function my() {
  const reader2 = new FileReader()
  reader2.addEventListener("load", () => {
    document.querySelector("#image2").src = reader2.result
  })
  reader2.readAsDataURL(this.files[0]);
})

const file3= document.querySelector("#file3")
file3.addEventListener("change", function my() {
  const reader3 = new FileReader()
  reader3.addEventListener("load", () => {
    document.querySelector("#image3").src = reader3.result
  })
  reader3.readAsDataURL(this.files[0]);
})

const file4 = document.querySelector("#file4")
file4.addEventListener("change", function my() {
  const reader4 = new FileReader()
  reader4.addEventListener("load", () => {
    document.querySelector("#image4").src = reader4.result
  })
  reader4.readAsDataURL(this.files[0]);
})

const file5 = document.querySelector("#file5")
file5.addEventListener("change", function my() {
  const reader5 = new FileReader()
  reader5.addEventListener("load", () => {
    document.querySelector("#image5").src = reader5.result
  })
  reader5.readAsDataURL(this.files[0]);
})

const file6 = document.querySelector("#file6")
file6.addEventListener("change", function my() {
  const reader6 = new FileReader()
  reader6.addEventListener("load", () => {
    document.querySelector("#image6").src = reader6.result
  })
  reader6.readAsDataURL(this.files[0]);
})

const file7 = document.querySelector("#file7")
file7.addEventListener("change", function my() {
  const reader7 = new FileReader()
  reader7.addEventListener("load", () => {
    document.querySelector("#image7").src = reader7.result
  })
  reader7.readAsDataURL(this.files[0]);
})

const file8 = document.querySelector("#file8")
file8.addEventListener("change", function my() {
  const reader8 = new FileReader()
  reader8.addEventListener("load", () => {
    document.querySelector("#image8").src = reader8.result
  })
  reader8.readAsDataURL(this.files[0]);
})

const file9 = document.querySelector("#file9")
file9.addEventListener("change", function my() {
  const reader9 = new FileReader()
  reader9.addEventListener("load", () => {
    document.querySelector("#image9").src = reader9.result
  })
  reader9.readAsDataURL(this.files[0]);
})

const file10 = document.querySelector("#file10")
file10.addEventListener("change", function my() {
  const reader10 = new FileReader()
  reader10.addEventListener("load", () => {
    document.querySelector("#image10").src = reader10.result
  })
  reader10.readAsDataURL(this.files[0]);
})



const file11 = document.querySelector("#ar")
file11.addEventListener("change", function my() {
  const reader11 = new FileReader()
  reader11.addEventListener("load", () => {
    document.querySelector("#image11").src = reader11.result
  })
  reader11.readAsDataURL(this.files[0]);
})