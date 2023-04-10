
import apiHelper from '@/utils/apiHelper';


const callPeople=()=>{
  return apiHelper.get(apiHelper.apiUrl.client, 'people');
}

const clientUserServer=()=>{
  return apiHelper.get(apiHelper.apiUrl.client, 'user');
}



export default {
  callPeople,
  clientUserServer,
}
