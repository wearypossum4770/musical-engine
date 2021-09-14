import axios from "axios";
import {readFileSync, writeFileSync} from 'fs'
let data = JSON.parse(readFileSync('./zipcode_database.json'))
let doc = data.map(item=>({...item,cityName:item.city.toLowerCase().replace(" ", "_").replace('\'',''),abbreviationName:item.abbreviation, abbreviation:item.abbreviation.toLowerCase(),}))
console.log(doc[0])
// async function api() {
//   try {
//     const resp = await axios.get("http://localhost:3002/login");
//     console.log(resp);
//   } catch (error) {
//     console.log(error);
//   }
// }

// api();
