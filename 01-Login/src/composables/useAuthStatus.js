import { ref } from 'vue'
import { PassageUser } from '@passageidentity/passage-elements/passage-user'

export function useAuthStatus(){
  const isLoading = ref(true)
  const isAuthorized = ref(false)
  const username = ref('')

  new PassageUser().userInfo().then(userInfo => {
      if(userInfo === undefined){
          isLoading.value = false
          return
      }
      username.value = userInfo.email ? userInfo.email : userInfo.phone
      isAuthorized.value = true
      isLoading.value = false
  })

  return {
    isLoading,
    isAuthorized,
    username,
  }
}