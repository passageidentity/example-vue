import { ref } from 'vue'
import axios from 'axios'

const API_URL = "http://localhost:7001"

export function useAuthStatus(){
  const isLoading = ref(true)
  const isAuthorized = ref(false)
  const username = ref('')

  const authToken = localStorage.getItem("psg_auth_token");
  axios
    .post(`${API_URL}/auth`, null, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((response) => {
      const { authStatus, identifier } = response.data;
      if (authStatus === "success") {
        isLoading.value = false
        isAuthorized.value = authStatus
        username.value = identifier
      } else {
        isLoading.value = false
        isAuthorized.value = false
        username.value = ''
      }
    })
    .catch((err) => {
      console.log(err);
      isLoading.value = false
      isAuthorized.value = false
      username.value = ''
    });

  return {
    isLoading,
    isAuthorized,
    username,
  }
}