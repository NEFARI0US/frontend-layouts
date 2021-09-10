// document.querySelectorAll(".question").forEach((question) => question.addEventListener("click", function (){
//     if(question.parentNode.classList.contains("active"))
//     {
//         question.parentNode.classList.toggle("active")
//     }
//     else{
//         document.querySelectorAll(".question").forEach((question) => question.parentNode.classList.remove("active"))
//         question.parentNode.classList.add("active")
//     }
// }));

function toggle(id)
{
    let questions = document.getElementById(id);

    if(questions.nextElementSibling.style.display != 'none')
    {
        questions.nextElementSibling.style.display ='none';
        questions.lastElementChild.style.transform = 'rotate(0deg)';
    }
    else
    {
        questions.nextElementSibling.style.display = 'block';
        questions.lastElementChild.style.transform = 'rotate(180deg)';
    }

}