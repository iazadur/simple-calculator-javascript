let result = document.getElementById('inputtext')

let display = (Num) => {
    result.value = result.value + Num
}

let Result = () => {
    try {
        result.value = eval(result.value)
    }
    catch (err) {
        alert("Enter a  Valid Input")
    }
}

function Clear() {
    result.value =''
}
function del() {
    result.value =result.value.slice(0,-1)
}