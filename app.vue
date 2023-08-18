<script setup lang="ts">
const { status, signIn, signOut, data } = useSession()

const loggedIn = computed(() => status.value === 'authenticated')

async function handleSignIn() {
  await signIn()
}

async function handleSignOut() {
  await signOut()
}
</script>

<template>
  <div>
    <div>
      <div>
        <div v-if="loggedIn">
          <NuxtPage/>
          <div>{{ data }}</div>
        </div>

      </div>      
      <button v-if="loggedIn" @click="handleSignOut">Log Out</button>
      <div v-else>
        <h2>Please Log in with your Outlook Account</h2>
        <button @click="handleSignIn">
          Log In
        </button>
      </div>
      
    </div>
  </div>
</template>