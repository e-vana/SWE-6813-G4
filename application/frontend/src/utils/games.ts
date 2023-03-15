import api from '../APIs/users'

export async function getGames(){
    try{
        const res: any = await api.get("/api/games");
        console.log(res);
        return res.data;
    } catch (err){
        console.log(err)
    }
}