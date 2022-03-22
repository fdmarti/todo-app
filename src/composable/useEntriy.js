import { useStore } from "vuex"
import Swal from 'sweetalert2'

const useEntry = () => {

    const store = useStore()

    const getEntries = () =>  {
        store.dispatch('getEntries')
    }

    const entries = () => store.getters['getEntries']

    const addEntry = ( entry ) => {
        if ( entry && entry.length > 2 ) store.dispatch('addEntry',entry)
        else {
            Swal.fire({
                title : 'Error',
                text: 'The task must contain more than 2 characters',
            })
        }
    }
    
    const confirmDeleteEntry = ( id ) => {
        Swal.fire({
            title: 'Do you want to delete the task?',
            showCancelButton: true,
            confirmButtonText: 'Yes! Sure',
        }).then((result) => {
        if (result.isConfirmed) {
            deleteEntry(id)
            Swal.fire('Deleted!', '', 'success')
        }
        })
    }

    const deleteEntry = ( id ) => {
        store.dispatch('deleteEntry',id)
    }

    const changeStateEntry = ( id ) => {
        store.dispatch('changeStateEntry',id)
    }

    return {
        addEntry,
        changeStateEntry,
        confirmDeleteEntry,
        deleteEntry,
        entries,
        getEntries,
    }

}


export default useEntry