import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { writable } from "svelte/store"

const firebaseConfig = {
  apiKey: "null",
  authDomain: "null",
  projectId: "null",
  storageBucket: "null.appspot.com",
  messagingSenderId: "null",
  appId: "1:null:web:null",
  measurementId: "null"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()

function userStore() {
  let unsubscribe: () => void

  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser")
    const { subscribe } = writable(null)
    return { subscribe }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user)
    })

    return () => unsubscribe()
  })

  return { subscribe }
}

export const user = userStore()
