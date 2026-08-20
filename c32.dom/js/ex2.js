document.addEventListener('DOMContentLoaded',()=>{

    const tabs = document.querySelectorAll('.tabs>div');
    const tabContens = document.querySelectorAll('.tab-contens>div');

    tabs.forEach(function(tab1,index){
        tab1.addEventListener('click',function(){
            tabs.forEach(tab2=>tab2.classList.remove('on'));
            tab1.classList.add("on");
            tabContens.forEach(tabContent=>tabContent.classList.remove('on'));
            tabContens[index].classList.add('on');
        });
    });

   
});