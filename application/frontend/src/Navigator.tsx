interface UserState {
    uuid: string;
    displayName: string;
    signIn: () => void;
    signOut: () => void;
}


function Navigator() {
    const handleNavigation = () => {
        console.log("navigate")
    }
    return(handleNavigation())
} 

export default Navigator;