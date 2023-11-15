import {ref, computed, onMounted} from "vue";
import {defineStore} from "pinia";
import axios from "axios";
import {property} from "lodash/util";


export const useCommonStore = defineStore('common', () => {

    const companyName = ref('AllBusiness E-commerce');
    const serverName =ref(window.location.origin);
    const firstName = ref("");
    const lastName = ref("");

    const fullName = computed(() => {
        firstName + " " + lastName;

    });

    const setName = (_firstName="", _lastName="") => {
        firstName.value = _firstName;
        lastName.value = _lastName;
    }
onMounted(()=>{

    setTimeout(()=>{
        //console.log(self.name.toString());
       //console.log(serverName.value);

//console.log(self.va);

    },3000)
});

    async function setFromNet() {

      await  axios.get("http://127.0.0.1:8000/api/test").then(response => {

             firstName.value = response.data.fname;
             lastName.value = response.data.lname;

        });
       // return "test";
    }

    return {

        
        companyName, serverName, firstName, lastName, fullName, setName,setFromNet
    }
})