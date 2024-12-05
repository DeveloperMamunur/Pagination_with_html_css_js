const pgItems = document.querySelectorAll('.pg_item');
const prevNextBtn = document.querySelectorAll('.pg-prevNext')
const firstBtn = document.querySelector('.pg-first')
const endBtn = document.querySelector('.pg-last')
const activeLink = document.querySelector('.pg_item.active')




let currenStep = 0;
const lastIndex = pgItems.length - 1;

//=================  Button  Disable   ==================
const updateBtn = () => {
  if(currenStep === lastIndex){
    endBtn.disabled = true;
    prevNextBtn[1].disabled = true;
    firstBtn.disabled = false;
    prevNextBtn[0].disabled = false;
  } else if(currenStep === 0){
    firstBtn.disabled = true;
    prevNextBtn[0].disabled = true;
    endBtn.disabled = false;
    prevNextBtn[1].disabled = false;
  } else {
    endBtn.disabled = false;
    prevNextBtn[1].disabled = false;
    firstBtn.disabled = false;
    prevNextBtn[0].disabled = false;
  }
}

//=================  Click Link Active   ==================
pgItems.forEach((item, index) => {
  item.addEventListener('click', function(e){
    e.preventDefault();
    currenStep = index;

    document.querySelector(".active").classList.remove('active');
    item.classList.add('active');
    updateBtn();
  })
});


//=================  prev and next page button   ==================
prevNextBtn.forEach((button)=> {
  button.addEventListener('click', (e)=>{
    currenStep+= e.target.id === "next" ? 1 : -1;
    pgItems.forEach((item, index)=>{
      if(0 < index < pgItems.length){
        item.classList.toggle("active", index === currenStep);
        updateBtn();
      }
    });
  });
});


//=================  go to first page   ==================
firstBtn.addEventListener('click', function(){
  document.querySelector('.active').classList.remove('active')

  pgItems[0].classList.add('active')
  currenStep = 0;
  updateBtn();
})


//=================  go to last page   ==================
endBtn.addEventListener('click', function(){
  document.querySelector('.active').classList.remove('active')

  pgItems[lastIndex].classList.add('active')
  currenStep = lastIndex;
  updateBtn();
})
