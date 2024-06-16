"use strict";

document.addEventListener("DOMContentLoaded", function () {
  init();

  /**
   * init - write your logic here
   */
  function init() {
    const buyBtns = document.querySelectorAll(".js-buy-tickets");
    const modal = document.querySelector(".js-modal");
    const modalContainer = document.querySelector(".js-container");
    const modalClose = document.querySelector(".js-close");

    function showBuy() {
      modal.classList.add("open"); // bấm vào modal thì thêm 1 class là 'open'
    }

    function hideBuy() {
      modal.classList.remove("open");
    }

    for (const buyBtn of buyBtns) {
      buyBtn.addEventListener("click", showBuy);
    }
    modalClose.addEventListener("click", hideBuy);
    modal.addEventListener("click", hideBuy);
    modalContainer.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    const showList = document.getElementsByClassName("header-list")[0];
    const headerLists = document.getElementsByClassName("list");

    for (const headerList of headerLists) {
      showList.addEventListener("click", () => {
        headerList.classList.toggle("show-list");
      });

      headerList.addEventListener("click", () => {
        for (const headerList of headerLists) {
           headerList.classList.toggle("show-list"); 
        }
        
      });

    }
  }
});
