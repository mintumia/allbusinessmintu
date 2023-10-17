import {ref, computed} from "vue";
import {defineStore} from "pinia";
import axios from "axios";


export const useCommonStore = defineStore('common', () => {

    const firstName = ref("");
    const lastName = ref("");

    const fullName = computed(() => {
        firstName + " " + lastName;

    });

    const setName = (_firstName="", _lastName="") => {
        firstName.value = _firstName;
        lastName.value = _lastName;
    }

    function setFromNet() {

        axios.get("http://127.0.0.1:8000/api/test").then(response => {

             firstName.value = response.data.fname;
             lastName.value = response.data.lname;

        });
       // return "test";
    }

    return {
        firstName, lastName, fullName, setName,setFromNet
    }
})