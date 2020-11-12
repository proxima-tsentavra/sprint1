'use strict';

/**
 * Генерация HTML списка чатов
 * @param {Chat[]} chats
 * @return {HTMLUListElement}
 */

function makeChatsList(chats) {
 
  let fragment = document.createDocumentFragment();
  let ul = document.createElement('ul');
  
  for(let i = 0; i < chats.length; i++){
    let li = document.createElement('li');
    li.innerHTML=chats[i].title+' '+chats[i].lastMessage;
    ul.appendChild(li);

  }
  
  fragment.appendChild(ul);
  return fragment;
}