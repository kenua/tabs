/*
   TABS PROCESS
      Reference every 'tab-content' element and 'tabs__button' and set the first content element and button to be the 
         current elements in variables. This variables will be used to hide the previous content and button.

      When a button is clicked, hide the current content and unselect the current button. Then show and select the 
         current content and button.

   TABS ANIMATION
      When a tab is selected the current one should slide down while its opacity increases. 
*/

const tabButtonsContainer = document.querySelector('#tab__buttons-container');
const tabButtons = document.querySelectorAll('.tab__button');
const tabContentNodes = document.querySelectorAll('.tab-content');
let currentTabButton = tabButtons[0];
let currentTabContent = tabContentNodes[0];

tabButtonsContainer.addEventListener('click', e => {
   let target = e.target;

   if (target.getAttribute('href')) { // check if target is an anchor
      let id = target.getAttribute('href');

      // # unselect previous tab content and button
      currentTabButton.classList.remove('tab__button--selected');
      currentTabContent.classList.remove('tab-content--fade-in');
      currentTabContent.classList.add('tab-content--fade-out');

      console.log(currentTabContent);

      // # select current tab content and button
      target.classList.add('tab__button--selected');
      currentTabButton = target;
      for (let i = 0; i < tabContentNodes.length; i++) {
         if ('#'+tabContentNodes[i].id === id) {
            tabContentNodes[i].classList.remove('tab-content--fade-out');
            tabContentNodes[i].classList.add('tab-content--fade-in');
            currentTabContent = tabContentNodes[i];
            break;
         }
      }
   }
});