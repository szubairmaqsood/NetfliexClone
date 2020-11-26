const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

// Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
   
    // Add border to current tab
    this.classList.add('tab-border');
    const tabContentItem =  document.getElementById(this.id);
   
   
   
    for(i=0; i<tabItems.length;i++)
    {
        if(tabItems[i].id==this.id)
        {
            tabContentItems[i].classList.add('show');
        }
    }

 
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}


function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}



// JS Complete