import {useState} from '#app'

export function useFlashes() {

    const flashes = useState('flashes', (): { id: number, message: string, level: string }[] => [])

    const addFlash = (message: string, level = 'info') => {
        const id = Date.now()
        flashes.value.push({id, message, level})
        setTimeout(() => {
            removeFlash(id)
        }, 5000)
    }

    const removeFlash = (id: number) => {
        flashes.value = flashes.value.filter(flash => flash.id !== id)
    }

    return {
        flashes,
        addFlash,
        removeFlash
    }
}