import { initializeApp } from "firebase/app"
import { getFirestore, onSnapshot } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { derived, writable, type Readable } from "svelte/store"
import { doc } from "firebase/firestore"

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

export function docStore<T>(path: string) {
  const docRef = doc(db, path)

  let unsubscribe: () => void

  const { subscribe } = writable<T | null>(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null)
    })

    return () => unsubscribe()
  })

  return {
    subscribe,
    ref: docRef,
    id: docRef.id
  }
}

interface UserData {
  username: string;
  bio: string;
  photoURL: string;
  links: string[];
}

export const userData = derived(user, ($user, set) => {
  if ($user) {
    return docStore<UserData>(`users/${$user.uid}`).subscribe(set)
  } else {
    set(null)
  }
})