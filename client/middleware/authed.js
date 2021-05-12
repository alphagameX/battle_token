export default function ({store, redirect}) {
    if(store.state.auth.token == null && store.state.auth.club == null)
        return redirect('/')
}