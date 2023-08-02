import {v4 as uuidV4} from "uuid"

console.log(uuidV4);

const list = document.querySelector<HTMLUListElement>('#list');
const form  = document.querySelector<HTMLFormElement>('#new-task-form');
const input = document.querySelector<HTMLInputElement>('#new-task-title');

form?.addEventListener("submit",e=>{
  e.preventDefault()

  if(input?.value == ""||input?.value==null)return

  const task={
    id:uuidV4(),
    title:input.value,
    compeleted:false,
    createdAt:new  Date()
  }
})