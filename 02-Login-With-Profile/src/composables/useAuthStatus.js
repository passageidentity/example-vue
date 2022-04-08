import { ref } from 'vue'
import { PassageUser } from '@passageidentity/passage-elements/passage-user'

export function useAuthStatus(){
  const isLoading = ref(true)
  const isAuthorized = ref(false)

  const res = new PassageUser().authGuard()
  isAuthorized.value = res
  isLoading.value = false


  return {
    isLoading,
    isAuthorized,
  }
}