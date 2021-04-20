document.addEventListener('DOMContentLoaded', function(){

  // 點到誰 誰就被劃掉/還原
  let lis = document.querySelectorAll('ul > li');
  for(let i=0; i < lis.length; i++){
    lis[i].addEventListener('click', function(){
      this.classList.toggle('checked');
    })
  }

  // 刪掉任務
  let spans = document.querySelectorAll('ul > li > span');
  for(let i=0; i < spans.length; i++){
    spans[i].addEventListener('click', function(){
      spans[i].parentNode.remove();
    })
  }

  // 新增任務
  function addLi(liContent){
    const newSpan = document.createElement('span');
    newSpan.classList.add('close');
    newSpan.textContent = 'x';
    
    newSpan.addEventListener('click', function(){
      this.parentNode.remove()
    })

    const newLi = document.createElement('li');
    newLi.textContent = liContent;
    newLi.appendChild(newSpan);

    newLi.addEventListener('click', function(){
      this.classList.toggle('checked');
    })






    return newLi;
  }
  document.getElementById('addBtn').addEventListener('click', function(){
    let liContent = document.querySelector('#input').value;
    document.querySelector('ul').appendChild(addLi(liContent));
    document.querySelector('#input').value = '';
    // console.log(spans.length);
  })












})