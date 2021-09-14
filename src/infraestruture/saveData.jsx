import axios from 'axios';

async function SaveEvent(conference){
  try {
    const res = axios.post('http://localhost:8088/eventospoli/api/eventos', conference)
  } catch (error) {
    console.error(error);
  }
}

export {
  SaveEvent
}